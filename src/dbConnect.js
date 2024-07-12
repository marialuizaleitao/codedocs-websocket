import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

let documentsCollection;

try {
  await client.connect();

  const db = client.db("codedocs");
  documentsCollection = db.collection("documents");

  console.log("Database connection succeeded!");
} catch (erro) {
  console.log(erro);
}

export { documentsCollection };
