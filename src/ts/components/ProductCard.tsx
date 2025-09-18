import React from 'react';
import { Product } from '../Product';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formatParcelamento = (parcelamento: number[]) => {
    const [parcelas, valorParcela] = parcelamento;
    return `${parcelas}x de ${formatPrice(valorParcela)}`;
  };

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img 
          src={product.image} 
          alt={product.name}
          className={styles.productImage}
          loading="lazy"
        />
      </div>
      
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        
        <div className={styles.priceContainer}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          <span className={styles.parcelamento}>
            {formatParcelamento(product.parcelamento)}
          </span>
        </div>

        <button 
          className={styles.addToCartBtn}
          onClick={handleAddToCart}
          aria-label={`Adicionar ${product.name} ao carrinho`}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};
