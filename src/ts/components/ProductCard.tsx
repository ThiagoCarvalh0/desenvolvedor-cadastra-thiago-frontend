import React from 'react';
import { Product, ProductCardProps, CONSTANTS } from '../types';
import styles from './ProductCard.module.scss';

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  // Constants
  const IMAGE_DIMENSIONS = CONSTANTS.IMAGE_DIMENSIONS;
  
  // Utility functions
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formatParcelamento = (parcelamento: number[]): string => {
    const [parcelas, valorParcela] = parcelamento;
    return `${parcelas}x de ${formatPrice(valorParcela)}`;
  };

  const generateImageAlt = (): string => {
    return `${product.name} - ${product.color} - R$ ${product.price.toFixed(2).replace('.', ',')}`;
  };

  // Event handlers
  const handleAddToCart = (): void => {
    onAddToCart(product);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img 
          src={product.image} 
          alt={generateImageAlt()}
          className={styles.productImage}
          loading="lazy"
          width={IMAGE_DIMENSIONS.width}
          height={IMAGE_DIMENSIONS.height}
          decoding="async"
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
