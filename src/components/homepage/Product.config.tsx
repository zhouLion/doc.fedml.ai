import { VideoRegular } from '@fluentui/react-icons';

export type Product = {
  title: string;
  link: string;
  beta?: boolean;
  icon: any;
  lightImage: string;
  darkImage: string;
  text: string;
};

export const MLOPS_PRODUCTS: Product[] = [
  {
    title: 'LLM Studio',
    beta: true,
    // TODO: Supplement with the correct documentation links
    link: '/guides/todo',
    icon: VideoRegular,
    lightImage: '/img/landing-page/hero/video-graphic.png',
    darkImage: '/img/landing-page/hero/video-graphic-dark.png',
    text: '- FEDML® LLM Studio is an easy-to-use platform for building vertical LLMs without requiring strong ML experience.',
  },
  {
    title: 'FLops',
    link: '/guides/todo',
    icon: VideoRegular,
    lightImage: '/img/landing-page/hero/video-graphic.png',
    darkImage: '/img/landing-page/hero/video-graphic-dark.png',
    text: 'Incorporate high-quality real-time audio into your application. Build voice calls, audio conferences, voice chats in games and more',
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
    text: '- FEDML® Train focuses on distributed training of large and foundational models.',
  },
  {
    title: 'Serve',
    // TODO: Supplement with the correct documentation links
    link: '/guides/todo',
    icon: VideoRegular,
    lightImage: '/img/landing-page/hero/video-graphic.png',
    darkImage: '/img/landing-page/hero/video-graphic-dark.png',
    text: '- FEDML® Serve is a model serving platform for high scalability and low latency.',
  },
  {
    title: 'Federate',
    link: '/guides/voice-conf/intro-voice-conf',
    icon: VideoRegular,
    lightImage: '/img/landing-page/hero/video-graphic.png',
    darkImage: '/img/landing-page/hero/video-graphic-dark.png',
    text: '- FEDML® Federate is a federated learning platform backed by the most popular federated learning open-source library and the world’s first FLOps (federated learning Ops), offering on-device training on smartphones and cross-cloud GPU servers.',
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
    text: '- FEDML® Launch is a quick launcher for running any AI job on any public and/or decentralized GPU cloud, offering lower prices and user-friendly MLOps infrastructure.',
  },
];
