import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Needed for serving the frontend HTML file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve your index.html
app.use(express.static(__dirname));

// Example route (you’ll replace this with your Pinterest scraper later)
app.get("/api/hello", (req, res) => {
  res.json({ message: "Backend connected successfully!" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
