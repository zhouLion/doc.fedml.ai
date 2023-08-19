import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';
import { ChevronRight } from 'react-feather';
import {
  COMPUTE_FRAMEWORK,
  IaaS,
  MLOPS_PRODUCTS,
  Product,
} from './Product.config';

function ProductItem({ title, text, icon: Icon, link }: Product) {
  return (
    <Link
      to={link}
      className="group inline-flex cursor-pointer items-start gap-2 rounded-lg border-2 border-transparent p-3 text-inherit transition-colors hover:border-primary hover:text-primary"
    >
      <Icon className="h-6 w-6" />

      <div className="flex flex-col">
        <h4 className="mb-1 font-semibold">{title}</h4>
        <p className="mb-0 text-sm text-text-400">{text}</p>
      </div>

      <ChevronRight className="ml-auto h-5 w-5 self-center opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}

export default function ProductColSection() {
  return (
    <section className="no-underline-links my-40 mx-auto flex w-full max-w-7xl flex-col gap-10 p-4 py-0 md:flex-row md:gap-0">
      <div className="flex-1">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="m-0">MLOPS</h3>

          {/* <Link to="/guides" className="font-jakarta text-sm font-semibold">
            View more guides <ArrowRightFilled className="ml-1" />
          </Link> */}
        </div>

        <div className="flex flex-col gap-4">
          {MLOPS_PRODUCTS.map((guide) => (
            <ProductItem {...guide} key={guide.title} />
          ))}
        </div>
      </div>

      <div
        className={clsx(
          'mx-8 block flex-shrink-0 bg-gradient-to-b from-transparent via-secondary-700 to-transparent',
          'hidden w-px md:block',
        )}
      />

      <div className="flex-1">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="m-0">Compute Framework</h3>

          {/* <Link to="/guides" className="font-jakarta text-sm font-semibold">
            View more guides <ArrowRightFilled className="ml-1" />
          </Link> */}
        </div>

        <div className="flex flex-col gap-4">
          {COMPUTE_FRAMEWORK.map((guide) => (
            <ProductItem {...guide} key={guide.title} />
          ))}
        </div>
      </div>

      <div
        className={clsx(
          'mx-8 block flex-shrink-0 bg-gradient-to-b from-transparent via-secondary-700 to-transparent',
          'hidden w-px md:block',
        )}
      />

      <div className="flex-1">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="m-0">IaaS</h3>

          {/* <Link to="/guides" className="font-jakarta text-sm font-semibold">
            View more guides <ArrowRightFilled className="ml-1" />
          </Link> */}
        </div>

        <div className="flex flex-col gap-4">
          {IaaS.map((guide) => (
            <ProductItem {...guide} key={guide.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
