import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import {
  Video,
  ArrowLeft,
  MoreHorizontal,
  CalendarCheck,
  MonitorPlay,
} from "lucide-react";
import { useState } from "react";
import MeetingScheduler from "./MeetingScheduler";

const ChatBar = ({ to, name, userName, setSelectedChat }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showModel, setShowModel] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <IconButton
          onClick={() => {
            setSelectedChat({});
          }}
        >
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
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Video />
        </IconButton>
        <IconButton>
          <MoreHorizontal />
        </IconButton>
      </Stack>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => setShowModel(true)}>
          <ListItemIcon>
            <CalendarCheck fontSize="small" />
          </ListItemIcon>
          Schedule A Meeting
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MonitorPlay fontSize="small" />
          </ListItemIcon>
          Start Immediately
        </MenuItem>
      </Menu>
      <MeetingScheduler open={showModel} setModel={setShowModel} to={to} />
    </Box>
  );
};

export default ChatBar;

ChatBar.propTypes = {
  name: PropTypes.any,
  userName: PropTypes.any,
  to: PropTypes.any,
  setSelectedChat: PropTypes.func,
};
