const socket = io();

const textEditor = document.getElementById("text-editor");

textEditor.addEventListener("keyup", () => {
  socket.emit("text-editor", textEditor.value);
});

socket.on("text-editor-clients", (text) => {
  textEditor.value = text;
});
