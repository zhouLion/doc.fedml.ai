import React from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  COMPUTE_FRAMEWORK,
  IaaS,
  MLOPS_PRODUCTS,
  Product,
} from './Product.config';

function HeroProduct({
  link,
  title,
  icon: Icon,
  text,
  lightImage,
  darkImage,
  beta,
}: Product) {
  return (
    <Link
      to={link}
      style={{
        borderWidth: '1px',
      }}
      className={clsx(
        'group relative cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white',
        'border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800',
      )}
    >
      <div className="p-6 !pb-0">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" />
          <div>
            {title}
            {beta && <span className="font-normal text-text-400"> (Beta)</span>}
          </div>
        </h3>
        <p className="mb-0 text-sm text-zinc-400">{text}</p>
      </div>
      <ThemedImage
        sources={{
          light: lightImage,
          dark: darkImage,
        }}
        alt={title}
        className="mt-1 w-full transition-transform group-hover:scale-110"
      />
    </Link>
  );
}

export default function HeroSection() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between py-14">
          <h2
            style={{ '--stagger': '1' }}
            data-animate
            className="mb-4 font-jakarta text-5xl font-bold"
          >
            {siteConfig.title}
          </h2>
          <p
            style={{ '--stagger': '2' }}
            data-animate
            className="max-w-xl text-center text-text-400"
          >
            {siteConfig.tagline}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl mb-10">
        <h3 className="px-4">MLOPS</h3>
        <div className="grid w-full grid-cols-1 gap-6 px-4 md:grid-cols-2">
          {MLOPS_PRODUCTS.map((product, i) => (
            <HeroProduct {...product} key={product.title} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl mb-10">
        <h3 className="px-4">Compute Framework</h3>
        <div className="grid w-full grid-cols-1 gap-6 px-4 md:grid-cols-2">
          {COMPUTE_FRAMEWORK.map((product, i) => (
            <HeroProduct {...product} key={product.title} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl mb-10">
        <h3 className="px-4">IaaS (GPU as a Service)</h3>
        <div className="grid w-full grid-cols-1 gap-6 px-4 md:grid-cols-2">
          {IaaS.map((product, i) => (
            <HeroProduct {...product} key={product.title} />
          ))}
        </div>
      </section>
    </>
  );
}
