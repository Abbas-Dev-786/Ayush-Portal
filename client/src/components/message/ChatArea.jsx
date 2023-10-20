import PropTypes from "prop-types";
import { Stack, Typography, Box } from "@mui/material";
import ChatInput from "./ChatInput";
import { blue, grey } from "@mui/material/colors";
import ChatBar from "./ChatBar";
import { useQuery } from "react-query";
import { getMessages } from "../../api";

const ChatArea = ({ selectedChat, setSelectedChat }) => {
  const { data: messages } = useQuery(
    ["messages", selectedChat._id],
    getMessages
  );

  return (
    <>
      <ChatBar
        to={selectedChat?._id}
        name={selectedChat?.firstName + " " + selectedChat?.lastName}
        userName={selectedChat?.firstName[0] + selectedChat?.lastName[0]}
        setSelectedChat={setSelectedChat}
      />
      <Stack px={1}>
        {messages?.map((e, i) => {
          return (
            <Box
              key={i}
              display={"flex"}
              alignItems={"center"}
              m={1.5}
              justifyContent={e.from !== selectedChat._id ? "end" : "start"}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={e.from !== selectedChat._id ? "end" : "start"}
                bgcolor={e.from !== selectedChat._id ? blue[500] : grey[300]}
                px={2}
                pt={1.5}
                pb={0.5}
                borderRadius={"15px"}
              >
                <Typography
                  color={e.from !== selectedChat._id ? "white" : "black"}
                  variant="body2"
                >
                  {e.message}
                </Typography>
                <Typography
                  color={e.from !== selectedChat._id ? "white" : "black"}
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
      <ChatInput to={selectedChat?._id} />
    </>
  );
};

export default ChatArea;

ChatArea.propTypes = {
  selectedChat: PropTypes.any,
  messages: PropTypes.array,
  setSelectedChat: PropTypes.func,
};
