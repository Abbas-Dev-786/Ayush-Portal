import { Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import RegisterForm from "./RegisterForm";
import AuthContainer from "../../components/auth/AuthContainer";

const RegisterPage = () => {
  const theme = useTheme();

  return (
    <div className="wrapper">
      <AuthContainer
        maxWidth="xl"
        disableGutters={useMediaQuery(theme.breakpoints.up("md"))}
        sx={{ m: 2, height: "100%", py: { xs: 3, md: 0 } }}
      >
        <Grid container spacing={1}>
          <Grid item xs={0} md={6} display={{ xs: "none", md: "block" }}>
            <Box
              component="img"
              height="100%"
              src="./images/signup_banner.png"
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
