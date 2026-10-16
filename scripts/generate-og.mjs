import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

// Retain the editable vector source while serving a widely supported PNG to crawlers.
await sharp(fileURLToPath(new URL('../src/assets/og-default.svg', import.meta.url)))
  .png()
  .toFile(fileURLToPath(new URL('../public/og-default.png', import.meta.url)));
