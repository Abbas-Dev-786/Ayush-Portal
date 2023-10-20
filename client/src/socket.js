import { io } from "socket.io-client";

const URL = import.meta.env.PROD
  ? "https://real-tunic-dove.cyclic.cloud"
  : "http://localhost:8899";

export const socket = io(URL, {
  autoConnect: false,
});
