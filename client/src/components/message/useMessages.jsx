import React, { useEffect, useState } from "react";
import { socket } from "../../socket";

const sendMessage = async (msg) => {
  socket.emit("new-message", msg);
};

const useMessages = () => {
  const [messages, setMessages] = useState([]);
  socket.on("new-message", ({ user, message, type }) => {
    console.log({ new: { user, message, type } });

    setMessages((messages) => [
      ...messages,
      { user: user, message: message, type: type },
    ]);
  });
  useEffect(() => {
    console.log(messages);
  }, [messages]);
  useEffect(() => {
    socket.connect();

    socket.on("recent-messages", (msg) => {
      console.log({ recent: msg });
      setMessages([...msg]);
    });

    return () => socket.disconnect();
  }, []);
  return { messages, sendMessage };
};

export default useMessages;
