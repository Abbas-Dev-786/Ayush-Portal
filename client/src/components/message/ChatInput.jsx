import { SendOutlined } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";

const ChatInput = () => {
  return (
    <Stack
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      my={2}
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
        sx={{ py: 2, px: 3, mx: 2, bgcolor: blue[900] }}
        variant="contained"
      >
        <SendOutlined sx={{ mr: 1 }} /> Send
      </Button>
    </Stack>
  );
};

export default ChatInput;
