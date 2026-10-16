import type { APIRoute } from 'astro';
import { siteConfig } from '@/config/site';

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://example.com');
  const isPlaceholderDomain = origin.hostname === 'example.com' || origin.hostname.endsWith('.example.com');
  const allowIndexing = siteConfig.allowIndexing && !isPlaceholderDomain;
  return new Response([
    'User-agent: *',
    allowIndexing ? 'Allow: /' : 'Disallow: /',
    '',
    `Sitemap: ${new URL('/sitemap-index.xml', origin).href}`,
    '',
  ].join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
