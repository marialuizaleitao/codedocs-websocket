import { insertDocumentLink, removeDocumentLink } from "./index.js";

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

socket.on("document-exists", (name) => {
  alert(`Document ${name} already exists!`);
});

socket.on("delete-document-success", (nome) => {
  removeDocumentLink(name);
});

export { emitAddDocument };
