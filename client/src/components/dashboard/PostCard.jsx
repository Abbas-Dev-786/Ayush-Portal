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
  const { title, description, author, publishedAt, source, urlToImage } = data;
  console.log(data);

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
            <Typography variant="h6">
              {author !== "" ? author : source.name}
            </Typography>
            <Typography variant="body2">
              {new Date(publishedAt).toDateString()}
            </Typography>
          </Stack>
        </Stack>
        <Divider />
        <Typography pt={2} fontWeight={600} mb={2} variant="h5">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <CardMedia
          image={urlToImage}
          component="img"
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
