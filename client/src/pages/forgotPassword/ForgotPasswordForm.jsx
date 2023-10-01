import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { forgotPassword } from "../../api";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const { mutate, isLoading } = useMutation(forgotPassword, {
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      toast.success(
        "Mail has been sent to your email address. Please check and follow the next steps"
      );
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required to reset the password");
      return;
    }

    mutate({ email });
  };

  return (
    <Box component="form" onSubmit={handleFormSubmit}>
      <TextField
        label="Email"
        id="email"
        variant="outlined"
        type="email"
        placeholder="Enter Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />
      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={isLoading}
        sx={{ mt: 2 }}
        fullWidth
      >
        {isLoading ? "Sending Mail" : "Send Mail"}
      </Button>
    </Box>
  );
};

export default ForgotPasswordForm;
