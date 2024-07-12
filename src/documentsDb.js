import { documentsCollection } from "./dbConnect.js";

function addDocument(name) {
  const result = documentsCollection.insertOne({
    name,
    text: "",
  });
  return result;
}

function getDocuments() {
  const documents = documentsCollection.find().toArray();
  return documents;
}

function findDocument(name) {
  const document = documentsCollection.findOne({ name });
  return document;
}

function updateDocument(name, text) {
  const update = documentsCollection.updateOne({ name }, { $set: { text } });
  return update;
}

export { findDocument, updateDocument, getDocuments, addDocument };
