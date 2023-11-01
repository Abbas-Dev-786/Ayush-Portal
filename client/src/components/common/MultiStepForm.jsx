import React, { useState } from "react";
import StartupForm from "../auth/StartupForm";
import RegisterForm from "../../pages/register/RegisterForm";

import {
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const MultiStepForm = () => {
  const steps = [
    { title: "StepOne", component: <RegisterForm /> },
    { title: "StepTwo", component: <StartupForm /> },
  ];
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };
  const back = () => {
    setCurrentStep((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };
  return (
    <div className="wrapper">
      <Container sx={{ mx: { xs: 1.5 }, my: 3, py: 3 }}>
        <Stepper activeStep={1} nonLinear>
          {steps.map((e, i) => {
            <Step key={i}>
              <StepLabel>{e.title}</StepLabel>
            </Step>;
          })}
        </Stepper>
        {steps[currentStep].component}
        <Box
          sx={{
            maxWidth: "md",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            disabled={currentStep === 0 ? true : false}
            onClick={() => back()}
          >
            <ArrowBack />
            Back{" "}
          </Button>
          <Button
            disabled={currentStep >= steps.length - 1 ? true : false}
            onClick={() => next()}
          >
            Next <ArrowForward />
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default MultiStepForm;
