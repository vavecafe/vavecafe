import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  learnSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/automation-basics',
        'getting-started/ai-for-kids',
        'getting-started/tools-overview',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'For Beginners',
          items: [
            'tutorials/beginners/first-automation',
            'tutorials/beginners/basic-workflows',
            'tutorials/beginners/simple-integrations',
          ],
        },
        {
          type: 'category',
          label: 'For Kids',
          items: [
            'tutorials/kids/fun-automations',
            'tutorials/kids/homework-helper',
            'tutorials/kids/game-automation',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Industry Solutions',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Real Estate',
          items: [
            'industries/real-estate/lead-management',
            'industries/real-estate/property-listing',
          ],
        },
      ],
    },
  ],
};

export default sidebars;