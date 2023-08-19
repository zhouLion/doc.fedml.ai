const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const { defaultSettings } = require('./plugins/doc-plugin.cjs');

const code_themes = {
  light: require('prism-react-renderer/themes/github'),
  dark: require('prism-react-renderer/themes/vsDark'),
};

/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: 'FEDML© Docs',
  tagline:
    'FEDML® AI Platform provides a foundational ecosystem design for machine learning that helps data scientists and machine learning engineers to train, serve, and deploy AI models easily, economically, and securely, with holistic support of high-performance ML libraries, user-friendly AIOps, and a well-managed distributed GPU Cloud.',
  url: 'https://docs.fedml.ai',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
};

const resources = [
  {
    label: 'Blog',
    href: 'https://blog.fedml.ai',
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@FedML',
  },
  {
    label: 'Press',
    href: 'https://fedml.ai/press',
  },
];

const plugins = [
  tailwindPlugin,
  // ...docs_plugins,
  webpackPlugin,
  // TODO: set some redirects rules
  // [
  //   "@docusaurus/plugin-client-redirects",
  //   {
  //     createRedirects(path) {
  //       // @example return path list
  //       // if (path.startsWith("/guides/capabilities/webhooks")) {
  //       //   return [
  //       //     path.replace("/guides/capabilities/webhooks", "/guides/webhooks"),
  //       //     path.replace(
  //       //       "/guides/capabilities/webhooks",
  //       //       "/guides/features/webhooks"
  //       //     ),
  //       //   ];
  //       // }
  //       return undefined; // Return a falsy value: no redirect created
  //     },
  //   },
  // ],
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,

  trailingSlash: false,
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          ...defaultSettings,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // googleTagManager: {
        //   containerId: "GTM-XXXXX",
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'FEDML Docs',
        logo: {
          href: '/',
          src: 'img/logo.png',
          // TODO: design a icon for dark mode.
          // srcDark: 'img/logo-dark.png',
          alt: 'FEDML Docs',
          height: '40px',
          width: '40px',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            label: 'Resources',
            type: 'dropdown',
            items: [...resources],
            position: 'left',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            label: 'Sign Up',
            href: 'https://portal.fedml.ai',
            position: 'right',
            className: 'dev-portal-signup dev-portal-link',
          },
        ],
      },
      footer: {
        logo: {
          href: '/',
          src: '/img/logo.png',
          // TODO:
          // srcDark: '/img/logo-dark.png',
          alt: 'FEDML Docs',
          width: '40px',
          height: '40px',
        },
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Demo',
                href: 'https://fedml.ai',
              },
              {
                label: 'Developer Portal',
                href: 'https://fedml.ai',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About Us',
                href: 'https://fedml.ai',
              },
              {
                label: 'Join Us',
                href: 'https://fedml.ai',
              },
              {
                label: 'Privacy Policy',
                href: 'https://fedml.ai',
              },
              {
                label: 'Contact Us',
                href: 'https://fedml.ai',
              },
            ],
          },
          {
            title: 'Resources',
            items: [...resources],
          },
        ],
        copyright: 'Copyright © FEDML since 2023. All rights reserved.',
      },
      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
      // TODO: support algolia for high level document query
      // algolia: {
      //   appId: '$algolia_appId',
      //   apiKey: '$algolia_apiKey',
      //   indexName: 'docs',
      //   contextualSearch: true,
      //   searchParameters: {},
      // },
    }),

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};

module.exports = config;
