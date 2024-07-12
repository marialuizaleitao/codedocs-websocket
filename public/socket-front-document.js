import { updateTextEditor } from "./document.js";

const socket = io();

function emitTextEditor(text) {
  socket.emit("text-editor", text);
}

socket.on("text-editor-clients", (text) => {
  updateTextEditor(text);
});

export { emitTextEditor };