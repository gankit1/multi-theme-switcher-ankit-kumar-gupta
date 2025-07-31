import React, { ReactNode } from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showSidebar = false }) => {
  const { currentTheme } = useTheme();

  return (
    <div className={`${styles.layout} ${styles[currentTheme]}`}>
      <main className={styles.mainContent}>
        {currentTheme === 'theme2' && showSidebar && (
          <aside className={`${styles.sidebar} slide-in`}>
            <h3>Navigation</h3>
            <ul className={styles.sidebarList}>
              <li>Dashboard</li>
              <li>Products</li>
              <li>Analytics</li>
              <li>Reports</li>
              <li>Settings</li>
            </ul>
          </aside>
        )}
        <div className={`${styles.content} fade-in`}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
