import { findDocument, updateDocument, getDocuments } from "./documentsDb.js";
import io from "./server.js";

io.on("connection", (socket) => {
  socket.on("get-documents", async (returnDocuments) => {
    const documents = await getDocuments();
    returnDocuments(documents);
  });

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
