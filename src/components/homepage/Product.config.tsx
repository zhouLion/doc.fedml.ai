import { VideoRegular } from '@fluentui/react-icons';
import React from 'react';

export type Product = {
  title: string;
  link: string;
  beta?: boolean;
  icon: any;
  lightImage: string;
  darkImage: string;
  text: any;
};

export const MLOPS_PRODUCTS: Product[] = [
  {
    title: 'FEDML® LLM Studio',
    beta: true,
    // TODO: Supplement with the correct documentation links
    link: '/guides/todo',
    icon: VideoRegular,
    lightImage: '/img/landing-page/hero/video-graphic.png',
    darkImage: '/img/landing-page/hero/video-graphic-dark.png',
    text: 'An easy-to-use platform for building vertical LLMs without requiring strong ML experience.',
  },
  {
    title: 'FEDML® FLOps',
    link: '/guides/todo',
    icon: VideoRegular,
    lightImage: '/img/landing-page/hero/video-graphic.png',
    darkImage: '/img/landing-page/hero/video-graphic-dark.png',
    text: 'the world’s first federated learning Ops platform; low-code experience; scale up to large number of devices.',
  },
];

export const COMPUTE_FRAMEWORK: Product[] = [
  {
    title: 'Train',
    // TODO: Supplement with the correct documentation links
    link: '/guides/todo',
    icon: VideoRegular,
    lightImage: '/img/landing-page/hero/video-graphic.png',
    darkImage: '/img/landing-page/hero/video-graphic-dark.png',
    text: (
      <>
        <b>Model training framework </b>
        <ul>
          <li>Large & foundational models</li>
          <li>Fast and efficient</li>
          <li>Scalable to any cluster</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Serve',
    // TODO: Supplement with the correct documentation links
    link: '/guides/todo',
    icon: VideoRegular,
    lightImage: '/img/landing-page/hero/video-graphic.png',
    darkImage: '/img/landing-page/hero/video-graphic-dark.png',
    text: (
      <>
        <b>Model serving framework</b>
        <ul>
          <li>Scalability </li>
          <li>Low latency Low cost </li>
          <li>Observability & Refinement </li>
        </ul>
      </>
    ),
    // text: '- FEDML® Serve is a model serving platform for high scalability and low latency.',
  },
  {
    title: 'Federate',
    link: '/guides/voice-conf/intro-voice-conf',
    icon: VideoRegular,
    lightImage: '/img/landing-page/hero/video-graphic.png',
    darkImage: '/img/landing-page/hero/video-graphic-dark.png',
    text: (
      <>
        <b>Federated Learning framework </b>
        <ul>
          <li>Top open-source library</li>
          <li>training across edge nodes, smartphone, & cloud</li>
          <li>Maximum privacy & personalization</li>
        </ul>
      </>
    ),
  },
];

export const IaaS: Product[] = [
  {
    title: 'Launch',
    // TODO: Supplement with the correct documentation links
    link: '/guides/todo',
    icon: VideoRegular,
    lightImage: '/img/landing-page/hero/video-graphic.png',
    darkImage: '/img/landing-page/hero/video-graphic-dark.png',
    text: (
      <>
        <b>
          <pre className="prism-code py-1">
            <b className="text-primary">fedml</b> launch job.yaml
          </pre>
        </b>
        <ul>
          <li>
            1-line CLI as a quick launcher for running any AI job on any public
            and/or decentralized GPU cloud
          </li>
          <li>Offering lower prices, higher GPU availability</li>
          <li>Support FedML® Train, FedML® Serve, FedML® Federate</li>
        </ul>
      </>
    ),
  },
];
