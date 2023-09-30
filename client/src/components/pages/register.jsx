import React from "react";
import { Box, ImageList, ImageListItem, Stack } from "@mui/material";
import Form from "../form";
const RegisterPage = () => {
  return (
    <Stack width={"100%"} height={"100vh"} direction={"row"}>
      <Box
        overflow={"hidden"}
        width={{ xs: 0, md: "100%" }}
        sx={{ bgcolor: "blue" }}
      ></Box>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Form />
      </Box>
    </Stack>
  );
};

export default RegisterPage;
