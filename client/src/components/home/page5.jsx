import React from "react";
import { Box, Typography } from "@mui/material";

const page5 = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      height="50vw"
      width="100%"
    >
      <Typography
        variant="h2"
        sx={{ color: "#004AAD", fontWeight: "700", textAlign: "center" }}
      >
        Latest News
      </Typography>

      <Box
        component="img"
        src="./images/Images/page5bg.png"
        height="50vw"
        width="90%"
        sx={{ position: "absolute", zIndex: "-1" }}
      ></Box>
      <Box
        component="img"
        width="25%"
        src="./images/Images/feed.png"
        sx={{ position: "absolute", top: "183rem", left: "35rem" }}
      ></Box>
    </Box>
  );
};

export default page5;
