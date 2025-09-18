import React from 'react';
import { Product } from '../Product';
import { ProductCard } from './ProductCard';
import styles from './ProductList.module.scss';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  if (products.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3>Nenhum produto encontrado</h3>
        <p>Tente ajustar os filtros para encontrar mais produtos.</p>
      </div>
    );
  }

  return (
    <div className={styles.productList}>
      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};
