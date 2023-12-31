import BottomNavigation from "@mui/material/BottomNavigation";
import {NavLink} from "react-router-dom";
import { BottomNavigationAction, Paper } from "@mui/material";
import {
  MessageOutlined,
  NewspaperOutlined,
  NotificationsOutlined,
  RocketLaunchOutlined,
} from "@mui/icons-material";

const navLinks = [
  { text: "News", link: "", icon: <NewspaperOutlined /> },
  { text: "Trending", link: "", icon: <RocketLaunchOutlined /> },
  { text: "Messages", link: "/dashboard/messages", icon: <MessageOutlined /> },
  { text: "Notifications", link: "", icon: <NotificationsOutlined /> },
];
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
        zIndex: 20,
      }}
      elevation={4}
    >
      <BottomNavigation
        showLabels
        sx={{
          width: "100%",
        }}
      >
        {navLinks.map((el) => (
         <NavLink key={el.text} to={el.link}>
          <BottomNavigationAction
            label={el.text}
            icon={el.icon}
          />
         </NavLink>
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
