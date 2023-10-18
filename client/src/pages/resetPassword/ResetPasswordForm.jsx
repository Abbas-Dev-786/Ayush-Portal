import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../api";

const ResetPasswordForm = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(resetPassword, {
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      toast.success("Password Reset Succesfull. Please Login");

      navigate("/login");
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error("Both fields are mandatory.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password not matching.");
      return;
    }

    mutate({ password, confirmPassword, token });
  };

  return (
    <Box
      component="form"
      display="flex"
      width="100%"
      onSubmit={handleFormSubmit}
      flexDirection="column"
      gap={3}
      mt={1}
    >
      <TextField
        id="password"
        label="New Password"
        variant="outlined"
        type="password"
        placeholder="Enter your New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
      />
      <TextField
        id="confirmPassword"
        label="Confirm Password"
        variant="outlined"
        type="password"
        placeholder="Enter your Confirm Password"
        value={confirmPassword}
        onChange={(e) => setconfirmPassword(e.target.value)}
        required
        fullWidth
      />

      <Button
        type="submit"
        variant="contained"
        disabled={isLoading}
        size="large"
        fullWidth
      >
        Change Password
      </Button>
    </Box>
  );
};

export default ResetPasswordForm;
