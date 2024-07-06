const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("user-message",(message)=>{
    // console.log(message);
    io.emit("message",message);
  })
  // console.log("new user connected", socket.id);
});
app.use(express.static("/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
server.listen(9000, () => console.log("server at 9000"));
