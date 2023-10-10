import { AppBar, Avatar, IconButton, Stack, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Video, ArrowLeft, MoreHorizontal } from "lucide-react";

const ChatBar = () => {
  return (
    <AppBar
      variant="outlined"
      sx={{
        justifyContent: "space-between",
        flexDirection: "row",
        bgcolor: "white",
        px: 2,
        position: { sm: "fixed", md: "static" },
        py: 1.5,
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
          AP
        </Avatar>
        <Typography fontWeight={600} color={"black"} variant="h6">
          Chat room
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
    </AppBar>
  );
};

export default ChatBar;
