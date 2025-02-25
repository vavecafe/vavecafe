import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './guides.module.css';

export default function Guides() {
  const guideCategories = [
    {
      title: 'Automation Fundamentals',
      description: 'Learn the core concepts of workflow automation',
      guides: [
        { title: 'Introduction to Automation', link: '/docs/automation/intro' },
        { title: 'Identifying Automation Opportunities', link: '/docs/automation/opportunities' },
        { title: 'Measuring Automation Success', link: '/docs/automation/metrics' },
      ]
    },
    {
      title: 'Workflow Design Principles',
      description: 'Design efficient, maintainable workflows',
      guides: [
        { title: 'Workflow Mapping Basics', link: '/docs/workflows/mapping' },
        { title: 'Simplification Before Automation', link: '/docs/workflows/simplification' },
        { title: 'Error Handling and Recovery', link: '/docs/workflows/errors' },
      ]
    },
    {
      title: 'AI Agent Creation',
      description: 'Build and deploy custom AI assistants',
      guides: [
        { title: 'AI Agent Fundamentals', link: '/docs/category/intro' },
        { title: 'Designing Effective Prompts', link: '/docs/category/intro' },
        { title: 'Connecting Agents to Your Systems', link: '/docs/category/tutorial---basics' },
      ]
    },
    {
      title: 'Integration Patterns',
      description: 'Connect your tools and systems seamlessly',
      guides: [
        { title: 'API Integration Basics', link: '/docs/integration/api-basics' },
        { title: 'Webhook Patterns and Best Practices', link: '/docs/integration/webhooks' },
        { title: 'Securing Your Integrations', link: '/docs/integration/security' },
      ]
    }
  ];

  return (
    <Layout title="Learning Hub | Vave Cafe" description="Guides and resources to help you master automation">
      <header className={styles.guidesHeader}>
        <div className="container">
          <Heading as="h1">Grow with us</Heading>
          <p className={styles.guidesSubtitle}>Practical guides to help you automate with confidence</p>
        </div>
      </header>

      <main className="container margin-vert--lg">
        <div className={styles.guidesGrid}>
          {guideCategories.map((category, idx) => (
            <div key={idx} className={styles.guideCategory}>
              <Heading as="h2" className={styles.categoryTitle}>
                {category.title}
              </Heading>
              <p className={styles.categoryDescription}>{category.description}</p>
              
              <ul className={styles.guidesList}>
                {category.guides.map((guide, guideIdx) => (
                  <li key={guideIdx} className={styles.guideItem}>
                    <Link to={guide.link} className={styles.guideLink}>
                      {guide.title}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <Link to={`/docs/category/${category.title.toLowerCase().replace(/\s+/g, '-')}`} className={styles.viewAllLink}>
                View all {category.title.toLowerCase()} guides →
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.resourcesSection}>
          <Heading as="h2">Templates & Resources</Heading>
          <p className={styles.resourcesDescription}>
            Jumpstart your automation journey with these ready-to-use templates and resources.
          </p>

          <div className={styles.resourcesGrid}>
            <div className={styles.resourceCard}>
              <div className={styles.resourceIcon}>
                <span>📋</span>
              </div>
              <Heading as="h3">Workflow Templates</Heading>
              <p>Pre-built automations for common business processes</p>
              <Link to="/resources/templates" className={styles.resourceLink}>
                Browse templates →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <div className={styles.resourceIcon}>
                <span>✅</span>
              </div>
              <Heading as="h3">Automation Checklists</Heading>
              <p>Ensure your automations are reliable and robust</p>
              <Link to="/resources/checklists" className={styles.resourceLink}>
                Get checklists →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <div className={styles.resourceIcon}>
                <span>🧠</span>
              </div>
              <Heading as="h3">Decision Frameworks</Heading>
              <p>Structured approaches to automation decisions</p>
              <Link to="/resources/frameworks" className={styles.resourceLink}>
                Explore frameworks →
              </Link>
            </div>

            <div className={styles.resourceCard}>
              <div className={styles.resourceIcon}>
                <span>📊</span>
              </div>
              <Heading as="h3">Case Studies</Heading>
              <p>Real-world automation success stories</p>
              <Link to="/resources/case-studies" className={styles.resourceLink}>
                Read case studies →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}