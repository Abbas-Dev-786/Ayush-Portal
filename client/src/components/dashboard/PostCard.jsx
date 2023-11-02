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
import { forwardRef } from "react";

const PostCard = forwardRef(function (props, ref) {
  const { title, body, hasBody, publishedAt, sourceName, image, link } =
    props?.data;
  console.log(props);
  return (
    <Card
      ref={ref}
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        my: 2,
        mx: 2,
      }}
    >
      <CardContent sx={{ width: "100%", px: 2, pt: 3 }}>
        <Stack sx={{ mb: 2 }} flexDirection={"row"}>
          <Avatar sx={{ width: 50, height: 50, bgcolor: "orange" }} />
          <Stack sx={{ px: 1.5 }}>
            <Typography variant="h6">{sourceName}</Typography>
            <Typography variant="body2">
              {new Date(publishedAt).toDateString()}
            </Typography>
          </Stack>
        </Stack>
        <Divider />
        <Typography pt={2} fontWeight={600} mb={2} variant="h5">
          {title}
        </Typography>
        {hasBody && (
          <Typography variant="body2">
            {String(body).length > 100
              ? body.slice(0, body.length / 2) + "..."
              : body}
            <Typography
              color={"blue"}
              variant="body1"
              component={"a"}
              href={link}
              target="_blank"
            >
              Read More
            </Typography>
          </Typography>
        )}
        <CardMedia
          image={image}
          // component="img"
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
});

export default PostCard;

PostCard.propTypes = {
  data: PropTypes.any,
  index: PropTypes.any,
};
