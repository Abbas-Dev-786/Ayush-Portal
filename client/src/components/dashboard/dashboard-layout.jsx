import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import BottomNav from "../../components/dashboard/bottom-nav";
import Header from "../../components/dashboard/header";
import {
  HelpOutlined,
  InfoOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

const DashboardLayout = ({ children }) => {
  return (
    <Stack minHeight={"100vh"} width={"100%"}>
      <Header />
      <BottomNav />
      <Grid
        sx={{ mt: 3 }}
        minHeight={"100vh"}
        width={"100%"}
        display={"flex"}
        columns={3}
      >
        <Grid
          display={{ sm: "none", lg: "flex" }}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"start"}
          minWidth={200}
          minHeight={"100vh"}
          sx={{ bgcolor: "", px: 1, py: 2, mx: 1 }}
          item
        >
          <Card
            sx={{
              position: "relative",
              maxHeight: 400,
              maxWidth: 240,
              minWidth: 240,
            }}
          >
            <CardMedia
              sx={{ height: 120, bgcolor: "gainsboro" }}
              //   image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  position: "absolute",
                  top: 70,
                }}
              />
              <Typography mt={2.5}>User Name</Typography>
              <Typography variant="body2" color="text.secondary">
                User info/details
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <IconButton aria-label="About">
                <HelpOutlined />
              </IconButton>
              <IconButton aria-label="Settings">
                <SettingsOutlined />
              </IconButton>
              <IconButton aria-label="Help & Information">
                <InfoOutlined />
              </IconButton>
            </CardActions>
          </Card>
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
          {/* <Paper variant="outlined" sx={{ minHeight: "100vh" }}> */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              //   flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "gainsboro",
              py: 2,
              borderRadius: 3,
              gap: 2,
            }}
          >
            <Avatar sx={{ width: 60, height: 60 }} />
            <TextField
              sx={{
                width: "80%",
              }}
              placeholder="Write Posts here..."
            />
          </Box>
          {children}
          {/* </Paper> */}
        </Grid>
        <Grid
          display={{ sm: "none", lg: "flex" }}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"start"}
          minWidth={200}
          minHeight={"100vh"}
          sx={{ bgcolor: "", px: 1, py: 2, mx: 1 }}
          item
        >
          <Card
            sx={{
              position: "relative",
              minHeight: 400,
              maxWidth: 240,
              minWidth: 240,
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight={"600"} textAlign={"left"}>
                Latest Trends
              </Typography>
              <List>
                <ListItem>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam, perspiciatis!
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam, perspiciatis!
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam, perspiciatis!
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam, perspiciatis!
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam, perspiciatis!
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default DashboardLayout;
