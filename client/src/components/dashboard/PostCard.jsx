import PropTypes from "prop-types";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const PostCard = ({ data, index }) => {
  const { title } = data;

  return (
    <Card
      variant="outlined"
      sx={{
        // width: "100%",
        maxWidth: "sm",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        my: 2,
      }}
    >
      <CardContent sx={{ width: "100%", px: 2, pt: 3 }}>
        <Stack sx={{ mb: 2 }} flexDirection={"row"}>
          <Avatar sx={{ width: 50, height: 50, bgcolor: "orange" }} />
          <Stack sx={{ px: 1.5 }}>
            <Typography variant="h6">Username</Typography>
            <Typography variant="body2">
              {new Date().toLocaleTimeString()}
            </Typography>
          </Stack>
        </Stack>
        <Divider />
        <Typography pt={2} variant="h5">
          {index}: {title}
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
          praesentium porro
        </Typography>
        <CardMedia
          src=""
          sx={{
            mt: 2,
            borderRadius: "10px",
            height: 320,
            width: "100%",
            bgcolor: "gainsboro",
          }}
        />
      </CardContent>
    </Card>
  );
};

export default PostCard;

PostCard.propTypes = {
  data: PropTypes.any,
  index: PropTypes.any,
};
