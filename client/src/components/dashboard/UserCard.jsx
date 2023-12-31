import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import {
  HelpOutlined,
  InfoOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";

const UserCard = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Box
      flex={1}
      minHeight={"100vh"}
      justifyContent={"start"}
      sx={{ display: { xs: "none", lg: "block" } }}
    >
      <Card
        sx={{
          position: "fixed",
          width: 250,
          mt: 4,
        }}
      >
        <CardMedia
          sx={{ height: 120, bgcolor: "gainsboro" }}
          image="./../../../public/images/user_banner.png"
          title="user image"
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
          <Typography mt={2.5}>
            {user.firstName} {user.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.description}
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
    </Box>
  );
};

export default UserCard;
