import PropTypes from "prop-types";
import { Avatar, Stack, Typography, Box } from "@mui/material";
import { useState } from "react";

const ContactCard = ({ data, setSelectedChat, selectedChat, lastMessage }) => {
  const [active, setActive] = useState("");
  const { firstName, lastName, email } = data;
  const user = firstName[0] + lastName[0];
  // const lastMsg = messages[messages.length - 1].msg;

  return (
    <Box
      mx={1}
      p={2}
      bgcolor={active === selectedChat.email ? "dodgerblue" : "white"}
      mb={1}
      component="div"
      onClick={() => {
        setActive(email);
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
        <div style={{ display: "block", width: "60%" }}>
          <Typography fontWeight={500} color={"black"} variant="body1" noWrap>
            {firstName + " " + lastName}
          </Typography>
          <Typography
            color={active === selectedChat.user ? "white" : "gray"}
            noWrap
            variant="body2"
          >
            {lastMessage}
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
