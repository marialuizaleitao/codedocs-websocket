import { insertDocumentLink } from "./index.js";

const socket = io();

socket.emit("get-documents", (documents) => {
  documents.forEach((document) => {
    insertDocumentLink(document.name);
  });
});

function emitAddDocument(name) {
  socket.emit("add-document", name);
}

socket.on("add-document-interface", (name) => {
  insertDocumentLink(name);
});

export { emitAddDocument };
