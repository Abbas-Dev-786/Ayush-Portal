import { Typography } from "@mui/material";
import AuthContainer from "../../components/auth/AuthContainer";
import ResetPasswordForm from "./ResetPasswordForm";

const ResetPassword = () => {
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
          Reset Password
        </Typography>

        <ResetPasswordForm />
      </AuthContainer>
    </div>
  );
};

export default ResetPassword;
