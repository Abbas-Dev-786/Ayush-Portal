import { Container } from "@mui/material";
import styled from "@emotion/styled";

const AuthContainer = styled(Container)(() => ({
  borderRadius: 16,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: " 20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
}));

export default AuthContainer;
