import { company, faqs, services } from '@/data/site';

const SITE_URL = 'https://ketha24x7.github.io';

/**
 * Schema.org JSON-LD, generated from site.ts so the markup can never drift
 * from the copy on the page. Rendered into the app rather than index.html
 * for that single-source reason; search crawlers execute JS before parsing.
 */
const StructuredData = () => {
  const graph = [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#organization`,
      name: company.name,
      url: SITE_URL,
      image: `${SITE_URL}/og.png`,
      logo: `${SITE_URL}/icon-512.png`,
      email: company.email,
      telephone: company.phones,
      description:
        'Ketha24 builds web platforms, mobile apps, cloud systems and AI solutions for businesses, from Kaduwela, Sri Lanka.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kaduwela',
        addressCountry: 'LK',
      },
      sameAs: Object.values(company.social).filter(Boolean),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'IT services',
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title, description: s.description },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: company.name,
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // Content is authored by us in site.ts, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }}
    />
  );
};

export default StructuredData;
