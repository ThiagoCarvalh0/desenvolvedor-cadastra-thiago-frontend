import React, { useState } from 'react';
import { Product } from '../Product';
import styles from './Cart.module.scss';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
  onRemoveItem: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

export const Cart: React.FC<CartProps> = ({ 
  cart, 
  onRemoveItem, 
  onUpdateQuantity 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      onRemoveItem(productId);
    } else {
      onUpdateQuantity(productId, newQuantity);
    }
  };

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.cart}>
      <button 
        className={styles.cartButton}
        onClick={toggleCart}
        aria-label="Abrir carrinho de compras"
      >
        <svg 
          className={styles.cartIcon}
          width="17" 
          height="20" 
          viewBox="0 0 17 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M1 1H3.5L5.5 13H14L16 5H5M5.5 13L4 1H1M5.5 13H14M14 13C13.4477 13 13 13.4477 13 14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13ZM8 14C8 13.4477 8.44772 13 9 13C9.55228 13 10 13.4477 10 14C10 14.5523 9.55228 15 9 15C8.44772 15 8 14.5523 8 14Z" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        {getTotalItems() > 0 && (
          <span className={styles.cartCount}>{getTotalItems()}</span>
        )}
      </button>

      {isOpen && (
        <div className={styles.cartDropdown}>
          <div className={styles.cartHeader}>
            <h3>Carrinho</h3>
            <button 
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
              aria-label="Fechar carrinho"
            >
              ×
            </button>
          </div>

          {cart.length === 0 ? (
            <div className={styles.emptyCart}>
              <p>Seu carrinho está vazio</p>
            </div>
          ) : (
            <>
              <div className={styles.cartItems}>
                {cart.map(item => (
                  <div key={item.product.id} className={styles.cartItem}>
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className={styles.itemImage}
                    />
                    
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>{item.product.name}</h4>
                      <p className={styles.itemPrice}>{formatPrice(item.product.price)}</p>
                      
                      <div className={styles.quantityControls}>
                        <button 
                          className={styles.quantityBtn}
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          aria-label="Diminuir quantidade"
                        >
                          -
                        </button>
                        <span className={styles.quantity}>{item.quantity}</span>
                        <button 
                          className={styles.quantityBtn}
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          aria-label="Aumentar quantidade"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button 
                      className={styles.removeBtn}
                      onClick={() => onRemoveItem(item.product.id)}
                      aria-label="Remover item do carrinho"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className={styles.cartFooter}>
                <div className={styles.total}>
                  <span className={styles.totalLabel}>Total:</span>
                  <span className={styles.totalPrice}>{formatPrice(getTotalPrice())}</span>
                </div>
                <button className={styles.checkoutBtn}>
                  Finalizar Compra
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
