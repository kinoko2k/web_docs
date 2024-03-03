const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Kinoko_2Kの雑記帳',
  tagline: 'kinoko1216',
  url: 'https://kinokoserver.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '@kinoko1216', // Usually your GitHub org/user name.
  projectName: 'kinoko2k.github.io', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/kinoko2k/kinoko2k.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/kinoko2k/kinoko2k.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} img/logo.svg */
    ({
      navbar: {
        title: 'my雑記帳',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'NoteBook',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/kinoko2k/kinoko2k.github.io',
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
                label: 'NoteBook',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'SNS',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/kinoko1216',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/users/925245386568896564',
              },
              {
                label: 'Github',
                href: 'https://github.com/kinoko2k/',
              },
              {
                label: 'Note',
                href: 'https://note.com/kinoko1216',
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
                href: 'https://github.com/kinoko2k/kinoko2k.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kinoko_2K Notebook`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
