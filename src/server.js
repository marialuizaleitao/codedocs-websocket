import express from "express";
import url from "url";
import path from "path";

const app = express();
const PORT = process.env.port || 3000;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDir = path.join(currentPath, "../..", "public");

app.use(express.static(publicDir));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
