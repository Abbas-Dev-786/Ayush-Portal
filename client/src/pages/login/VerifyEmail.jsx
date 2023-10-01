import { Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import AuthContainer from "../../components/AuthContainer";
import { verifyEmail } from "../../api";

const VerifyEmail = () => {
  const { token } = useParams();
  const {
    data: message,
    error,
    isLoading,
  } = useQuery(["verifyEmail", token], verifyEmail);

  return (
    <div className="wrapper">
      <AuthContainer
        maxWidth="md"
        sx={{
          height: 100,
          m: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" textAlign="center" fontWeight={600}>
          {isLoading && "Verifying....."}
          {error ? error.message : message}
        </Typography>
      </AuthContainer>
    </div>
  );
};

export default VerifyEmail;
