import { Typography } from "@mui/material";
import AuthContainer from "../../components/auth/AuthContainer";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <div className="wrapper">
      <AuthContainer
        maxWidth="sm"
        sx={{
          p: 5,
          m: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography variant="h4" textAlign="center" fontWeight={700}>
          Forgot Password
        </Typography>
        <Typography variant="body2" textAlign="center">
          We will send a password reset mail to your email account. After
          submitting your email address please check your inbox. Then click on
          the link to complete the process
        </Typography>
        <ForgotPasswordForm />
      </AuthContainer>
    </div>
  );
};

export default ForgotPassword;
