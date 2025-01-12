import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'Vave Cafe',
  tagline: 'Learn Automation and AI by Doing — For Everyone!',
  url: 'https://vave.cafe',
  baseUrl: '/',
  organizationName: 'vavecafe',
  projectName: 'vavecafe',
  trailingSlash: false,
  onBrokenLinks: 'warn',

  themeConfig: { 
    navbar: {
      title: 'Vave Cafe',   
      // logo: {
      //   alt: 'Vave Cafe Logo',
      //   src: 'img/logo.png',
      //   srcDark: 'img/logo-dark.png',
      //   width: 50,
      //   height: 75,
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'learnSidebar',
          position: 'left',
          label: 'Learn Hub',
        },
        {
          type: 'dropdown',
          label: 'Industry Solutions',
          position: 'left',
          items: [
            {
              label: 'Real Estate',
              to: '/docs/industries/real-estate',
            },
            {
              label: 'Insurance',
              to: '/docs/industries/insurance',
            },
            {
              label: 'E-Commerce',
              to: '/docs/industries/ecommerce',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Tutorials',
          position: 'left',
          items: [
            {
              label: 'For Beginners',
              to: '/docs/tutorials/beginners',
            },
            {
              label: 'For Kids',
              to: '/docs/tutorials/kids',
            },
            {
              label: 'Advanced',
              to: '/docs/tutorials/advanced',
            },
          ],
        },
        {
          to: '/templates',
          label: 'Templates',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'right',
        },
        {
          to: '/community',
          label: 'Community',
          position: 'right',
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
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Tutorials',
              to: '/docs/tutorials',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/vavecafe',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/vavecafe/vavecafe',
            },
          ],
        },
      ],
    },
    metadata: [{name: 'keywords', content: 'automation, ai, learning, tutorials, n8n'}],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/vavecafe/vavecafe/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/vavecafe/vavecafe/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],
};

export default config;