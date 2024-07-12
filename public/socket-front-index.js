import { insertDocumentLink } from "./index.js";

const socket = io();

socket.emit("get-documents", (documents) => {
  documents.forEach((document) => {
    insertDocumentLink(document.name);
  });
});
