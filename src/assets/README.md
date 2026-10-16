Store local photography and illustrations here, then import them into Astro files.
Astro's built-in Sharp service is configured and `<Image />` emits WebP by default:

```astro
---
import { Image } from 'astro:assets';
import photo from '@/assets/your-photo.jpg';
---
<Image
  src={photo}
  alt="A meaningful description"
  format="webp"
  widths={[480, 768, 1200]}
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="lazy"
/>
```

Use `loading="eager"` and `fetchpriority="high"` only for the eventual LCP image.
Imported assets retain intrinsic dimensions to prevent layout shift. Avoid putting
content photography in `public/`, where it bypasses the image pipeline.
No content imagery is needed for the initialization placeholder.
