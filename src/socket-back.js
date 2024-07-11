import io from "./server.js";

io.on("connection", (socket) => {
  console.log("A connection was detected. Client ID:", socket.id);
  
  socket.on("text-editor", (text) => {
    console.log(text);
  });
});
