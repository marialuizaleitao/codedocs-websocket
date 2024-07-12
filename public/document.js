import {
  emitDeleteDocument,
  emitTextEditor,
  selectDocument,
} from "./socket-front-document.js";

const params = new URLSearchParams(window.location.search);
const documentName = params.get("name");

const textEditor = document.getElementById("text-editor");
const documentTitle = document.getElementById("document-title");
const deleteButton = document.getElementById("delete-document");

documentTitle.textContent = documentName || "Document title is empty";

selectDocument(documentName);

textEditor.addEventListener("keyup", () => {
  emitTextEditor(textEditor.value, documentName);
});

function updateTextEditor(text) {
  textEditor.value = text;
}

deleteButton.addEventListener("click", () => {
  emitDeleteDocument(documentName);
});

function alertAndRedirect(name) {
  if (name == documentName) {
    window.location.href = "/";
    alert(`Document ${nome} was deleted!`);
  }
}

export { updateTextEditor, alertAndRedirect };
