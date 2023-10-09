import { SendOutlined } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { deepPurple, grey } from "@mui/material/colors";
const ChapInput = () => {
  return (
    <Stack
      position={"fixed"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bottom={3}
      left={{ xs: 0, sm: 0, md: 0, lg: 350 }}
      right={0}
      mb={2}
      px={2}
      flexDirection={"row"}
    >
      {" "}
      <TextField
        fullWidth
        placeholder="Enter Message..."
        sx={{
          bgcolor: "white",
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
          },
        }}
      />
      <Button
        sx={{ py: 2, px: 3, mx: 2, bgcolor: deepPurple[500] }}
        variant="contained"
      >
        <SendOutlined sx={{ mr: 1 }} /> Send
      </Button>
    </Stack>
  );
};

export default ChapInput;
