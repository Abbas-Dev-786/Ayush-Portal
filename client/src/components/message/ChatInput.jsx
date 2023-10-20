import PropTypes from "prop-types";
import { SendOutlined } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useState } from "react";
import { socket } from "../../socket";
import { useSelector } from "react-redux";
import { useQueryClient } from "react-query";

const ChatInput = ({ to }) => {
  const queryClient = useQueryClient();
  const { user } = useSelector((state) => state.user);
  // const { sendMessage } = useMessages();
  const [msg, setMsg] = useState("");
  // const [user, setUser] = useState();

  const sendMessage = () => {
    socket.emit("send-msg", { to, from: user._id, message: msg });
    queryClient.invalidateQueries({ queryKey: ["messages"] });
    queryClient.invalidateQueries({ queryKey: ["chats"] });

    setMsg("");
  };

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
        onClick={sendMessage}
      >
        <SendOutlined sx={{ mr: 1 }} /> Send
      </Button>
    </Stack>
  );
};

export default ChatInput;

ChatInput.propTypes = {
  to: PropTypes.string,
};
