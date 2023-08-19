import { Product } from './Product.config';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import { ChevronRight } from 'react-feather';

export function ProductLinkItem({ title, text, icon: Icon, link }: Product) {
  return (
    <Link
      to={link}
      className="group inline-flex cursor-pointer items-start gap-2 rounded-lg border-2 border-transparent p-3 text-inherit transition-colors hover:border-primary hover:text-primary"
    >
      <Icon className="h-6 w-6" style={{ '--stagger': '2' }} data-animate />

      <div className="flex flex-col">
        <h4
          className="mb-1 font-semibold"
          style={{ '--stagger': '3' }}
          data-animate
        >
          {title}
        </h4>
        <p
          className="mb-0 text-sm text-text-400"
          style={{ '--stagger': '4' }}
          data-animate
        >
          {text}
        </p>
      </div>

      <ChevronRight className="ml-auto h-5 w-5 self-center opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}

export function ProductCardItem({
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
      className={clsx(
        'group relative cursor-pointer overflow-clip rounded-3xl',
        'from-primary/30 via-transparent to-transparent text-black transition-all',
        'hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white',
        'border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800',
      )}
    >
      <div className="p-6 mb-24 !pb-0 z-2 static">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" style={{ '--stagger': '2' }} data-animate />
          <div style={{ '--stagger': '3' }} data-animate>
            {title}
            {beta && <span className="font-normal text-text-400"> (Beta)</span>}
          </div>
        </h3>
        <p
          className="mb-0 text-sm text-zinc-400"
          style={{ '--stagger': '4' }}
          data-animate
        >
          {text}
        </p>
      </div>
      <ThemedImage
        sources={{
          light: lightImage,
          dark: darkImage,
        }}
        alt={title}
        className="z-1 h-20 right-0 transition-transform group-hover:scale-110 absolute bottom-0"
      />
    </Link>
  );
}
