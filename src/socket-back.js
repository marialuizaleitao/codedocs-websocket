import { documentsCollection } from "./dbConnect.js";
import { findDocument, updateDocument } from "./documentsDb.js";
import io from "./server.js";

io.on("connection", (socket) => {
  console.log("A connection was detected. Client ID:", socket.id);

  socket.on("select-document", async (name, returnText) => {
    socket.join(name);

    const document = await findDocument(name);

    if (document) returnText(document.text);
  });

  socket.on("text-editor", async (text, documentName) => {
    const update = await updateDocument(documentName, text);

    if (update.modifiedCount) {
      socket.to(documentName).emit("text-editor-clients", text);
    }
  });
});
