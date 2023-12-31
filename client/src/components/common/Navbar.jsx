import { NavLink } from "react-router-dom";
import {
  Divider,
  Stack,
  Typography,
  AppBar,
  Box,
  Toolbar,
  Container,
} from "@mui/material";
import {
  MessageOutlined,
  NewspaperOutlined,
  NotificationsOutlined,
  RocketLaunchOutlined,
} from "@mui/icons-material";

import UserMenu from "./UserMenu";
import Searchbar from "./Searchbar";
import logo from "./../../../public/images/logo.svg";

const navLinks = [
  { text: "News", link: "", icon: <NewspaperOutlined /> },
  { text: "Trending", link: "", icon: <RocketLaunchOutlined /> },
  { text: "Messages", link: "/dashboard/messages", icon: <MessageOutlined /> },
  { text: "Notifications", link: "", icon: <NotificationsOutlined /> },
];

function Navbar() {
  return (
    <>
      <AppBar
        position="fixed"
        // sx={{ py: 0.5, display: { xs: "none", md: "flex" } }}
        color="inherit"
      >
        <Container
          maxWidth="xl"
          sx={{
            width: "100%",
          }}
        >
          <Toolbar
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 6,
              py: 1,
            }}
            disableGutters
          >
            <NavLink to="/dashboard">
              <Box component="img" height={50} src={logo} />
            </NavLink>

            <Searchbar />

            <Stack
              display={{ xs: "none", md: "flex" }}
              direction={"row"}
              spacing={3}
              sx={{ py: 0.5 }}
            >
              {navLinks.map((el) => (
                <NavLink key={el.text} to={el.link}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    {el.icon}
                    <Typography>{el.text}</Typography>
                  </Box>
                </NavLink>
              ))}

              <Divider orientation="vertical" flexItem />
              <UserMenu isOnLarge />
            </Stack>
            <UserMenu />
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
}
export default Navbar;
