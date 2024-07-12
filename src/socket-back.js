import {
  findDocument,
  updateDocument,
  getDocuments,
  addDocument,
  deleteDocument,
} from "./documentsDb.js";
import io from "./server.js";

io.on("connection", (socket) => {
  socket.on("get-documents", async (returnDocuments) => {
    const documents = await getDocuments();
    returnDocuments(documents);
  });

  socket.on("add-document", async (name) => {
    const documentExists = (await findDocument(name)) !== null;

    if (documentExists) {
      socket.emit("document-exists", name);
    } else {
      const result = await addDocument(name);

      if (result.acknowledged) {
        io.emit("add-document-interface", name);
      }
    }
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

  socket.on("delete-document", async (name) => {
    const result = await deleteDocument(name);
    if (result.deletedCount == 1) {
      io.emit("delete-document-success", name);
    }
  });
});
