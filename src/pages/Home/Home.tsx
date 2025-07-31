import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useApi } from '../../hooks/useApi';
import { Product } from '../../types';
import Layout from '../../components/Layout/Layout';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const { currentTheme } = useTheme();
  const { data: products, loading, error } = useApi<Product[]>('https://fakestoreapi.com/products?limit=8');

  return (
    <Layout showSidebar={currentTheme === 'theme2'}>
      <div className={`${styles.home} ${styles[currentTheme]}`}>
        <header className={styles.hero}>
          <h1 className={styles.title}>Welcome to ThemeSwitch</h1>
          <p className={styles.subtitle}>
            Experience our amazing multi-theme interface with dynamic layouts, 
            beautiful typography, and seamless transitions.
          </p>
          <button className={`${styles.ctaButton} ${styles[currentTheme]}`}>
            Get Started
          </button>
        </header>

        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>Features</h2>
          <div className={`${styles.featureGrid} ${currentTheme === 'theme3' ? 'content-grid' : ''}`}>
            <div className={`${styles.featureCard} ${styles[currentTheme]}`}>
              <h3>🎨 Multiple Themes</h3>
              <p>Switch between three distinct themes with different layouts and styling approaches.</p>
            </div>
            <div className={`${styles.featureCard} ${styles[currentTheme]}`}>
              <h3>📱 Responsive Design</h3>
              <p>Perfect experience across all devices with mobile-first responsive design.</p>
            </div>
            <div className={`${styles.featureCard} ${styles[currentTheme]}`}>
              <h3>⚡ Performance</h3>
              <p>Built with modern React, TypeScript, and optimized for speed and accessibility.</p>
            </div>
          </div>
        </section>

        <section className={styles.products}>
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          {loading && <div className={styles.loading}>Loading products...</div>}
          {error && <div className={styles.error}>Error: {error}</div>}
          {products && (
            <div className={`${styles.productGrid} ${currentTheme === 'theme3' ? 'content-grid' : ''}`}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Home;
