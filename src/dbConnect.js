import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

try {
  await client.connect();

  const db = client.db("codedocs");
  const documents = db.collection("documents");

  console.log("Database connection succeeded!");
} catch (erro) {
  console.log(erro);
}
