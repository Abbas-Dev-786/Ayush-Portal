import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { registerUser } from "../../api";
import { Link } from "react-router-dom";
import AuthBox from "../../components/auth/AuthBox";

const ROLES = ["User", "Startup", "Investor", "Incubator"];

const RegisterForm = () => {
  //   const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [cred, setCred] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmPassword: "",
    password: "",
    description: "",
    role: "",
  });

  const { mutate, isLoading } = useMutation(registerUser, {
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      toast.success("User registered Successfully. Please Login");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Object.values(cred).every((field) => field.length > 0)) {
      toast.error("All fields are mandatory");
      return;
    }

    if (cred.password !== cred.confirmPassword) {
      toast.error("Password not matching.");
      return;
    }

    if (!checked) {
      toast.error("Please Accept the aggrement.");
      return;
    }

    mutate(cred);

    setCred({
      firstName: "",
      lastName: "",
      email: "",
      confirmPassword: "",
      password: "",
      description: "",
      role: "",
    });
  };

  return (
    <AuthBox>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display={"flex"}
        justifyContent="center"
        gap={2}
        flexDirection={"column"}
        width={{ xs: "100%", sm: "80%" }}
      >
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Register Account
        </Typography>

        <Stack direction={"row"} spacing={2}>
          <TextField
            variant="outlined"
            label="First Name"
            name={"firstName"}
            value={cred?.firstName}
            type="text"
            fullWidth
            required
            onChange={(e) =>
              setCred({ ...cred, [e.target.name]: e.target.value })
            }
          />
          <TextField
            variant="outlined"
            label="Last Name"
            name={"lastName"}
            value={cred?.lastName}
            type="text"
            fullWidth
            required
            onChange={(e) =>
              setCred({ ...cred, [e.target.name]: e.target.value })
            }
          />
        </Stack>
        <TextField
          variant="outlined"
          type="email"
          label="Email Address"
          name={"email"}
          value={cred?.email}
          required
          fullWidth
          onChange={(e) =>
            setCred({ ...cred, [e.target.name]: e.target.value })
          }
        />
        <Stack direction={"row"} spacing={2}>
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            name={"password"}
            fullWidth
            required
            value={cred?.password}
            onChange={(e) =>
              setCred({ ...cred, [e.target.name]: e.target.value })
            }
          />
          <TextField
            variant="outlined"
            label="confirmPassword"
            type="password"
            name="confirmPassword"
            fullWidth
            required
            value={cred?.confirmPassword}
            onChange={(e) =>
              setCred({ ...cred, [e.target.name]: e.target.value })
            }
          />
        </Stack>
        <Autocomplete
          disablePortal
          fullWidth
          id="roles"
          options={ROLES}
          inputValue={cred?.role}
          onInputChange={(_, role) => {
            setCred({ ...cred, role: role.toLowerCase() });
          }}
          renderInput={(params) => (
            <TextField {...params} label="Are You a " required />
          )}
        />
        <TextField
          label="Description"
          name="description"
          multiline
          rows={4}
          placeholder="Enter your description"
          value={cred?.description}
          type="text"
          fullWidth
          required
          onChange={(e) =>
            setCred({ ...cred, [e.target.name]: e.target.value })
          }
        />
        <FormControlLabel
          required
          control={<Checkbox onChange={() => setChecked(!checked)} />}
          label="I agree to all terms & conditions"
        />

        <Button disabled={isLoading} type="submit" variant="contained">
          {isLoading ? "...Creating" : "Create Account"}
        </Button>

        <Typography variant="body2" textAlign="center">
          Already have an account? Please{" "}
          <Link to="/login">
            <u>Login</u>
          </Link>
        </Typography>
      </Box>
    </AuthBox>
  );
};

export default RegisterForm;
