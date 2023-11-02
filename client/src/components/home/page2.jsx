import React from "react";
import { Box, Button, Stack } from "@mui/material";

const page2 = () => {
  const cards = [
    { image: "card1.png" },
    { image: "card2.png" },
    { image: "card3.png" },
  ];

  return (
    <Stack bgcolor={"ble"} mb={10} spacing={1} position={"relative"}>
      <Box
        className="design1"
        component="img"
        src="/images/Images/design1.png"
        sx={{ height: "7vw", position: "absolute", top: 5, zIndex: -10 }}
      />

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        px={2}
      >
        <Box
          component="img"
          src="./images/Images/explore.png"
          width={"80vw"}
          borderRadius="15px"
        />
      </Box>
      <Box
        className="cards"
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={"center"}
        alignContent={"center"}
      >
        {cards.map((e, i) => {
          return (
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Box
                component="img"
                src={`/images/Images/${e.image}`}
                sx={{ width: { xs: "80vw", md: "25vw" } }}
              />
              <Box
                component="img"
                src="/images/Images/cardbtn.png"
                sx={{
                  width: { xs: "60vw", md: "24vw" },
                }}
              />
            </Box>
          );
        })}
      </Box>

      <Box
        component="img"
        src="/images/Images/design2.png"
        sx={{
          height: "20vw",
          transform: "rotate(90deg)",
          position: "absolute",
          bottom: 10,
          left: 0,
          zIndex: -10,
        }}
      />
    </Stack>
  );
};

export default page2;
