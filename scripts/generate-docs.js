// scripts/generate-docs.js

const fs = require('fs').promises;
const path = require('path');

const docsStructure = {
  'getting-started': {
    files: [
      {
        name: 'introduction',
        title: 'Introduction to Automation',
        description: 'Start your journey into automation and AI',
        position: 1,
      },
      {
        name: 'automation-basics',
        title: 'Automation Basics',
        description: 'Learn the fundamentals of automation',
        position: 2,
      },
      {
        name: 'ai-for-kids',
        title: 'AI for Kids',
        description: 'Learn about AI in a fun and easy way',
        position: 3,
      },
      {
        name: 'tools-overview',
        title: 'Tools Overview',
        description: 'Introduction to automation tools',
        position: 4,
      },
    ],
  },
  'tutorials': {
    subdirs: {
      'beginners': {
        files: [
          {
            name: 'first-automation',
            title: 'Your First Automation',
            description: 'Create your very first automation workflow',
            position: 1,
          },
          {
            name: 'basic-workflows',
            title: 'Basic Workflows',
            description: 'Learn to create simple automation workflows',
            position: 2,
          },
          {
            name: 'simple-integrations',
            title: 'Simple Integrations',
            description: 'Connect different tools together',
            position: 3,
          },
        ],
      },
      'kids': {
        files: [
          {
            name: 'fun-automations',
            title: 'Fun Automations',
            description: 'Exciting automation projects for kids',
            position: 1,
          },
          {
            name: 'homework-helper',
            title: 'Homework Helper',
            description: 'Automate your homework tasks',
            position: 2,
          },
          {
            name: 'game-automation',
            title: 'Game Automation',
            description: 'Learn automation through games',
            position: 3,
          },
        ],
      },
    },
  },
  'industries': {
    subdirs: {
      'real-estate': {
        files: [
          {
            name: 'lead-management',
            title: 'Lead Management',
            description: 'Automate real estate lead handling',
            position: 1,
          },
          {
            name: 'property-listing',
            title: 'Property Listing Automation',
            description: 'Automate property listing processes',
            position: 2,
          },
        ],
      },
    },
  },
};

const generateFrontMatter = (title, description, position) => {
  return `---
sidebar_position: ${position}
title: ${title}
description: ${description}
---

# ${title}

${description}

## What You'll Learn

- Coming soon...

## Prerequisites

- Basic understanding of automation concepts
- Familiarity with web applications

## Getting Started

Content coming soon...
`;
};

async function createDirectory(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  } catch (error) {
    if (error.code !== 'EEXIST') {
      console.error(`Error creating directory ${dir}:`, error);
      throw error;
    }
  }
}

async function createFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content);
    console.log(`Created file: ${filePath}`);
  } catch (error) {
    console.error(`Error creating file ${filePath}:`, error);
    throw error;
  }
}

async function generateDocs(structure, basePath = 'docs') {
  for (const [dirName, content] of Object.entries(structure)) {
    const currentPath = path.join(basePath, dirName);
    await createDirectory(currentPath);

    // Generate files in current directory
    if (content.files) {
      for (const file of content.files) {
        const filePath = path.join(currentPath, `${file.name}.md`);
        const fileContent = generateFrontMatter(
          file.title,
          file.description,
          file.position
        );
        await createFile(filePath, fileContent);
      }
    }

    // Process subdirectories
    if (content.subdirs) {
      await generateDocs(content.subdirs, currentPath);
    }
  }
}

// Run the generator
generateDocs(docsStructure)
  .then(() => console.log('Documentation generated successfully!'))
  .catch((error) => console.error('Error generating documentation:', error));