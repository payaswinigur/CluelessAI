import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { scrapePinterestImages } from "./pinterest-scraper.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve your frontend
app.use(express.static(__dirname));

// Pinterest scrape route
app.get("/scrape/:query", async (req, res) => {
  try {
    const images = await scrapePinterestImages(req.params.query);
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error scraping Pinterest images" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
