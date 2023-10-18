import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import { blue, deepPurple } from "@mui/material/colors";
import BottomNav from "../common/BottomNav";
import Navbar from "../common/Navbar";
import UserCard from "./UserCard";
import LinksCard from "./LinksCard";
import { PostAddOutlined } from "@mui/icons-material";

const DashboardLayout = ({ children }) => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <BottomNav />
      <Stack spacing={2} direction={"row"} minHeight={"100vh"} width={"100%"}>
        <UserCard />

        <Stack
          flex={4}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          p={{ xs: 0, md: 2 }}
          // bgcolor={"blue"}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "md",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
              borderRadius: "10px",
              gap: 2,
            }}
          >
            <TextField
              fullWidth
              sx={{
                width: "100%",
              }}
              placeholder="Write Posts here..."
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: blue[800],
                px: 2.5,
                py: 1.5,

                ":hover": blue[500],
              }}
              startIcon={<PostAddOutlined />}
            >
              Post
            </Button>
          </Box>
          {children}
        </Stack>

        <LinksCard />
      </Stack>
    </Container>
  );
};

export default DashboardLayout;

DashboardLayout.propTypes = {
  children: PropTypes.any,
};

// bgcolor={"violet"}
// display={{ xs: "none", md: "flex" }}
// flexDirection={"column"}
// alignItems={"center"}
// justifyContent={"start"}
// minWidth={240}
// minHeight={"100vh"}
// sx={{ bgcolor: "", px: 1, py: 2, mx: 1 }}
// item
