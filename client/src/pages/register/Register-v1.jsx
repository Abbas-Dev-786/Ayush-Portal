import { Grid, Box, Step, Stepper, StepButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AuthContainer from "../../components/auth/AuthContainer";
import { FormContext } from "./FormContext";
import { useContext } from "react";

const RegisterPage = () => {
  const theme = useTheme();
  const { steps, activeStep, setActiveStep, user } = useContext(FormContext);
  console.log(activeStep);
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
          <Grid item xs={12} md={6} py={3}>
            <Box px={1.5} pt={2}>
              <Stepper activeStep={activeStep} nonLinear>
                {steps?.map((e, i) => {
                  console.log(user.role === e.role);
                  return (
                    <Step key={e.title}>
                      <StepButton
                        color="inherit"
                        onClick={() => setActiveStep(i)}
                      >
                        {e.title}
                      </StepButton>
                    </Step>
                  );
                })}
              </Stepper>
            </Box>
            {steps?.[activeStep]?.component}
          </Grid>
        </Grid>
      </AuthContainer>
    </div>
  );
};

export default RegisterPage;
