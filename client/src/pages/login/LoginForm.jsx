import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { Box, Button, TextField, Typography } from "@mui/material";

import { LoginUser } from "../../api";
import { Link, useNavigate } from "react-router-dom";
import AuthBox from "../../components/AuthBox";

const LoginForm = () => {
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(LoginUser, {
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      toast.success("Login Successfull");

      navigate("/");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Object.values(cred).every((field) => field.length > 0)) {
      toast.error("All fields are mandatory");
      return;
    }

    mutate(cred);
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
        width={{ xs: "100%", sm: "60%" }}
      >
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Login Account
        </Typography>

        <TextField
          variant="outlined"
          type="email"
          label="Email Address"
          name={"email"}
          value={cred?.email}
          required
          onChange={(e) =>
            setCred({ ...cred, [e.target.name]: e.target.value })
          }
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          name={"password"}
          required
          value={cred?.password}
          onChange={(e) =>
            setCred({ ...cred, [e.target.name]: e.target.value })
          }
        />

        <Typography variant="body2" textAlign="right">
          <Link to="/forgotPassword">
            <u>Forgot Password?</u>
          </Link>
        </Typography>

        <Button disabled={isLoading} type="submit" variant="contained">
          {isLoading ? "...Logging in" : "Login"}
        </Button>

        <Typography variant="body2" textAlign="center">
          Does not have an account? Please{" "}
          <Link to="/register">
            <u>Register</u>
          </Link>
        </Typography>
      </Box>
    </AuthBox>
  );
};

export default LoginForm;
