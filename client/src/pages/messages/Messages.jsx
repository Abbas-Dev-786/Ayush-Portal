import { Box, Grid, Stack, Typography, Container } from "@mui/material";
import { grey, blue } from "@mui/material/colors";
import ChatInput from "../../components/message/ChatInput";
import ChatBar from "../../components/message/ChatBar";
import ContactCard from "../../components/message/ContactCard";
import Navbar from "../../components/common/Navbar";
import BottomNav from "../../components/common/BottomNav";
import { useState } from "react";
import useMessages from "../../components/message/useMessages";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState({});
  const { messages, sendMessage } = useMessages();

  const messageData = [
    {
      user: "RM",
      name: "Ram Soni",
      messages: [
        { type: "received", msg: "Hey I hope this ui Looks good" },
        { type: "sent", msg: "Nice" },
      ],
    },
    {
      user: "AB",
      name: "Abbas Bhanpura wala",
      messages: [
        { type: "received", msg: "Hey Create Dashboard Page by today" },
        { type: "sent", msg: "Today I am busy" },
        { type: "received", msg: "Ok" },
        { type: "received", msg: "Complete it by tommorrow" },
        { type: "sent", msg: "Sure" },
      ],
    },
    {
      user: "AR",
      name: "Archi Jain",
      messages: [
        { type: "sent", msg: "Hii" },
        { type: "sent", msg: "I will not join today's meeting" },
        { type: "received", msg: "OK" },
      ],
    },
  ];

  return (
    <Container maxWidth="xl">
      <Navbar />
      <BottomNav />
      <Grid
        height={"85vh"}
        display={"flex"}
        flexDirection={"row"}
        mt={5}
        border="1px solid #ccc"
      >
        <Grid
          minWidth={{ xs: "100%", md: 350 }}
          sx={{ bgcolor: grey[200] }}
          px={1}
          pt={4}
          item
        >
          <Typography variant="h5" textAlign="center" mb={5}>
            Your Messages
          </Typography>

          {messageData.map((user, i) => (
            <ContactCard
              key={i}
              data={user}
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
            />
          ))}
        </Grid>
        <Grid
          overflow={"hidden"}
          display={{ xs: "none", md: "flex" }}
          flexDirection={"column"}
          justifyContent={"space-between"}
          width={"100%"}
          item
          sx={{ overflowY: "scroll" }}
        >
          {!selectedChat?.user ? (
            <Box
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography textAlign="center">Select a chat to view</Typography>
            </Box>
          ) : (
            <>
              <ChatBar
                name={selectedChat?.name}
                userName={selectedChat?.user}
              />
              <Stack px={1}>
                {messages?.map((e, i) => {
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
                        bgcolor={e?.type === "sent" ? blue[500] : grey[300]}
                        px={2}
                        pt={1.5}
                        pb={0.5}
                        borderRadius={"15px"}
                      >
                        <Typography
                          color={e?.type === "sent" ? "white" : "black"}
                          variant="body2"
                        >
                          {e.message}
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
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Messages;
