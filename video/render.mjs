// Renders promo.html frame by frame and encodes it with ffmpeg.
// Usage: node render.mjs [--stills]   (needs playwright + ffmpeg; FFMPEG env overrides the binary)
import { chromium } from 'playwright';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const FPS = 30;
const stills = process.argv.includes('--stills');
const ffmpeg = process.env.FFMPEG || 'ffmpeg';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1080 } });
await page.goto('file://' + path.join(dir, 'promo.html'));
await page.evaluate(() => document.fonts.ready);
const duration = await page.evaluate(() => window.DURATION);

if (stills) {
  for (const t of [2.8, 6.8, 10.8, 15.2, 19.6, 23.4, 26.5]) {
    await page.evaluate((t) => window.render(t), t);
    await page.screenshot({ path: path.join(dir, 'still-' + t + '.png') });
  }
} else {
  const enc = spawn(ffmpeg, ['-y', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-preset', 'slow', '-movflags', '+faststart',
    path.join(dir, 'trapdoor-promo.mp4')], { stdio: ['pipe', 'inherit', 'inherit'] });
  const total = Math.round(duration * FPS);
  for (let f = 0; f < total; f++) {
    await page.evaluate((t) => window.render(t), f / FPS);
    const buf = await page.screenshot({ type: 'png' });
    if (!enc.stdin.write(buf)) await new Promise((r) => enc.stdin.once('drain', r));
  }
  enc.stdin.end();
  await new Promise((r) => enc.on('close', r));
}
await browser.close();
