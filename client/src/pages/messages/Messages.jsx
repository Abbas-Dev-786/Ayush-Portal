import { Box, Grid, Stack, Typography } from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";
import ChatInput from "../../components/message/ChatInput";
import ChatBar from "../../components/message/ChatBar";

const Messages = () => {
  const messages = [
    { user: "RM", type: "sent", msg: "Hey I hope this ui Looks good" },
    { user: "AB", type: "received", msg: "Hey I hope this ui Looks good" },
    { user: "AB", type: "received", msg: "Hey I hope this ui Looks good" },
    { user: "AP", type: "sent", msg: "Hey I hope this ui Looks good" },
    { user: "AP", type: "sent", msg: "Hey how are you??" },
    { user: "AB", type: "received", msg: "Hey I hope this ui Looks good" },
    { user: "AP", type: "sent", msg: "Hey how are you??" },
    {
      user: "AP",
      type: "sent",
      msg: "Hey Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, autem I hope this ui Looks good",
    },
    { user: "RM", type: "received", msg: "Hey I hope this ui Looks good" },
    { user: "AP", type: "sent", msg: "Hey how are you??" },
    {
      user: "RM",
      type: "received",
      msg: "Hey I hope this ui Looks good Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, autem",
    },
    { user: "AP", type: "sent", msg: "Hey how are you??" },

    { user: "AB", type: "received", msg: "Hey I hope this ui Looks good" },
  ];

  return (
    <Stack maxHeight={"100vh"} display={"flex"}>
      <Grid height={"100vh"} display={"flex"} flexDirection={"row"}>
        <Grid
          display={{ xs: "none", lg: "flex" }}
          minWidth={350}
          height={"100vh"}
          sx={{ bgcolor: grey[200] }}
          px={1}
          pt={4}
          item
        ></Grid>
        <Grid
          overflow={"hidden"}
          width={"100%"}
          item
          sx={{ overflowY: "scroll" }}
        >
          <ChatBar />
          <Stack px={1}>
            {messages.map((e, i) => {
              return (
                <Box
                  key={i}
                  display={"flex"}
                  alignItems={"center"}
                  m={1.5}
                  justifyContent={e.type === "sent" ? "end" : "start"}
                >
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={e.type === "sent" ? "end" : "start"}
                    bgcolor={
                      e?.type === "sent" ? deepPurple[500] : deepPurple[200]
                    }
                    px={2}
                    pt={1.5}
                    pb={0.5}
                    borderRadius={"15px"}
                  >
                    <Typography
                      color={e?.type === "sent" ? "white" : "black"}
                      variant="body2"
                    >
                      {e.msg}
                    </Typography>
                    <Typography
                      color={e?.type === "sent" ? "white" : "black"}
                      variant="body2"
                      width={"100%"}
                      textAlign={"end"}
                    >
                      {new Date().toLocaleTimeString()}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Stack>
          <ChatInput />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Messages;
