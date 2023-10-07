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
import { Divider, Stack, Typography } from "@mui/material";
import UserMenu from "./UserMenu";
import Searchbar from "./Searchbar";

const navLinks = [
  { text: "News", link: "", icon: <NewspaperOutlined /> },
  { text: "Trending", link: "", icon: <RocketLaunchOutlined /> },
  { text: "Messages", link: "", icon: <MessageOutlined /> },
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
                <Box
                  key={el.text}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  {el.icon}
                  <Typography>{el.text}</Typography>
                </Box>
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
