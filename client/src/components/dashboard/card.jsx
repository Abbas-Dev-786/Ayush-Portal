import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
const PostItem = ({ data, ref, index }) => {
  const { title } = data;
  return (
    <Card
      // ref={ref}
      variant="outlined"
      sx={{
        width: "100%",
        maxWidth: "sm",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        my: 1,
      }}
    >
      <CardContent sx={{ width: "100%", px: 2, py: 3 }}>
        <Stack sx={{ mb: 2 }} flexDirection={"row"}>
          <Avatar sx={{ width: 50, height: 50, bgcolor: "orange" }} />
          <Stack sx={{ px: 1.5 }}>
            <Typography variant="h6">Username</Typography>
            <Typography variant="body2">
              {new Date().toLocaleTimeString()}
            </Typography>
          </Stack>
        </Stack>
        <CardMedia
          src=""
          sx={{
            p: 2,
            borderRadius: "10px",
            height: 400,
            width: "100%",
            bgcolor: "gainsboro",
            px: 2,
          }}
        />
        <Typography pt={2} variant="h5">
          {index}: {title}
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
          praesentium porro tenetur architecto aut voluptate doloremque quis
          esse iusto, dicta minima illum inventore tempore distinctio dolores
          impedit ea ratione? Natus.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostItem;
