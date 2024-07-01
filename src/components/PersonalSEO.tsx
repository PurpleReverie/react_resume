// Add this inside your SEO component
import React from 'react';
import { Helmet } from 'react-helmet';

export function PersonSEO() {
  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'Person',
    name: 'Taura J Greig',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+64211049888',
      email: 'taurajgreig@outlook.com',
      contactType: 'Software Developer',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
