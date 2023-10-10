import { SendOutlined } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const ChatInput = () => {
  return (
    <Stack
      position={"fixed"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bottom={1}
      left={{ xs: 0, sm: 0, md: 0, lg: 350 }}
      right={0}
      mb={2}
      px={2}
      flexDirection={"row"}
      zIndex={999}
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

export default ChatInput;
