import { Card, CardContent, List, ListItem, Typography } from "@mui/material";

const LinksCard = () => {
  return (
    <Card
      sx={{
        // position: "relative",
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
  );
};

export default LinksCard;
