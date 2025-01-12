import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { motion } from 'framer-motion';
import { Bot, Brain, Rocket, Users, Code, Lightbulb, ArrowRight } from 'lucide-react';
import { FadeIn, SlideIn, ScaleIn } from '../components/animations/AnimatedSection';

import styles from './index.module.css';

function HomepageHeader() {
  const learningPaths = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Beginners Welcome",
      description: "Start your automation with simple, fun projects",
      link: "/docs/getting-started/introduction",
      color: "var(--ifm-color-primary-lightest)",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Kids Corner",
      description: "Fun automation projects for young innovators",
      link: "/docs/learn-paths/kids/fun-automations",
      color: "var(--ifm-color-secondary-lightest)",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Industry Solutions",
      description: "Try out real-world automation for your business",
      link: "/docs/industries/real-estate/lead-management",
      color: "var(--ifm-color-success-lightest)",
    }
  ];

  const features = [
    {
      icon: <Code />,
      title: "Learn by Doing",
      description: "Build real automations from day one"
    },
    {
      icon: <Users />,
      title: "Community Support",
      description: "Learn together, grow together"
    },
    {
      icon: <Brain />,
      title: "AI Integration",
      description: "Combine automation with AI power"
    }
  ];

  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <FadeIn>
          <Heading as="h1" className={styles.title}>
            Learn Automation by{' '}
            <motion.span
              className={styles.highlight}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Doing
            </motion.span>
          </Heading>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className={styles.subtitle}>
            From kids to professionals, start building real automations today.
            No complex theory - just hands-on learning that works.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className={styles.buttons}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className={clsx('button button--lg', styles.primaryButton)}
                to="/docs/getting-started/introduction">
                Start Building
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className={clsx('button button--lg button--outline', styles.secondaryButton)}
                to="/docs/tutorial-basics/create-a-page">
                Watch Demo
              </Link>
            </motion.div>
          </div>
        </FadeIn>

        {/* Learning Paths */}
        <div className={styles.pathsGrid}>
          {learningPaths.map((path, index) => (
            <SlideIn key={index} delay={0.2 * (index + 1)} direction="up">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={path.link}
                  className={styles.pathCard}
                  style={{ backgroundColor: path.color }}>
                  <motion.div 
                    className={styles.pathIcon}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {path.icon}
                  </motion.div>
                  <h3 className={styles.pathTitle}>{path.title}</h3>
                  <p className={styles.pathDescription}>{path.description}</p>
                  <motion.div 
                    className={styles.pathAction}
                    whileHover={{ x: 5 }}
                  >
                    Learn More <ArrowRight className={styles.arrow} />
                  </motion.div>
                </Link>
              </motion.div>
            </SlideIn>
          ))}
        </div>

        {/* Features */}
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <ScaleIn key={index} delay={0.2 * (index + 1)}>
              <motion.div 
                className={styles.featureCard}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className={styles.featureIcon}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            </ScaleIn>
          ))}
        </div>

        {/* Community Section */}
        <FadeIn delay={0.6}>
          <motion.div 
            className={styles.communitySection}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className={styles.communityTitle}>Join Our Community</h2>
            <p className={styles.communityDescription}>
              Connect with learners, share your projects, and grow together
            </p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                className={clsx('button button--lg', styles.communityButton)}
                to="https://discord.gg/vavecafe">
                Join Discord
              </Link>
            </motion.div>
          </motion.div>
        </FadeIn>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Learn automation and AI by doing - From beginners to professionals">
      <HomepageHeader />
    </Layout>
  );
}