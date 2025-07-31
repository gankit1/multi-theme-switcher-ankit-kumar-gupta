import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeType } from '../../types';
import styles from './ThemeSelector.module.css';

const ThemeSelector: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value as ThemeType;
    setTheme(selectedTheme);
  };

  return (
    <div className={styles.themeSelector}>
      <select 
        value={currentTheme} 
        onChange={handleThemeChange}
        className={`${styles.select} ${styles[currentTheme]}`}
        aria-label="Select theme"
      >
        <option value="theme1">Theme 1 - Minimalist</option>
        <option value="theme2">Theme 2 - Dark Sidebar</option>
        <option value="theme3">Theme 3 - Colorful Grid</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
