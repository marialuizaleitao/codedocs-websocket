import { updateTextEditor } from "./document.js";

const socket = io();

function selectDocument(name) {
  socket.emit("select-document", name);
}

function emitTextEditor(text, documentName) {
  socket.emit("text-editor", text, documentName);
}

socket.on("text-editor-clients", (text) => {
  updateTextEditor(text);
});

export { emitTextEditor, selectDocument };
