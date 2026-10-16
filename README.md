# Finance & Accounting — home, service, and company pages

The home page is complete: hero, outsourcing benefits, six-service overview,
onboarding, audience profiles, software context, FAQs, enquiry form, and footer.
All six dedicated service pages are built, with working header, footer, and home
overview links. Dedicated Who We Serve and About Us pages are also built, replacing
the Why Us navigation item with About Us. FAQ and Contact pages are live, and
sitewide consultation links point to `/contact/`. Terms is marked as coming
soon until its page is built. No hosting registration or publication is part of this step.

## Run

Requires Node.js 20.19+ or 22.12+ (Node 24 supported).

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`build` runs strict Astro/TypeScript diagnostics before creating static output in
`dist/`. Astro stays on major version 5 and Tailwind on major version 4. Commit
`package-lock.json` for reproducible installations.

## Light and dark themes

The navbar has a keyboard-accessible light/dark switch on desktop and mobile.
`public/theme.js` runs as a small blocking external head script before body content
renders, so a saved theme is applied before paint without requiring an inline-script
CSP exception. First visits follow the system preference. A manual choice is saved
under `finance-theme` in localStorage and persists between pages and visits.
Unselected themes follow live system changes; storage events sync other tabs.
Blocked storage still allows switching for the current page. No cookies are used.
Theme colours and component overrides live in `src/styles/theme.css`.

## Configuration

Copy `.env.example` to `.env` and configure the company name, HTTPS origin, public
contact details, and Web3Forms access key. Restart dev or rebuild after changes:
these values are compiled into the static site. The defaults are `Your Firm` and
`https://example.com`; email, phone, and WhatsApp remain inactive until configured.
No contact details or certifications have been invented.

`PUBLIC_SITE_URL` must be an origin with no path, query, or fragment. It drives the
canonical URLs, sitemap, robots file, social metadata, and Organization/WebSite
JSON-LD. Public environment values, including Web3Forms access keys, are visible in
browser code by design; never place private secrets in `PUBLIC_*` values.

Indexing stays disabled on the placeholder domain. When the real site is complete,
set `PUBLIC_ALLOW_INDEXING=true`.
The generated sitemap contains implemented pages only and excludes the future 404.
The placeholder domain remains noindex regardless of that setting.

The home page uses a custom SVG/CSS finance-workflow illustration, labelled as an
illustrative overview. No fictional client results, testimonials, or certifications
are presented. The hero and navigation CTAs reach the dedicated Contact page.
Public phone/email/WhatsApp channels remain inactive until configured.

The hero is slightly more compact, with reduced spacing and illustration size.
Motion includes staggered entrances, a chart line draw, gently drifting hero artwork,
and one-time scroll reveals for cards and sections. Fine orbital lines repeat the
footer motif in the services, onboarding, and enquiry sections. Continuous animations
pause offscreen. Reduced-motion preferences disable animations and reveal content
immediately, including when the preference changes during a visit. There is no
animation library or image download; effects use transforms and opacity.

The two sections following the hero adapt the capacity/control/insight progression
and service themes from [Finex](https://finexoutsourcing.com/) and its
[accounting overview](https://finexoutsourcing.com/accounting-bookkeeping/), with
original copy and SVG/CSS artwork. They do not reuse Finex's company statistics,
testimonials, certifications, contact details, or branding. The `#expertise` anchor
now belongs to the services section. Its consultation links use the existing
contact area; service headings now link to their dedicated pages.

Blue and purple now guide the home palette: the main service card stays blue,
the secondary service cards share a neutral background, and the dedicated-team
panel uses a restrained purple/blue gradient. The approved hero gradient and
benefit illustrations remain. Document motifs replace circular tick badges.

The remaining page covers onboarding, audience fit, software context, FAQs, and
an enquiry form. FAQ content and its JSON-LD use the same `src/data/home.ts` data.
The onboarding progression is also informed by the reference firm's
[process page](https://finexoutsourcing.com/how-it-works/).

## Structure

- `astro.config.mjs`: static output, sitemap, Sharp image service, Tailwind Vite plugin.
- `src/styles/global.css`: Tailwind v4 `@theme` tokens, Google Font, base rules and shared utilities.
- `src/config/site.ts`: shared public company details and future navigation destinations.
- `src/layouts/Layout.astro`: document metadata, canonical/OG/Twitter tags, JSON-LD, skip link.
- `src/components/`: sticky Header, four-column Footer, FloatingContact, Logo, Icon.
- `src/lib/web3forms.ts`: async JSON submission with validation, timeout, cancellation, and error handling.
- `src/data/services.ts`: tailored scope, workflow, deliverables, and FAQ content for six services.
- `src/pages/services/[slug].astro`: six statically generated service routes.
- `src/layouts/ServiceLayout.astro`: shared service-page structure, metadata, and schema.
- `src/components/ServiceVisual.astro`: six abstract line signatures for the service mastheads.
- `src/pages/who-we-serve.astro` and `src/pages/about.astro`: audience and company pages.
- `src/data/company.ts`: audience profiles, related services, and working principles.
- `src/layouts/CompanyLayout.astro`: shared shell, breadcrumb metadata, and page schema.
- `src/styles/company-pages.css`: company-page layouts and theme-aware colour variables.
- `src/styles/service-hero.css`: dark editorial mastheads, service index, and subtle line motion.
- `src/assets/README.md`: built-in `astro:assets` Image usage for future content.
- `public/`: favicon, PNG social fallback, Apache deployment configuration.

To edit the social fallback, update `src/assets/og-default.svg` and run
`node scripts/generate-og.mjs` to regenerate its PNG.

The header uses a native details disclosure on desktop and modal dialog on mobile
with focus containment, Escape/backdrop dismissal, scroll locking, and a no-JS
navigation fallback. Quick contact is a native details disclosure. Only the small
interaction scripts ship to the browser; there is no React or hydration runtime.
Google Fonts uses `display=swap`, preconnects, and local/system font fallbacks.
The mint token is used for accents; dark emerald is used for readable badge text.

## Enquiry links

Service-page consultation links pass an allowlisted `service` slug to the Contact page
enquiry form. The corresponding dropdown option is preselected and remains editable.
The canonical URL stays on `/contact/`; query parameters do not create extra sitemap entries.

## Service pages

The six routes are `/services/bookkeeping-month-end-close/`,
`/services/year-end-accounts/`, `/services/management-accounts-fpa/`,
`/services/vat-tax-compliance/`, `/services/payroll-outsourcing/`, and
`/services/dedicated-offshore-teams/`.

Each page includes a dark editorial masthead with a large service title, numbered
index, and a distinct abstract line signature. This replaces the floating dashboard
composition used on the home page. Each page also has six scope items, a three-step workflow,
deliverables, four FAQs, related services, and consultation CTAs. FAQ content feeds
both visible accordions and FAQPage JSON-LD. Service and BreadcrumbList structured
data, unique metadata, and sitemap entries are generated for every route. No fees,
certifications, testimonials, or turnaround guarantees have been invented.

VAT content distinguishes UK VAT from US requirements. Preparation, approval,
filing, advice, and payment responsibilities are described as scope-dependent.

## Company pages

`/who-we-serve/` covers UK/US accounting practices, owner-led SMEs, and growing
finance teams, with in-page audience navigation and relevant service links.
Home audience headings link to the matching detailed profiles. `/about/` explains
the approach, working principles, onboarding, and handover responsibilities.
The About Us label replaces Why Us in desktop/mobile navigation and the footer.
Both pages support the saved theme and reduced-motion preferences, with unique
metadata, canonical URLs, page/breadcrumb JSON-LD, and sitemap entries. Copy avoids
invented founders, history, team biographies, offices, or certifications.

## Form behaviour

`ContactForm.astro` is shared by the homepage and Contact page. It implements labelled name, email, company, service, and message
fields, native validation, a honeypot, pending/success/error states, and an aria-live
status. It uses `submitContactForm` for asynchronous JSON submissions and resets only
on success. Set `PUBLIC_WEB3FORMS_ACCESS_KEY` and rebuild to enable submissions.
Until then, the submit button is disabled and an enquiries-coming-soon note is shown.
JavaScript is required to submit. No live test enquiry has been sent.

## FAQ and Contact pages

`/faq/` has 16 questions in four topic groups, client-side search, a clear action,
live result counts, an empty state, and native keyboard-accessible accordions.
Direct question links open the corresponding answer. Without JavaScript, all
questions remain available and search controls stay hidden. Visible answers and
FAQPage JSON-LD come from `src/data/faqs.ts`.

`/contact/` includes the shared enquiry form, configured email/phone/WhatsApp
channels, and an outline of the next steps. Unconfigured channels show explicit
placeholders. `src/scripts/contact-form.ts` scopes validation and pending/result
states to each form; service selections are allowlisted and retained on reset.
The two pages include canonical/social metadata, page and breadcrumb JSON-LD,
sitemap entries, and both colour themes. Form inputs use 16px text on mobile.

Build checks verify all home fragment links and FAQ JSON-LD. The form helper is
verified using local mocked responses for success, invalid input, spam, missing
configuration, rate limiting, upstream failure, and cancellation.

## Apache deployment

Upload the contents of `dist/`, including `.htaccess`, to an Apache 2.4+ web root
with a valid TLS certificate. The file configures HTTPS redirection, one-year HSTS
on HTTPS, CSP/security headers, Gzip, browser caching, and disabled directory
listing. Content Security Policy permits Google Fonts and Web3Forms; keep future
scripts/styles external or extend the policy with specific hashes as needed.

The host must allow `.htaccess` overrides (`Options`, `FileInfo`, `AuthConfig`) and
enable `mod_rewrite`, `mod_authz_core`, `mod_headers`, `mod_deflate`, and `mod_expires`.
Behind a CDN/proxy, use TLS to the origin or configure trusted proxy HTTPS detection
in the virtual host before deployment. Static preview does not execute `.htaccess`;
redirects, headers, and compression must be checked on the actual Apache host.
Add the custom ErrorDocument directive when the 404 page is built.

## Dependency security status

The requested Astro 5 line currently resolves to 5.18.2. The initialization audit
reports one critical package-level finding for Astro, covering multiple upstream
advisories whose published fixes require newer Astro major versions. The framework
has deliberately stayed on major 5 as requested; this is a clean compile, not a
claim of a vulnerability-free dependency tree.

Sharp is updated to 0.35.5+ and overridden inside Astro to use that patched version.
Astro's esbuild is overridden to 0.28.1+ for the Windows development-server fix.
These overrides must be verified by the build when dependencies are updated.
The remaining Astro AVIF advisory still matches the framework version even though
the underlying image-library fix is included through the Sharp override.

This project exports static HTML only, with no server adapter, server islands,
hydrated islands, view transitions, untrusted spread attributes, or remote image
allowlist. Its JSON-LD is explicitly serialized and escaped. These choices reduce
exposure for this shell, but do not remediate every framework advisory. Review an
Astro major upgrade before production launch and reassess as future pages add features.

- [Astro AVIF advisory and Sharp fix](https://github.com/withastro/astro/security/advisories/GHSA-26w7-cxv4-gfx2)
- [Patched Sharp 0.35.5](https://github.com/lovell/sharp/security/advisories/GHSA-wq5f-xc86-pv6w)
- [Patched esbuild 0.28.1](https://github.com/evanw/esbuild/security/advisories/GHSA-g7r4-m6w7-qqqr)

## Reference documentation

- [Tailwind v4 with Astro](https://tailwindcss.com/docs/installation/framework-guides/astro)
- [Astro Image API](https://docs.astro.build/en/reference/modules/astro-assets/)
- [Astro sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Web3Forms API](https://docs.web3forms.com/getting-started/api-reference)
- [Apache headers](https://httpd.apache.org/docs/2.4/mod/mod_headers.html)
