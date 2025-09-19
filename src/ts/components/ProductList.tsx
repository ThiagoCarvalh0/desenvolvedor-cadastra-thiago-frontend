import React from 'react';
import { Product } from '../Product';
import { ProductCard } from './ProductCard';
import styles from './ProductList.module.scss';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
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
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            isFirst={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
