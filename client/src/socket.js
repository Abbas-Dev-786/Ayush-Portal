import { io } from "socket.io-client";

const URL = import.meta.env.PROD
  ? "https://test-zelv.onrender.com"
  : "http://localhost:8899";

export const socket = io(URL, {
  autoConnect: false,
});

socket.on("connect_error", (err) => {
  console.log(err.message); // prints the message associated with the error
});
