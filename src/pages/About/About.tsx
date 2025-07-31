import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Layout from '../../components/Layout/Layout';
import styles from './About.module.css';

const About: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <Layout showSidebar={currentTheme === 'theme2'}>
      <div className={`${styles.about} ${styles[currentTheme]}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>About ThemeSwitch</h1>
          <p className={styles.subtitle}>
            Built with modern React, TypeScript, and innovative design principles
          </p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Our Mission</h2>
            <p>
              ThemeSwitch demonstrates the power of dynamic theming in modern web applications. 
              Our goal is to showcase how different design systems can coexist within a single 
              application, providing users with personalized experiences that match their preferences.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Technology Stack</h2>
            <div className={`${styles.techGrid} ${currentTheme === 'theme3' ? 'content-grid' : ''}`}>
              <div className={`${styles.techCard} ${styles[currentTheme]}`}>
                <h3>⚛️ React 18</h3>
                <p>Modern React with hooks, context, and functional components</p>
              </div>
              <div className={`${styles.techCard} ${styles[currentTheme]}`}>
                <h3>📘 TypeScript</h3>
                <p>Type-safe development with full IntelliSense support</p>
              </div>
              <div className={`${styles.techCard} ${styles[currentTheme]}`}>
                <h3>🎨 CSS Modules</h3>
                <p>Scoped styling with CSS custom properties for theming</p>
              </div>
              <div className={`${styles.techCard} ${styles[currentTheme]}`}>
                <h3>🛡️ Security</h3>
                <p>Input sanitization and XSS protection built-in</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Design Philosophy</h2>
            <ul className={styles.philosophyList}>
              <li><strong>User-Centric:</strong> Every theme is designed with user experience in mind</li>
              <li><strong>Accessible:</strong> WCAG compliant with proper contrast ratios and keyboard navigation</li>
              <li><strong>Performance:</strong> Optimized loading and smooth transitions</li>
              <li><strong>Responsive:</strong> Mobile-first approach ensuring great experience on all devices</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
