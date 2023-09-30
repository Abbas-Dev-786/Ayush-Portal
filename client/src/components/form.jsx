import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";

const Form = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [cred, setCred] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:8899/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cred),
    });
    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      console.log({ err: data });
    }
    console.log(data);
  };

  return (
    <Stack minWidth={450} mx={{ xs: 0, sm: 1 }}>
      <Stack
        container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        flexDirection={"column"}
      >
        <Typography variant="h4" fontWeight={700}>
          Register Account
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <TextField
            label="First Name*"
            name={"firstName"}
            value={cred?.firstName}
            onChange={(e) =>
              setCred({ ...cred, [e.target.name]: e.target.value })
            }
          />
          <TextField
            label="Last Name"
            name={"lastName"}
            value={cred?.lastName}
            onChange={(e) =>
              setCred({ ...cred, [e.target.name]: e.target.value })
            }
          />
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <TextField
            type="email"
            label="Email Address"
            name={"email"}
            value={cred?.email}
            onChange={(e) =>
              setCred({ ...cred, [e.target.name]: e.target.value })
            }
          />
          <TextField
            label="Password"
            type="password"
            name={"password"}
            value={cred?.password}
            onChange={(e) =>
              setCred({ ...cred, [e.target.name]: e.target.value })
            }
          />
        </Stack>
        <Stack width={"100%"} spacing={0.5}>
          <TextareaAutosize
            minRows={6}
            mt={4}
            name="description"
            label="Description"
            value={cred?.value}
            onChange={(e) =>
              setCred({ ...cred, [e.target.name]: e.target.value })
            }
          />
          <FormControlLabel
            control={<Checkbox onChange={() => setChecked(!checked)} />}
            label="I agree to all terms & conditions"
          />

          <Button
            disabled={
              !checked ||
              cred.firstName.length < 5 ||
              cred.lastName === "" ||
              cred?.email === "" ||
              cred?.password.length < 8
            }
            onClick={() => handleSubmit()}
            variant="contained"
            mt={2}
          >
            {loading ? "...Loading" : "Create Account"}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Form;
