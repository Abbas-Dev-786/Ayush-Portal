import React from "react";
import { Box, Typography } from "@mui/material";

const page6 = () => {
  const statCards = [
    { img: "i1.png", title: "Investments Made", stat: "89+" },
    { img: "i2.png", title: "Funds raised", stat: "81.5+ Cr " },
    { img: "i3.png", title: "Startups registered", stat: "2956" },
    { img: "i4.png", title: "Investors on Platform", stat: "5698" },
  ];
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"80vw"}
        py={10}
        sx={{ border: "1px solid black", borderRadius: "25px" }}
      >
        <Typography
          variant="h3"
          textAlign={"center"}
          lineHeight={1.5}
          ml={10}
          mr={10}
          sx={{ color: "#F79820", fontWeight: "700" }}
        >
          Platform for startup investing Trusted by founders & investors.
        </Typography>
        <Box
          width={"80vw"}
          flexDirection={{ xs: "column", md: "row" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={4}
          mt={8}
          position={"relative"}
        >
          {statCards.map((e, i) => {
            return (
              <Box
                key={i}
                sx={{ backgroundColor: "#eceeed", borderRadius: "2rem" }}
                width={{ xs: "60vw", md: "20vw" }}
                minHeight={{ xs: "15vh", md: "7vw" }}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box
                  component="img"
                  src={`/images/Images/${e.img}`}
                  width={e.img === "i3.png" ? "2.5vw" : "4vw"}
                  sx={{ position: "relative", top: "-3.5vw" }}
                />
                <Typography
                  variant="h4"
                  mt={-7}
                  sx={{ color: "#F79820", fontWeight: "700" }}
                >
                  {e.stat}
                </Typography>
                <Typography
                  variant="h6"
                  lineHeight={1}
                  fontWeight={600}
                  sx={{ color: "#032068" }}
                >
                  {e.title}
                </Typography>
              </Box>
            );
          })}
          {/* <Box
            sx={{ backgroundColor: "#eceeed", borderRadius: "2rem" }}
            // height={"7vw"}
            p={2}
            // width={"9vw"}
          >
            <Box
              component="img"
              src="./images/Images/i1.png"
              width="4vw"
              sx={{ position: "relative", top: "-3.5vw" }}
            ></Box>
            <Typography
              variant="h4"
              mt={-7}
              sx={{ color: "#F79820", fontWeight: "700" }}
            >
              89+
            </Typography>
            <Typography
              variant="h6"
              lineHeight={1}
              fontWeight={600}
              sx={{ width: "1vw", color: "#032068" }}
            >
              Investments Made
            </Typography>
          </Box>

          <Box
            sx={{ backgroundColor: "#eceeed", borderRadius: "2rem" }}
            height={"7vw"}
            p={2}
            width={"9vw"}
          >
            <Box
              component="img"
              src="./images/Images/i2.png"
              width="4.5vw"
              sx={{ position: "relative", top: "-3.5vw" }}
            ></Box>
            <Typography
              variant="h4"
              mt={-7}
              sx={{ color: "#F79820", fontWeight: "700" }}
            >
              1.5+ Cr
            </Typography>
            <Typography
              variant="h6"
              lineHeight={1}
              fontWeight={600}
              sx={{ width: "1vw", color: "#032068" }}
            >
              Funds raised
            </Typography>
          </Box>

          <Box
            sx={{ backgroundColor: "#eceeed", borderRadius: "2rem" }}
            height={"7vw"}
            p={2}
            width={"9vw"}
          >
            <Box
              component="img"
              src="./images/Images/i3.png"
              width="2.5vw"
              ml={2}
              sx={{ position: "relative", top: "-3.5vw" }}
            ></Box>
            <Typography
              variant="h4"
              mt={-7}
              sx={{ color: "#F79820", fontWeight: "700" }}
            >
              2956
            </Typography>
            <Typography
              variant="h6"
              lineHeight={1}
              fontWeight={600}
              sx={{ width: "1vw", color: "#032068" }}
            >
              Startups Registered
            </Typography>
          </Box>

          <Box
            sx={{ backgroundColor: "#eceeed", borderRadius: "2rem" }}
            height={"7vw"}
            p={2}
            width={"9vw"}
          >
            <Box
              component="img"
              src="./images/Images/i4.png"
              width="4.25vw"
              sx={{ position: "relative", top: "-3.5vw" }}
            ></Box>
            <Typography
              variant="h4"
              mt={-7}
              sx={{ color: "#F79820", fontWeight: "700" }}
            >
              5698
            </Typography>
            <Typography
              variant="h6"
              lineHeight={1}
              fontWeight={600}
              sx={{ width: "10vw", color: "#032068" }}
            >
              Investors on platform
            </Typography>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default page6;
