// tiktok-scraper.js
import puppeteer from "puppeteer";

export async function scrapeTikTokVideos(query) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // TikTok search URL
  await page.goto(`https://www.tiktok.com/search?q=${encodeURIComponent(query)}`, {
    waitUntil: "networkidle2"
  });

  // Wait for video elements to load
  await page.waitForSelector('a[href*="/video/"]', { timeout: 10000 });

  // Get video links
  const videos = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a[href*="/video/"]'));
    const urls = anchors.map(a => a.href);
    return urls.slice(0, 10); // Return top 10 results
  });

  await browser.close();
  return videos;
}
