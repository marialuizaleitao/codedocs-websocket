import { emitAddDocument } from "./socket-front-index.js";

const documentsList = document.getElementById("documents-list");
const form = document.getElementById("form-add-document");
const documentInput = document.getElementById("document-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  emitAddDocument(documentInput.value);
  documentInput.value = "";
});

function insertDocumentLink(documentName) {
  documentsList.innerHTML += `
     <a 
      href="document.html?name=${documentName}" 
      class="list-group-item list-group-item-action"
      id="document-${documentName}"
      >
        ${documentName}
      </a>
  `;
}

function removeDocumentLink(documentName) {
  const document = document.getElementById(`document-${documentName}`);

  documentsList.removeChild(document);
}

export { insertDocumentLink, removeDocumentLink };
