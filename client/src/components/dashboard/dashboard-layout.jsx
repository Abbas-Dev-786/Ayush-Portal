import PropTypes from "prop-types";
import { Avatar, Box, Container, Grid, Stack, TextField } from "@mui/material";

import BottomNav from "./BottomNav";
import Navbar from "./Navbar";
import UserCard from "./UserCard";
import LinksCard from "./LinksCard";

const DashboardLayout = ({ children }) => {
  return (
    <Stack minHeight={"100vh"} width={"100%"}>
      <Navbar />
      <BottomNav />
      <Container maxWidth="xl">
        <Grid
          sx={{ mt: 3 }}
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
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "gainsboro",
                p: 2,
                borderRadius: 3,
                gap: 2,
              }}
            >
              <Avatar sx={{ width: 60, height: 60 }} />
              <TextField
                sx={{
                  width: "90%",
                }}
                placeholder="Write Posts here..."
              />
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
