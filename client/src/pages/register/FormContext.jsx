import React, { createContext, useState } from "react";
import RegisterForm from "./RegisterForm";
import StartupForm from "./StartupForm";
import UserImage from "./UserImage";

export const FormContext = createContext({});

const getComp = (role) => {
  switch (role) {
    case "startup":
      return {
        role: "startup",
        title: "Enter Startup Details",
        component: <StartupForm />,
      };
    default:
      return {
        role: "user",
        title: "Enter User Details",
        component: <UserImage />,
      };
  }
};

const FormContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmPassword: "",
    password: "",
    description: "",
    role: "User" | "Startup" | "Investor" | "Incubator",
    profileImage: null,
  });
  const steps = [
    { title: "Enter credentials", component: <RegisterForm /> },

    getComp(user?.role),
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  return (
    <FormContext.Provider
      value={{
        steps: steps,
        activeStep,
        setActiveStep,
        user,
        setUser,
        handleNext,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export default FormContextProvider;
