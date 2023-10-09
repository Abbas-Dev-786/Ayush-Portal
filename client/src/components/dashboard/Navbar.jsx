import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import {
  MessageOutlined,
  NewspaperOutlined,
  NotificationsOutlined,
  RocketLaunchOutlined,
} from "@mui/icons-material";
import { ButtonBase, Divider, Stack, Typography } from "@mui/material";
import UserMenu from "./UserMenu";
import Searchbar from "./Searchbar";
import { Navigate } from "react-router-dom";
import { Newspaper, TrendingUp, MessageCircle, Bell } from "lucide-react";
const navLinks = [
  { text: "News", link: "", icon: <Newspaper /> },
  { text: "Trending", link: "", icon: <TrendingUp /> },
  { text: "Messages", link: "/dashboard/messages", icon: <MessageCircle /> },
  { text: "Notifications", link: "", icon: <Bell /> },
];

function Navbar() {
  return (
    <>
      <AppBar position="fixed" color="inherit">
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
            <Box
              component="img"
              height={50}
              src="./../../../public/images/logo.svg"
            />

            <Searchbar />

            <Stack
              display={{ xs: "none", md: "flex" }}
              direction={"row"}
              spacing={3}
              sx={{ py: 0.5 }}
            >
              {navLinks.map((el) => (
                <ButtonBase
                  // onClick={() => Navigate(el.link)}
                  href={el.link}
                  sx={{ flexDirection: "column", p: 1, borderRadius: 5 }}
                  key={el.text}
                >
                  <Box>{el.icon}</Box>
                  <Typography>{el.text}</Typography>
                </ButtonBase>
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
