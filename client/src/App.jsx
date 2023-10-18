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
import Landingpage from "./pages/landingpage/Landingpage";

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
            <Route index element={<Home />} />
          </Route>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/messages" element={<Messages />} />

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verifyEmail/:token" element={<VerifyEmail />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />
          <Route path="/landingpage" element={<Landingpage/>}></Route>

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
