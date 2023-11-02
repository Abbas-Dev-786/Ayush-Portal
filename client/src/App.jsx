import { QueryClient, QueryClientProvider } from "react-query";
import RegisterPage from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";
import Notification from "./components/common/Notification";
import Login from "./pages/login/Login";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import VerifyEmail from "./pages/login/VerifyEmail";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Messages from "./pages/messages/Messages";
import ProtectionWrapper from "./components/common/ProtectionWrapper";
import FormContextProvider from "./pages/register/FormContext";
import Meeting from "./pages/meeting/Meeting";
import Landingpage from "./pages/landingPage/LandingPage";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Notification />
        <Routes>
          <Route path="/">
            <Route index element={<Landingpage />} />
          </Route>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/messages" element={<Messages />} />
          <Route path="/dashboard/meetings/:meetingId" element={<Meeting />} />
          <Route
            path="/register"
            element={
              <FormContextProvider>
                <RegisterPage />
              </FormContextProvider>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectionWrapper>
                <Login />
              </ProtectionWrapper>
            }
          />
          <Route path="/verifyEmail/:token" element={<VerifyEmail />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />

          <Route
            path="*"
            element={
              <div className="wrapper">
                <h1>Page not found ❌</h1>
              </div>
            }
          />
        </Routes>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
