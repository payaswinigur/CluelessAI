// pinterest-scraper.js
import puppeteer from "puppeteer";

export async function scrapePinterestImages(query) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(`https://www.pinterest.com/search/pins/?q=${encodeURIComponent(query)}`, {
    waitUntil: "networkidle2",
  });

  // scroll down to load more
  for (let i = 0; i < 3; i++) {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await new Promise((r) => setTimeout(r, 2000));
  }

  const imageUrls = await page.$$eval("img", (imgs) =>
    imgs.map((img) => img.src).filter((src) => src.startsWith("http"))
  );

  await browser.close();
  return [...new Set(imageUrls)].slice(0, 20); // limit to 20 images
}
