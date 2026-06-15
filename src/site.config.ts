/**
 * Central business + site configuration (single source of truth for NAP data).
 * NOTE: Items marked PLACEHOLDER should be confirmed with the client before launch.
 */
export const SITE = {
  url: 'https://www.wallanaccountingandbookkeeping.com.au',
  name: 'Wallan Accounting & Bookkeeping',
  shortName: 'Wallan Accounting',
  legalName: 'Wallan Accounting & Bookkeeping',
  tagline: 'Local Accountants & Bookkeepers in Wallan, Victoria',
  description:
    'Wallan Accounting & Bookkeeping provides individual & business tax returns, BAS & GST lodgements, bookkeeping, payroll and small business advice across Wallan and the Mitchell Shire region. Free consultation. Basic tax returns from $120.',
  // Owner / primary contact
  owner: 'Shannon',
  // Contact details (from flyer)
  phone: '0430 339 398',
  phoneE164: '+61430339398',
  email: 'shannon@wallanaccountingandbookkeeping.com.au',
  // Service-area business based in Wallan (no public street address shown on flyer).
  address: {
    locality: 'Wallan',
    region: 'VIC',
    regionName: 'Victoria',
    postcode: '3756',
    country: 'AU',
  },
  // Approx geo centre of Wallan, VIC (for LocalBusiness schema).
  geo: {
    lat: -37.4156,
    lng: 145.0058,
  },
  pricing: {
    basicTaxReturnFrom: 120,
    freeConsultation: true,
  },
  hours: [
    { days: 'Monday – Friday', open: '09:00', close: '17:00' },
    { days: 'Saturday', open: 'By appointment', close: '' },
    { days: 'Sunday', open: 'Closed', close: '' },
  ],
  // Opening hours in schema.org format
  openingHoursSpec: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
  ],
  social: {
    // PLACEHOLDER social links — add real profiles when available.
    facebook: '',
    instagram: '',
    linkedin: '',
    googleBusiness: '',
  },
  abn: '', // PLACEHOLDER — add ABN when available.
} as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Service Areas', href: '/locations/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Resources', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];
