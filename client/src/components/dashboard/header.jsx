import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import {
  MessageOutlined,
  NewspaperOutlined,
  Menu as MenuIcon,
  NotificationsOutlined,
  RocketLaunchOutlined,
  RocketRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Menu from "@mui/material/Menu";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="static"
      // sx={{ py: 0.5, display: { xs: "none", md: "flex" } }}
      color="transparent"
    >
      <Container
        maxWidth="lg"
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
          }}
          disableGutters
        >
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            direction={"row"}
          >
            <Box component="img" height={50} src="./images/logo.svg" />
            <TextField
              sx={{ ml: 4, visibility: { xs: "hidden", md: "visible" } }}
              placeholder="Search"
            />
          </Stack>
          <Stack
            display={{ xs: "none", md: "flex" }}
            // bgcolor={"blue"}
            direction={"row"}
            spacing={3}
            sx={{ py: 0.5 }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <NewspaperOutlined />
              <Typography>News</Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <RocketLaunchOutlined />
              <Typography>Trending</Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <MessageOutlined />
              <Typography>Messages</Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <NotificationsOutlined />
              <Typography>Notificatons</Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            {/* <Box>
              <Avatar />
            </Box> */}
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2, display: { xs: "none", md: "flex" } }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar />
            </IconButton>
          </Stack>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, display: { xs: "flex", md: "none" } }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Account</MenuItem>
            <Divider />
            <MenuItem sx={{ width: "100%" }} onClick={handleClose}>
              <Button
                sx={{ width: "100%", bgcolor: "orange" }}
                variant="contained"
              >
                Register
              </Button>
            </MenuItem>
            <MenuItem sx={{ width: "100%" }} onClick={handleClose}>
              <Button
                sx={{ width: "100%", bgcolor: "orange" }}
                variant="contained"
              >
                Login
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
