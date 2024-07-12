import { alertAndRedirect, updateTextEditor } from "./document.js";

const socket = io();

function selectDocument(name) {
  socket.emit("select-document", name, (text) => {
    updateTextEditor(text);
  });
}

function emitTextEditor(text, documentName) {
  socket.emit("text-editor", text, documentName);
}

socket.on("text-editor-clients", (text) => {
  updateTextEditor(text);
});

function emitDeleteDocument(name) {
  socket.emit("delete-document", name);
}

socket.on("delete-document-success", (name) => {
  alertAndRedirect(name);
});

export { emitTextEditor, selectDocument, emitDeleteDocument };
