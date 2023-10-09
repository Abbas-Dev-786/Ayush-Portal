import {
  Avatar,
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
        image="./../../../public/images/login_banner.png"
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
  );
};

export default UserCard;
