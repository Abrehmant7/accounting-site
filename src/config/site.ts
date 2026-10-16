// Replace these public values through .env when the company details are confirmed.
export const siteConfig = {
  name: import.meta.env.PUBLIC_SITE_NAME?.trim() || 'Your Firm',
  description: 'Finance and accounting outsourcing for accounting practices, SMEs, and growing businesses.',
  locale: 'en_GB',
  contact: {
    email: import.meta.env.PUBLIC_CONTACT_EMAIL?.trim() || '',
    phone: import.meta.env.PUBLIC_CONTACT_PHONE?.trim() || '',
    whatsapp: import.meta.env.PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '') || '',
  },
  allowIndexing: import.meta.env.PUBLIC_ALLOW_INDEXING === 'true',
} as const;

// Service routes are live; homeHref keeps the corresponding overview anchor.
export const services = [
  { label: 'Bookkeeping & Month-End Close', href: '/services/bookkeeping-month-end-close/', homeHref: '/#service-bookkeeping' },
  { label: 'Year-End Accounts & Financial Reporting', href: '/services/year-end-accounts/', homeHref: '/#service-yearend' },
  { label: 'Management Accounts & FP&A', href: '/services/management-accounts-fpa/', homeHref: '/#service-management' },
  { label: 'VAT Returns & Tax Compliance', href: '/services/vat-tax-compliance/', homeHref: '/#service-tax' },
  { label: 'Payroll Outsourcing', href: '/services/payroll-outsourcing/', homeHref: '/#service-payroll' },
  { label: 'Dedicated Offshore Teams', href: '/services/dedicated-offshore-teams/', homeHref: '/#service-teams' },
] as const;

export const companyLinks = [
  { label: 'Who we serve', href: '/who-we-serve/', navigationHref: '/who-we-serve/' },
  { label: 'About us', href: '/about/', navigationHref: '/about/' },
  { label: 'FAQs & compliance', href: '/faq/', navigationHref: '/faq/' },
  { label: 'Contact us', href: '/contact/', navigationHref: '/contact/' },
] as const;
