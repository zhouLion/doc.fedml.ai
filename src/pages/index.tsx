import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/homepage/HeroSection';
import ProductColSection from '@site/src/components/homepage/ProductColSection';
import ProductLayerSection from '../components/homepage/ProductLayerSection';

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
      <HeroSection />
      <main className="noise-bg">
        <ProductLayerSection />
        <ProductColSection />
      </main>
    </Layout>
  );
}
