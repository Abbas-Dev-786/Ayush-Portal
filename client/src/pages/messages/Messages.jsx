import { Box, Grid, Typography, Container } from "@mui/material";
import { grey } from "@mui/material/colors";

import ContactCard from "../../components/message/ContactCard";
import Navbar from "../../components/common/Navbar";
import BottomNav from "../../components/common/BottomNav";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getAllChats } from "../../api";
import ChatArea from "../../components/message/ChatArea";
import { socket } from "../../socket";
import UserSearch from "../../components/message/UserSearch";
import { useSelector } from "react-redux";

const Messages = () => {
  const queryClient = useQueryClient();

  const { user } = useSelector((state) => state.user);
  const [selectedChat, setSelectedChat] = useState({});
  const { data } = useQuery(["chats"], getAllChats);

  useEffect(() => {
    socket.connect();

    socket.on("res-msg", (data) => {
      if (data.includes(user._id)) {
        queryClient.invalidateQueries({ queryKey: ["messages"] });
        queryClient.invalidateQueries({ queryKey: ["chats"] });
      }
    });
  }, [queryClient, user._id]);

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
        // container
      >
        <Grid
          display={{ xs: !selectedChat?.email ? "flex" : "none", md: "flex" }}
          flexDirection={"column"}
          minWidth={{ xs: "100%", md: 350 }}
          sx={{ bgcolor: grey[200] }}
          px={1}
          pt={4}
          item
        >
          <Typography variant="h5" textAlign="center" mb={5}>
            Your Messages
          </Typography>

          <UserSearch setSelectedChat={setSelectedChat} />

          {data?.map((data, i) => (
            <ContactCard
              key={i}
              data={data.user}
              lastMessage={data.message}
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
            />
          ))}
        </Grid>
        <Grid
          overflow={"hidden"}
          display={{ xs: selectedChat?.email ? "flex" : "none", md: "flex" }}
          flexDirection={"column"}
          justifyContent={"space-between"}
          width={"100%"}
          item
          sx={{ overflowY: "scroll" }}
        >
          {!selectedChat?.email ? (
            <Box
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography textAlign="center">Select a chat to view</Typography>
            </Box>
          ) : (
            <ChatArea
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Messages;
