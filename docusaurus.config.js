// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React-Openlayers7',
  tagline: 'React-Openlayers7 guide',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://main--incredible-otter-643bc8.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Han-D-Peter', // Usually your GitHub org/user name.
  projectName: 'react-openlayer-official', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          ],

          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Han-D-Peter/react-openlayer-official/tree/main/docs/',
        },
        pages:{
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        blog: {
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              {converters: ['pnpm']},
            ],
          ],
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Han-D-Peter/react-openlayer-official/tree/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.webp',
      navbar: {
        title: 'react-openlayers7',
        logo: {
          alt: 'rect-openlayers7 logo',
          src: 'img/logo.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'gettingStarted',
            position: 'left',
            label: 'Getting Started',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Han-D-Peter/react-openlayer',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Han-D-Peter/react-openlayer',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} React-Openlayers7 Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),

        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
      },
    }),
};

module.exports = config;
