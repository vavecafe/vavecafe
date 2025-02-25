import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useState } from 'react';
import Icon from '@site/src/components/Icon';

type ServiceItem = {
  title: string;
  description: ReactNode;
  icon: string; // Using simple icon names from Lucide React
};

// Primary services based on the provided document
const ServicesList: ServiceItem[] = [
  {
    title: 'Automate Manual Workflows',
    icon: 'settings',
    description: (
      <>
        Transform repetitive tasks into automated systems that work for you. 
        Reclaim hours of your time and focus on what truly matters.
      </>
    ),
  },
  {
    title: 'Convert Make/Zapier to n8n',
    icon: 'refresh-cw',
    description: (
      <>
        Migrate your existing automations to more flexible, cost-effective solutions 
        without losing functionality or disrupting your business.
      </>
    ),
  },
  {
    title: 'Develop Personal AI Agents',
    icon: 'cpu',
    description: (
      <>
        Create custom AI assistants that understand your business needs 
        and help you work smarter, not harder.
      </>
    ),
  },
  {
    title: 'Build Something Unique',
    icon: 'sparkles',
    description: (
      <>
        Have an idea that doesn't fit the mold? Let's collaborate to craft 
        a custom solution that perfectly addresses your specific needs.
      </>
    ),
  },
];

// Process steps based on the document
const ProcessSteps = [
  {
    title: 'Understand',
    description: 'We take time to truly understand your workflow challenges and goals.',
    icon: 'search',
  },
  {
    title: 'Simplify',
    description: 'We streamline processes before automating to ensure maximum efficiency.',
    icon: 'scissors',
  },
  {
    title: 'Automate',
    description: 'We build reliable, human-centered automation that works for you.',
    icon: 'zap',
  },
  {
    title: 'Evolve',
    description: 'We help your systems grow and adapt as your business needs change.',
    icon: 'trending-up',
  }
];

// Impact stories from the document
const ImpactStories = [
  {
    quote: "We saved 40 hours every week",
    author: "Sarah, Digital Agency",
    metric: "40+ hours saved weekly"
  },
  {
    quote: "Now I focus on what matters",
    author: "Tom, Solo Founder",
    metric: "3x productivity increase"
  },
  {
    quote: "Our team finally works on creative tasks",
    author: "Jamie, Marketing Manager",
    metric: "90% reduction in manual data entry"
  }
];

// FAQ items
const FAQItems = [
  {
    question: "How long does automation take?",
    answer: "Most projects take 2-4 weeks from start to finish. Simple workflows can be automated in days, while more complex systems might take longer. We always provide clear timelines before starting."
  },
  {
    question: "What can and can't be automated?",
    answer: "Most repetitive, rule-based tasks can be automated. This includes data entry, document creation, email responses, and much more. Creative work, strategic decisions, and relationship building are best left to humans—our goal is to give you more time for these important activities."
  },
  {
    question: "How do we start?",
    answer: "We begin with a free consultation to understand your needs. From there, we'll outline a clear plan including timelines and costs. Once approved, we work iteratively, keeping you involved throughout the process."
  },
  {
    question: "What about AI safety?",
    answer: "We prioritize responsible AI use. All automations include appropriate human oversight, data protection measures, and transparent operation. We create systems that augment human abilities rather than replace human judgment."
  }
];

function Service({title, icon, description}: ServiceItem) {
  return (
    <div className={clsx('col col--3', styles.serviceItem)}>
      <div className={styles.serviceCard}>
        <div className={styles.serviceIcon}>
          <span className={`lucide-icon lucide-${icon}`}></span>
        </div>
        <div className={styles.serviceContent}>
          <Heading as="h3" className={styles.serviceTitle}>{title}</Heading>
          <p className={styles.serviceDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

function ProcessStep({title, description, icon, index}) {
  return (
    <div className={styles.processStep}>
      <div className={styles.processIcon}>
        <Icon name={icon} size={28} />
        <span className={styles.processNumber}>{index + 1}</span>
      </div>
      <Heading as="h3" className={styles.processTitle}>{title}</Heading>
      <p className={styles.processDescription}>{description}</p>
    </div>
  );
}

function ImpactStory({quote, author, metric}) {
  return (
    <div className={styles.impactStory}>
      <p className={styles.impactQuote}>"{quote}"</p>
      <p className={styles.impactAuthor}>- {author}</p>
      <div className={styles.impactMetric}>
        <span className={styles.metricValue}>{metric}</span>
      </div>
    </div>
  );
}

function FAQ({question, answer, isOpen, onClick}) {
  return (
    <div className={clsx(styles.faqItem, isOpen && styles.open)} onClick={onClick}>
      <div className={styles.faqQuestion}>
        <Heading as="h3">{question}</Heading>
        <span className={styles.faqIcon}>{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <p className={styles.faqAnswer}>{answer}</p>}
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      {/* Services Section */}
      <section className={styles.section} id="services">
        <div className="container">
          <div className={styles.sectionHeader}>
            <Heading as="h2">We could help you with...</Heading>
          </div>
          <div className="row">
            {ServicesList.map((props, idx) => (
              <Service key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={clsx(styles.section, styles.processSection)} id="process">
        <div className="container">
          <div className={styles.sectionHeader}>
            <Heading as="h2">How we work</Heading>
          </div>
          <div className={styles.processContainer}>
            {ProcessSteps.map((step, idx) => (
              <ProcessStep key={idx} index={idx} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className={styles.section} id="impact">
        <div className="container">
          <div className={styles.sectionHeader}>
            <Heading as="h2">Impact stories</Heading>
          </div>
          <div className={styles.impactContainer}>
            {ImpactStories.map((story, idx) => (
              <ImpactStory key={idx} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.section} id="faq">
        <div className="container">
          <div className={styles.sectionHeader}>
            <Heading as="h2">Common questions</Heading>
          </div>
          <div className={styles.faqContainer}>
            {FAQItems.map((item, idx) => (
              <FAQ 
                key={idx} 
                {...item} 
                isOpen={openFAQ === idx}
                onClick={() => toggleFAQ(idx)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}