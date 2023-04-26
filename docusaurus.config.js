// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'zhengxuexian_blog',
  tagline: 'zhengxuexian_blog',
  url: 'https://junzhen6888.github.io',
  baseUrl: '/zhengxuexian_blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'junzhen6888', // Usually your GitHub org/user name.
  projectName: 'zhengxuexian_blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: false,
        },
        blog: {
          blogTitle: "测试博客",
          blogDescription: "郑学贤 的个人学习和工作记录",
          blogSidebarCount: 7,
          blogSidebarTitle: "文章",
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "greenhand",
        path: "fun/greenhand",
        routeBasePath: "greenhand",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "guide",
        path: "fun/guide",
        routeBasePath: "guide",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "flow",
        path: "fun/flow",
        routeBasePath: "flow",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "kbs",
        path: "fun/kbs",
        routeBasePath: "kbs",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "auto",
        path: "auto",
        routeBasePath: "auto",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "base",
        path: "perf/base",
        routeBasePath: "base",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "ctrl",
        path: "perf/ctrl",
        routeBasePath: "ctrl",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "jmeter",
        path: "perf/jmeter",
        routeBasePath: "jmeter",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],

    [
      "@docusaurus/plugin-content-docs",
      {
        id: "locust",
        path: "perf/locust",
        routeBasePath: "locust",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "new",
        path: "safe/new",
        routeBasePath: "new",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "kali",
        path: "safe/kali",
        routeBasePath: "kali",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "safe_wiki",
        path: "safe/safe_wiki",
        routeBasePath: "safe_wiki",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "manage",
        path: "manage",
        routeBasePath: "manage",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "dev",
        path: "wiki/dev",
        routeBasePath: "dev",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "algo",
        path: "wiki/algo",
        routeBasePath: "algo",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "ops",
        path: "wiki/ops",
        routeBasePath: "ops",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "database",
        path: "wiki/database",
        routeBasePath: "database",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "tool",
        path: "tool",
        routeBasePath: "tool",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content: "功能测试, app测试, web测试, api, 接口测试, 自动化测试, python, java, 性能测试, 渗透测试",
        },
      ],
      navbar: {
        title: "🛫 测试博客",
        hideOnScroll: true,
        items: [
          {
            position: "left",
            label: "🛴 功能测试",
            items: [
              {
                label: "新手村",
                to: "/greenhand",
              },
              {
                label: "测试流程",
                to: "/flow",
              },
              {
                label: "测试规范",
                to: "/guide",
              },
              {
                label: "测试知识",
                to: "/kbs",
              },
            ],
          },

          { to: "/auto", label: "🚚 自动化", position: "left" },

          {
            position: "left",
            label: "🚑 性能测试",
            items: [
              {
                label: "性能基础",
                to: "/base",
              },
              {
                label: "性能监控",
                to: "/ctrl",
              },
              {
                label: "jmeter汇总",
                to: "/jmeter",
              },
              {
                label: "locust汇总",
                to: "/locust",
              },
            ]
          },
          {
            position: "left",
            label: "⚔️ 渗透测试",
            items: [
              {
                label: "kali汇总",
                to: "/kali",
              },
              {
                label: "安全入门",
                to: "/new",
              },
            ]
          },
          { to: "/manage", label: "🧮 测试管理", position: "left" },
          {
            position: "left",
            label: "🚌 开发百科",
            items: [
              {
                label: "程序语言",
                to: "/dev",
              },
              {
                label: "数据库",
                to: "/database",
              },
              {
                label: "网络运维",
                to: "/ops",
              },
              {
                label: "逻辑算法",
                to: "/algo",
              },
            ],
          },
          { to: "/tool", label: "⛽ 新技术运用", position: "left" },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "markdown",
        additionalLanguages: ["java", "git"],
      },
    }),
};

module.exports = config;