import { SendOutlined } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";
import useMessages from "./useMessages";
import { useEffect, useState } from "react";

const ChatInput = () => {
  const { sendMessage } = useMessages();
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState();

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
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
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
        onClick={() =>
          msg !== "" &&
          sendMessage({
            user: "652ac542b010c2d0469a3590",
            message: msg,
            type: "sent",
          })
        }
      >
        <SendOutlined sx={{ mr: 1 }} /> Send
      </Button>
    </Stack>
  );
};

export default ChatInput;
