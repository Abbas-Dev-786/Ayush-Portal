import { useState } from "react";
import { Container } from "@mui/material";
import RegisterPage from "./components/pages/register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container sx={{ m: 0, p: 0, minHeight: "100vh" }} maxWidth="xl">
      <RegisterPage />
    </Container>
  );
}

export default App;
