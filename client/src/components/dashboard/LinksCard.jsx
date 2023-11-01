import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
} from "@mui/material";

const LinksCard = () => {
  return (
    <Box
      flex={1}
      minHeight={"100vh"}
      justifyContent={"start"}
      sx={{ display: { xs: "none", lg: "block" } }}
    >
      <Card
        variant="outlined"
        sx={{
          position: "fixed",
          width: 250,
          mt: 4,
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight={"600"} textAlign={"left"}>
            Latest Trends
          </Typography>
          <List>
            <ListItem>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              perspiciatis!
            </ListItem>
            <ListItem>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              perspiciatis!
            </ListItem>
            <ListItem>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              perspiciatis!
            </ListItem>
            <ListItem>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              perspiciatis!
            </ListItem>
            <ListItem>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              perspiciatis!
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LinksCard;
