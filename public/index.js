import "./socket-front-index.js";

const documentsList = document.getElementById("documents-list");

function insertDocumentLink(documentName) {
  documentsList.innerHTML += `
     <a 
      href="document.html?name=${documentName}" 
      class="list-group-item list-group-item-action"
     >
        ${documentName}
      </a>
  `;
}

export { insertDocumentLink };
