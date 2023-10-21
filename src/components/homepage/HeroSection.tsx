import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';

export default function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className="no-underline-links px-4 pt-5 lg:py-0">
      <div className="flex flex-col items-center justify-between py-10">
        <h2
          style={{ '--stagger': '1' }}
          data-animate
          className="mb-4 font-jakarta text-5xl font-bold"
        >
          {siteConfig.title}
        </h2>
        {/* <p
          style={{ '--stagger': '2' }}
          data-animate
          className="max-w-xl text-center text-text-400"
        >
          {siteConfig.tagline}
        </p> */}
      </div>
    </section>
  );
}
