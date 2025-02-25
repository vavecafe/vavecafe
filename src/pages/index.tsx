import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { useEffect, useState, useRef } from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [showCursor, setShowCursor] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const phrases = [
    "what if automation made us more human?",
    "what if it gave us time to be",
    "who we are meant to be"
  ];
  const timerRef = useRef(null);

  useEffect(() => {
    // Typing effect
    if (currentCharIndex < phrases[currentTextIndex].length) {
      timerRef.current = setTimeout(() => {
        setDisplayText(prev => prev + phrases[currentTextIndex][currentCharIndex]);
        setCurrentCharIndex(prev => prev + 1);
      }, 100);
    } else {
      // Move to next phrase after a delay
      if (currentTextIndex < phrases.length - 1) {
        timerRef.current = setTimeout(() => {
          setDisplayText('');
          setCurrentCharIndex(0);
          setCurrentTextIndex(prev => prev + 1);
        }, 2000);
      }
    }

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(timerRef.current);
      clearInterval(cursorInterval);
    };
  }, [currentTextIndex, currentCharIndex]);

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroOverlay}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.taglineContainer}>
            <p className={styles.tagline}>{displayText}
              <span className={clsx(styles.cursor, showCursor && styles.visible)}>|</span>
            </p>
          </div>
          
          <div className={styles.breatheButton}>
            <Link to="#welcome" className={styles.breatheLink}>
              [breathe]
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function WelcomeSection() {
  return (
    <section id="welcome" className={styles.welcomeSection}>
      <div className="container">
        <div className={styles.welcomeContent}>
          <Heading as="h2" className={styles.welcomeHeading}>
            welcome to the future of <span className={styles.strikethrough}>work</span> living life
          </Heading>
          <p className={styles.welcomeSubheading}>Ready to reclaim your time?</p>
          
          <div className={styles.subscribeForm}>
            <input 
              type="email" 
              placeholder="Your email" 
              className={styles.emailInput} 
            />
            <textarea 
              placeholder="Optional message" 
              className={styles.messageInput} 
            />
            <button className={styles.submitButton}>
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const team = [
    {
      name: "Alex Rivera",
      role: "Automation Architect",
      image: "/img/placeholder/team-1.jpg"
    },
    {
      name: "Jamie Chen",
      role: "AI Specialist",
      image: "/img/placeholder/team-2.jpg"
    },
    {
      name: "Sam Nouri",
      role: "Experience Designer",
      image: "/img/placeholder/team-3.jpg"
    }
  ];

  return (
    <section className={styles.teamSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Humans behind automation</Heading>
        </div>
        <div className={styles.teamContainer}>
          {team.map((member, idx) => (
            <div key={idx} className={styles.teamMember}>
              <div className={styles.teamImageContainer}>
                <img src={member.image} alt={member.name} className={styles.teamImage} />
              </div>
              <Heading as="h3" className={styles.teamName}>{member.name}</Heading>
              <p className={styles.teamRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Reach out</Heading>
        </div>
        <div className={styles.contactOptions}>
          <div className={styles.contactCard}>
            <Heading as="h3">Quick Question</Heading>
            <form className={styles.contactForm}>
              <input type="text" placeholder="Name" className={styles.formInput} />
              <input type="email" placeholder="Email" className={styles.formInput} />
              <textarea placeholder="Your question" className={styles.formTextarea} />
              <button type="submit" className={styles.formButton}>Send</button>
            </form>
          </div>
          
          <div className={styles.contactCard}>
            <Heading as="h3">Project Discussion</Heading>
            <form className={styles.contactForm}>
              <input type="text" placeholder="Name" className={styles.formInput} />
              <input type="email" placeholder="Email" className={styles.formInput} />
              <select className={styles.formSelect}>
                <option value="">What can we help with?</option>
                <option value="workflow">Automate Workflows</option>
                <option value="migration">Migrate from Make/Zapier</option>
                <option value="ai">AI Agent Development</option>
                <option value="custom">Custom Solution</option>
              </select>
              <textarea placeholder="Tell us about your project" className={styles.formTextarea} />
              <button type="submit" className={styles.formButton}>Let's Discuss</button>
            </form>
          </div>
          
          <div className={styles.contactCard}>
            <Heading as="h3">Book a Call</Heading>
            <p className={styles.calendarInfo}>
              Select a time that works for you and we'll have a no-pressure chat about your automation needs.
            </p>
            <button className={styles.calendarButton}>View Calendar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  const posts = [
    {
      title: "Finding humanity in automation",
      excerpt: "How to ensure your digital systems enhance rather than replace human connection.",
      image: "/img/placeholder/blog-1.jpg"
    },
    {
      title: "Why less is more in workflows",
      excerpt: "Simplicity is the ultimate sophistication in automated systems. Here's why.",
      image: "/img/placeholder/blog-2.jpg"
    },
    {
      title: "Building AI agents that care",
      excerpt: "Designing AI tools with empathy and human-centered principles at their core.",
      image: "/img/placeholder/blog-3.jpg"
    }
  ];

  return (
    <section className={styles.blogSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Thoughts on automation</Heading>
        </div>
        <div className={styles.blogContainer}>
          {posts.map((post, idx) => (
            <div key={idx} className={styles.blogCard}>
              <div className={styles.blogImageContainer}>
                <img src={post.image} alt={post.title} className={styles.blogImage} />
              </div>
              <div className={styles.blogContent}>
                <Heading as="h3" className={styles.blogTitle}>{post.title}</Heading>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <Link to="#" className={styles.blogLink}>Read more →</Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.blogMore}>
          <Link to="/blog" className={styles.moreLink}>Browse all insights →</Link>
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className={styles.newsletterSection}>
      <div className="container">
        <div className={styles.newsletterContainer}>
          <div className={styles.newsletterContent}>
            <Heading as="h2" className={styles.newsletterHeading}>Stay connected</Heading>
            <p className={styles.newsletterSubheading}>Get weekly automation insights delivered to your inbox</p>
          </div>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="Your email" className={styles.newsletterInput} />
            <button className={styles.newsletterButton}>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <h2>Vave Cafe</h2>
            <p>Natural, minimal, human-centered automation</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h3>Services</h3>
              <ul>
                <li><Link to="#services">Workflow Automation</Link></li>
                <li><Link to="#services">Platform Migration</Link></li>
                <li><Link to="#services">AI Agents</Link></li>
                <li><Link to="#services">Custom Solutions</Link></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h3>Resources</h3>
              <ul>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/guides">Guides</Link></li>
                <li><Link to="/templates">Templates</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h3>Company</h3>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/privacy">Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Vave Cafe. All rights reserved.</p>
          <div className={styles.footerSocial}>
            <Link to="#" className={styles.socialIcon}>Twitter</Link>
            <Link to="#" className={styles.socialIcon}>LinkedIn</Link>
            <Link to="#" className={styles.socialIcon}>GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`${siteConfig.title} - Human-centered automation`}
      description="Vave Cafe helps small businesses and solopreneurs automate workflows, build AI agents, and transform digital processes with simple, human-centered solutions.">
      <HomepageHeader />
      <WelcomeSection />
      <main>
        <HomepageFeatures />
        <TeamSection />
        <BlogSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
    </Layout>
  );
}