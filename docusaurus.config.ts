import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Vave Cafe',
  tagline: 'Human-centered automation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://vavecafe.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vavecafe', // Usually your GitHub org/user name.
  projectName: 'vavecafe-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          editUrl:
            'https://github.com/vavecafe/vavecafe-website/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/vavecafe/vavecafe-website/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/vavecafe-social-card.jpg',
    navbar: {
      title: 'Vave Cafe',
      logo: {
        alt: 'Vave Cafe Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/#services',
          position: 'right',
          label: 'Services',
        },
        {
          to: '/#process',
          position: 'right',
          label: 'Process',
        },
        {
          to: '/blog',
          position: 'right',
          label: 'Insights',
        },
        {
          to: '/guides',
          position: 'right',
          label: 'Learning Hub',
        },
        {
          to: '/#contact',
          position: 'right',
          label: 'Contact',
          className: 'navbar-contact-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Guides',
              to: '/guides',
            },
            {
              label: 'Resources',
              to: '/resources',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'Team',
              to: '/team',
            },
            {
              label: 'Contact',
              to: '/contact',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/vavecafe',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/vavecafe',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/vavecafe',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vave Cafe. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;