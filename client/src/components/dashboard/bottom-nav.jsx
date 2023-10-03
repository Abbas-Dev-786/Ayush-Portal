import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { BottomNavigationAction, Paper } from "@mui/material";
import {
  MessageOutlined,
  NewspaperOutlined,
  NotificationsOutlined,
  RocketLaunchOutlined,
} from "@mui/icons-material";
const BottomNav = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "flex", md: "none" },
      }}
      elevation={4}
    >
      <BottomNavigation
        showLabels
        sx={{
          width: "100%",
        }}
      >
        <BottomNavigationAction label="News" icon={<NewspaperOutlined />} />
        <BottomNavigationAction
          label="Trending"
          icon={<RocketLaunchOutlined />}
        />
        <BottomNavigationAction label="Messages" icon={<MessageOutlined />} />
        <BottomNavigationAction
          label="Notifications"
          icon={<NotificationsOutlined />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
