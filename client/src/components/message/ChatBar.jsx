import PropTypes from "prop-types";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Video, ArrowLeft, MoreHorizontal } from "lucide-react";

const ChatBar = ({ name, userName }) => {
  return (
    <Box
      variant="outlined"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        bgcolor: "white",
        px: 2,
        position: { sm: "fixed", md: "static" },
        py: 1.5,
        borderBottom: "1px solid #ccc",
      }}
    >
      <Stack
        display={"flex"}
        alignItems={"center"}
        justifyContent={"start"}
        flexDirection={"row"}
        gap={1.5}
      >
        <IconButton>
          <ArrowLeft />
        </IconButton>
        <Avatar sx={{ borderRadius: "10px", bgcolor: deepPurple[500] }}>
          {userName}
        </Avatar>
        <Typography fontWeight={600} color={"black"} variant="h6">
          {name}
        </Typography>
      </Stack>
      <Stack
        // bgcolor={"red"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"start"}
        flexDirection={"row"}
        gap={1.5}
      >
        <IconButton>
          <Video />
        </IconButton>
        {/* <IconButton>
          <Phone />
        </IconButton> */}
        <IconButton>
          <MoreHorizontal />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default ChatBar;

ChatBar.propTypes = {
  name: PropTypes.any,
  userName: PropTypes.any,
};
