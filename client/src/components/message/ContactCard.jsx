import PropTypes from "prop-types";
import { Avatar, Stack, Typography, Box } from "@mui/material";
import { useState } from "react";

const ContactCard = ({ data, setSelectedChat, selectedChat }) => {
  const [active, setActive] = useState("");
  const { name, user, messages } = data;
  const lastMsg = messages[messages.length - 1].msg;

  return (
    <Box
      mx={1}
      p={2}
      bgcolor={active === selectedChat.user ? "dodgerblue" : "white"}
      mb={1}
      component="div"
      onClick={() => {
        setActive(user);
        setSelectedChat(data);
      }}
      sx={{ cursor: "pointer" }}
      borderRadius={2}
    >
      <Stack
        display={"flex"}
        alignItems={"center"}
        justifyContent={"start"}
        flexDirection={"row"}
        gap={1.5}
      >
        <Avatar sx={{ borderRadius: "10px" }}>{user}</Avatar>
        <div>
          <Typography fontWeight={500} color={"black"} variant="body1">
            {name}
          </Typography>
          <Typography
            color={active === selectedChat.user ? "white" : "gray"}
            variant="body2"
          >
            {lastMsg}
          </Typography>
        </div>
      </Stack>
    </Box>
  );
};

export default ContactCard;

ContactCard.propTypes = {
  data: PropTypes.any,
  setSelectedChat: PropTypes.any,
  selectedChat: PropTypes.any,
};
