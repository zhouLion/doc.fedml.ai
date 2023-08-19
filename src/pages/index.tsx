import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ProductSection from '@site/src/components/homepage/ProductSection';
import ProductColSection from '@site/src/components/homepage/ProductColSection';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Head>
        <link rel="prefetch" href="/assets/css/elements.min.css" />
      </Head>
      <main>
        <ProductSection />
        <ProductColSection />
      </main>
    </Layout>
  );
}
