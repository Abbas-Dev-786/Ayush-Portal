import AppBar from "@mui/material/AppBar";
import {Box, Button} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Divider, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const navLinks = [
  { text: "News", link: "" },
  { text: "Start-Ups", link: "" },
  { text: "About Us", link: "" },
  { text: "Statics", link: ""},
  { text: "Contact Us", link: ""}
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
            backgroundColor:"white"
          }}
        >
          <Toolbar
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              alignItems:"center",
              gap: 6,
              py: 1,
            }}
            disableGutters
          >
            <NavLink to="/dashboard">
              <Box
                component="img"
                height={50}
                src="./images/logo.svg"
              />
            </NavLink>

            <Stack
              display={{ xs: "none", md: "flex" }}
              direction={"row"}
              alignItems={"center"}
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
              <Box
                display={'flex'}
                alignItems={'center'}
                width={"20vw"}
                justifyContent={"space-between"}
              >
               <NavLink
                to={"/login"}
               >
                <Button
                      variant="contained"
                      sx={{borderRadius:"25px", width:"8vw"}}
                  >Login</Button>
               </NavLink>
                <Typography>OR</Typography>
                <NavLink
                  to={"/register"}
                >
                  <Button
                      variant="outlined"
                      sx={{borderRadius:"25px", width:"8vw"}}
                  >Register</Button>
                </NavLink>
              </Box>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
}
export default Navbar;
