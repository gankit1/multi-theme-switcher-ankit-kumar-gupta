import React from 'react';
import { Product } from '../../types';
import { useTheme } from '../../context/ThemeContext';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { currentTheme } = useTheme();

  return (
    <div className={`${styles.card} ${styles[currentTheme]} fade-in`}>
      <div className={styles.imageContainer}>
        <img 
          src={product.image} 
          alt={product.title}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>
          {product.description.substring(0, 100)}...
        </p>
        <div className={styles.footer}>
          <span className={styles.price}>${product.price}</span>
          <div className={styles.rating}>
            ⭐ {product.rating.rate} ({product.rating.count})
          </div>
        </div>
        <button className={`${styles.button} ${styles[currentTheme]}`}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
