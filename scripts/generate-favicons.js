const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const toIco = require('to-ico');

const SOURCE = path.join('public', 'favicons', 'favicon.png');
const OUT_DIR = path.join('public', 'favicons');
const APP_DIR = path.join('app');

const pngTargets = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'favicon-48x48.png': 48,
  'apple-touch-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512,
};

async function prepareLogo() {
  const { data, info } = await sharp(SOURCE)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r > 235 && g > 235 && b > 235) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, { raw: info }).trim({ threshold: 8 }).png();
}

async function renderPng(logo, name, size) {
  const out = path.join(OUT_DIR, name);
  let pipeline = logo.clone().resize(size, size, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  });

  if (size <= 48) {
    pipeline = pipeline.sharpen({ sigma: 0.8, m1: 0.5, m2: 0.5 });
  }

  await pipeline
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(out);

  const meta = await sharp(out).metadata();
  const stat = fs.statSync(out);
  console.log(`${name}: ${meta.width}x${meta.height}, ${stat.size} bytes`);
}

async function pngBuffer(logo, size) {
  let pipeline = logo.clone().resize(size, size, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  });

  if (size <= 48) {
    pipeline = pipeline.sharpen({ sigma: 0.8, m1: 0.5, m2: 0.5 });
  }

  return pipeline.png().toBuffer();
}

async function main() {
  const logo = await prepareLogo();

  for (const [name, size] of Object.entries(pngTargets)) {
    await renderPng(logo, name, size);
  }

  const icoSizes = [16, 32, 48];
  const icoBuffers = await Promise.all(icoSizes.map((size) => pngBuffer(logo, size)));
  const ico = await toIco(icoBuffers);

  const appTargets = {
    'favicon.ico': ico,
    'icon.png': path.join(OUT_DIR, 'favicon-32x32.png'),
    'apple-icon.png': path.join(OUT_DIR, 'apple-touch-icon.png'),
  };

  fs.writeFileSync(path.join(OUT_DIR, 'favicon.ico'), ico);
  console.log(`favicon.ico: ${ico.length} bytes (${icoSizes.join(', ')}px)`);

  for (const [name, src] of Object.entries(appTargets)) {
    const dest = path.join(APP_DIR, name);
    if (Buffer.isBuffer(src)) {
      fs.writeFileSync(dest, src);
    } else {
      fs.copyFileSync(src, dest);
    }
    console.log(`${dest}: ${fs.statSync(dest).size} bytes`);
  }

  const legacyApple = path.join(OUT_DIR, 'apple-touch-icon-180x180.png');
  fs.copyFileSync(path.join(OUT_DIR, 'apple-touch-icon.png'), legacyApple);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
