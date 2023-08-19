/**
 * @type {import('@docusaurus/plugin-content-docs').Options[]}
 */
const _demo_docs = [
  {
    id: "tutorial-basics",
    path: "docs/tutorial-basics",
    routeBasePath: "/tutorial-basics",
  },
];

const sidebarPath = require.resolve("../sidebars-default.js");

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: true,
  editUrl: "https://github.com/FedML-AI/docs.fedml.ai/tree/main/",
  showLastUpdateTime: true,
  remarkPlugins: [
    [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
  ],
  sidebarPath,
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 * @example ``` js
 * _demo_docs.map((doc) => create_doc_plugin(doc))
 * ```
 */
function create_doc_plugin({ sidebarPath = sidebarPath, ...options }) {
  return [
    "@docusaurus/plugin-content-docs",
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    {
      ...defaultSettings,
      sidebarPath,
      ...options,
    },
  ];
}

module.exports = {
  defaultSettings,
  create_doc_plugin,
};
