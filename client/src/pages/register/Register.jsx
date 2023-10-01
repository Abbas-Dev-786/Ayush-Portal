import { Grid, Box } from "@mui/material";
import RegisterForm from "./RegisterForm";
import AuthContainer from "../../components/AuthContainer";

const RegisterPage = () => {
  return (
    <div className="wrapper">
      <AuthContainer
        maxWidth="xl"
        sx={{ px: { xs: 3, md: "0px !important" }, mx: 2 }}
      >
        <Grid container spacing={1}>
          <Grid item xs={0} md={6} display={{ xs: "none", md: "block" }}>
            <Box
              component="img"
              height="100%"
              src="./images/signup_banner.svg"
              className="side-image"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RegisterForm />
          </Grid>
        </Grid>
      </AuthContainer>
    </div>
  );
};

export default RegisterPage;
