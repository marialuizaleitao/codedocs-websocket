import io from "./server.js";

io.on("connection", (socket) => {
  console.log("A connection was detected. Client ID:", socket.id);

  socket.on("select-document", (name) => {
    socket.join(name);
  });

  socket.on("text-editor", (text, documentName) => {
    socket.to(documentName).emit("text-editor-clients", text);
  });
});
