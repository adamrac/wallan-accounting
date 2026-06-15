import { SITE } from '../site.config';

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: new URL(item.href, SITE.url).href } : {}),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a.replace(/<[^>]+>/g, ''),
      },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: new URL(opts.path, SITE.url).href,
    provider: {
      '@type': 'AccountingService',
      '@id': `${SITE.url}/#business`,
      name: SITE.name,
      telephone: SITE.phoneE164,
    },
    areaServed: opts.areaServed ?? 'Mitchell Shire, Victoria',
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  date: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    dateModified: opts.date,
    url: new URL(opts.path, SITE.url).href,
    image: new URL(opts.image ?? '/og-image.png', SITE.url).href,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: new URL('/favicon.svg', SITE.url).href },
    },
  };
}
