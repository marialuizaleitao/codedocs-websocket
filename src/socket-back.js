import { documentsCollection } from "./dbConnect.js";
import io from "./server.js";

io.on("connection", (socket) => {
  console.log("A connection was detected. Client ID:", socket.id);

  socket.on("select-document", async (name, returnText) => {
    socket.join(name);

    const document = await findDocument(name);

    if (document) returnText(document.text);
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
  const document = documentsCollection.findOne({ name });

  return document;
}
