require("dotenv").config({ path: "./.env" });

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const mongoose = require("mongoose");
const { Server } = require("socket.io");
const http = require("http");
const app = require("./app");
const Message = require("./models/messageModel");
const { getMostRecentMessages } = require("./utils/message");

const server = http.createServer(app);

mongoose
  .connect(
    process.env.DATABASE_URL.replace(
      "<password>",
      process.env.DATABASE_PASSWORD
    ),
    { autoIndex: true }
  )
  .then(() => console.log("DB Connected Successfull ✅"))
  .catch((err) => console.log(err.message + "❌"));

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  console.log("connected to socket client", socket.id);
  
 socket.broadcast.emit("user connected",{
  id:socket.id
 })
  getMostRecentMessages().then(results => {
    console.log(results)
    socket.emit("recent-messages", results.reverse());
  })
  .catch(error => {
    console.log(error)
    socket.emit("recent-messages", []);
  });

  socket.on("new-message",async (data) => {
    try {
      
      const msg=new Message({
        message:data?.message,
        user:data?.user,
        type:data?.type
      })
      

      await msg.save()
      io.emit("new-message",{user: data?.user,type:data?.type, message: data?.message})
      
    } catch (error) {
      console.log("error: "+error);
    }
  });
  socket.onAny((event,...arg)=>{
    console.log(event,...arg)
  })

  socket.on("disconnect", () => {
    console.log("disconnected", socket.id);
  });
});

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`👂 Listening to request on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});
