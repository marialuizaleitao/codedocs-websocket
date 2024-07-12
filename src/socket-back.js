import io from "./server.js";

io.on("connection", (socket) => {
  console.log("A connection was detected. Client ID:", socket.id);

  socket.on("select-document", (name, returnText) => {
    const document = findDocument(name);

    if (document) returnText(document.text);

    socket.join(name);
  });

  socket.on("text-editor", (text, documentName) => {
    const document = findDocument(documentName);

    if (document) {
      document.text = text;
      socket.to(documentName).emit("text-editor-clients", text);
    }
  });
});

function findDocument(name) {
  const document = documents.find((document) => {
    return document.name === name;
  });
  return document;
}
