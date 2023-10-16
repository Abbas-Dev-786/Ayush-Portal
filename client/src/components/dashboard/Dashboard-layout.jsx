import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
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
    <Stack minHeight={"100vh"} width={"100%"}>
      <Navbar />
      <BottomNav />
      <Container maxWidth="xl">
        <Grid
          sx={{ mt: 5 }}
          minHeight={"100vh"}
          width={"100%"}
          display={"flex"}
          columns={3}
          container
        >
          <Grid
            display={{ xs: "none", md: "flex" }}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"start"}
            minWidth={200}
            minHeight={"100vh"}
            // position="fixed"
            sx={{ bgcolor: "", px: 1, py: 2, mx: 1 }}
            item
          >
            <UserCard />
          </Grid>
          <Grid
            minHeight={"100vh"}
            sx={{
              bgcolor: "",
              p: 1.5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "start",
              gap: 2,
            }}
            item
            flexGrow={1}
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
                  borderRadius:15,
                  ":hover": blue[500],
                }}
                startIcon={<PostAddOutlined />}
              >    
                Post
              </Button>
            </Box>
            {children}
          </Grid>
          <Grid
            display={{ xs: "none", md: "flex" }}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"start"}
            minWidth={200}
            minHeight={"100vh"}
            sx={{ bgcolor: "", px: 1, py: 2, mx: 1 }}
            item
          >
            <LinksCard />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default DashboardLayout;

DashboardLayout.propTypes = {
  children: PropTypes.any,
};
