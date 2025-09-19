import React, { useState } from 'react';
import { Product } from '../Product';
import styles from './FilterBar.module.scss';

interface FilterBarProps {
  filters: {
    color: string;
    size: string;
    minPrice: number;
    maxPrice: number;
  };
  onFilterChange: (filters: Partial<FilterBarProps['filters']>) => void;
  products: Product[];
  isMobile?: boolean;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  filters, 
  onFilterChange, 
  products,
  isMobile = false
}) => {
  // Extrair cores e tamanhos únicos dos produtos
  const uniqueColors = Array.from(new Set(products.map(p => p.color))).sort();
  const uniqueSizes = Array.from(new Set(products.flatMap(p => p.size))).sort();
  const maxPrice = Math.max(...products.map(p => p.price));

  // Estados para collapsibles mobile
  const [isColorsOpen, setIsColorsOpen] = useState(false);
  const [isSizesOpen, setIsSizesOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  // Componente Collapsible
  const Collapsible: React.FC<{ 
    title: string; 
    isOpen: boolean; 
    onToggle: () => void; 
    children: React.ReactNode 
  }> = ({ title, isOpen, onToggle, children }) => (
    <div className={styles.collapsible}>
      <button className={styles.collapsibleHeader} onClick={onToggle}>
        <span>{title}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className={styles.collapsibleContent}>
          {children}
        </div>
      )}
    </div>
  );

  const handleColorChange = (color: string) => {
    onFilterChange({ color: color === 'all' ? '' : color.trim() });
  };

  const handleSizeChange = (size: string) => {
    onFilterChange({ size: size === 'all' ? '' : size.trim() });
  };

  if (isMobile) {
    return (
      <div className={styles.mobileFilterBar}>
        <Collapsible 
          title="Cores" 
          isOpen={isColorsOpen} 
          onToggle={() => setIsColorsOpen(!isColorsOpen)}
        >
          <div className={styles.colorOptions}>
            <label className={styles.colorOption}>
              <input
                type="checkbox"
                checked={filters.color === 'Amarelo'}
                onChange={() => handleColorChange(filters.color === 'Amarelo' ? '' : 'Amarelo')}
              />
              <span className={styles.colorName}>Amarelo</span>
            </label>
            <label className={styles.colorOption}>
              <input
                type="checkbox"
                checked={filters.color === 'Azul'}
                onChange={() => handleColorChange(filters.color === 'Azul' ? '' : 'Azul')}
              />
              <span className={styles.colorName}>Azul</span>
            </label>
            <label className={styles.colorOption}>
              <input
                type="checkbox"
                checked={filters.color === 'Branco'}
                onChange={() => handleColorChange(filters.color === 'Branco' ? '' : 'Branco')}
              />
              <span className={styles.colorName}>Branco</span>
            </label>
            <label className={styles.colorOption}>
              <input
                type="checkbox"
                checked={filters.color === 'Cinza'}
                onChange={() => handleColorChange(filters.color === 'Cinza' ? '' : 'Cinza')}
              />
              <span className={styles.colorName}>Cinza</span>
            </label>
            <label className={styles.colorOption}>
              <input
                type="checkbox"
                checked={filters.color === 'Laranja'}
                onChange={() => handleColorChange(filters.color === 'Laranja' ? '' : 'Laranja')}
              />
              <span className={styles.colorName}>Laranja</span>
            </label>
            <label className={styles.colorOption}>
              <input
                type="checkbox"
                checked={filters.color === 'Verde'}
                onChange={() => handleColorChange(filters.color === 'Verde' ? '' : 'Verde')}
              />
              <span className={styles.colorName}>Verde</span>
            </label>
            <label className={styles.colorOption}>
              <input
                type="checkbox"
                checked={filters.color === 'Vermelho'}
                onChange={() => handleColorChange(filters.color === 'Vermelho' ? '' : 'Vermelho')}
              />
              <span className={styles.colorName}>Vermelho</span>
            </label>
            <label className={styles.colorOption}>
              <input
                type="checkbox"
                checked={filters.color === 'Preto'}
                onChange={() => handleColorChange(filters.color === 'Preto' ? '' : 'Preto')}
              />
              <span className={styles.colorName}>Preto</span>
            </label>
            <label className={styles.colorOption}>
              <input
                type="checkbox"
                checked={filters.color === 'Rosa'}
                onChange={() => handleColorChange(filters.color === 'Rosa' ? '' : 'Rosa')}
              />
              <span className={styles.colorName}>Rosa</span>
            </label>
          </div>
        </Collapsible>

        <Collapsible 
          title="Tamanhos" 
          isOpen={isSizesOpen} 
          onToggle={() => setIsSizesOpen(!isSizesOpen)}
        >
          <div className={styles.sizeOptions}>
            <button
              className={`${styles.sizeBtn} ${filters.size === 'P' ? styles.active : ''}`}
              onClick={() => handleSizeChange(filters.size === 'P' ? '' : 'P')}
            >
              P
            </button>
            <button
              className={`${styles.sizeBtn} ${filters.size === 'M' ? styles.active : ''}`}
              onClick={() => handleSizeChange(filters.size === 'M' ? '' : 'M')}
            >
              M
            </button>
            <button
              className={`${styles.sizeBtn} ${filters.size === 'G' ? styles.active : ''}`}
              onClick={() => handleSizeChange(filters.size === 'G' ? '' : 'G')}
            >
              G
            </button>
            <button
              className={`${styles.sizeBtn} ${filters.size === 'GG' ? styles.active : ''}`}
              onClick={() => handleSizeChange(filters.size === 'GG' ? '' : 'GG')}
            >
              GG
            </button>
            <button
              className={`${styles.sizeBtn} ${filters.size === 'U' ? styles.active : ''}`}
              onClick={() => handleSizeChange(filters.size === 'U' ? '' : 'U')}
            >
              U
            </button>
            <button
              className={`${styles.sizeBtn} ${filters.size === '36' ? styles.active : ''}`}
              onClick={() => handleSizeChange(filters.size === '36' ? '' : '36')}
            >
              36
            </button>
            <button
              className={`${styles.sizeBtn} ${filters.size === '38' ? styles.active : ''}`}
              onClick={() => handleSizeChange(filters.size === '38' ? '' : '38')}
            >
              38
            </button>
            <button
              className={`${styles.sizeBtn} ${filters.size === '40' ? styles.active : ''}`}
              onClick={() => handleSizeChange(filters.size === '40' ? '' : '40')}
            >
              40
            </button>
          </div>
        </Collapsible>

        <Collapsible 
          title="Faixa de Preço" 
          isOpen={isPriceOpen} 
          onToggle={() => setIsPriceOpen(!isPriceOpen)}
        >
          <div className={styles.priceOptions}>
            <label className={styles.priceOption}>
              <input
                type="checkbox"
                checked={filters.minPrice === 0 && filters.maxPrice === 50}
                onChange={() => {
                  if (filters.minPrice === 0 && filters.maxPrice === 50) {
                    onFilterChange({ minPrice: 0, maxPrice: 1000 });
                  } else {
                    onFilterChange({ minPrice: 0, maxPrice: 50 });
                  }
                }}
              />
              <span>de R$0 até R$50</span>
            </label>
            <label className={styles.priceOption}>
              <input
                type="checkbox"
                checked={filters.minPrice === 51 && filters.maxPrice === 150}
                onChange={() => {
                  if (filters.minPrice === 51 && filters.maxPrice === 150) {
                    onFilterChange({ minPrice: 0, maxPrice: 1000 });
                  } else {
                    onFilterChange({ minPrice: 51, maxPrice: 150 });
                  }
                }}
              />
              <span>de R$51 até R$150</span>
            </label>
            <label className={styles.priceOption}>
              <input
                type="checkbox"
                checked={filters.minPrice === 151 && filters.maxPrice === 300}
                onChange={() => {
                  if (filters.minPrice === 151 && filters.maxPrice === 300) {
                    onFilterChange({ minPrice: 0, maxPrice: 1000 });
                  } else {
                    onFilterChange({ minPrice: 151, maxPrice: 300 });
                  }
                }}
              />
              <span>de R$151 até R$300</span>
            </label>
            <label className={styles.priceOption}>
              <input
                type="checkbox"
                checked={filters.minPrice === 301 && filters.maxPrice === 500}
                onChange={() => {
                  if (filters.minPrice === 301 && filters.maxPrice === 500) {
                    onFilterChange({ minPrice: 0, maxPrice: 1000 });
                  } else {
                    onFilterChange({ minPrice: 301, maxPrice: 500 });
                  }
                }}
              />
              <span>de R$301 até R$500</span>
            </label>
            <label className={styles.priceOption}>
              <input
                type="checkbox"
                checked={filters.minPrice === 500}
                onChange={() => {
                  if (filters.minPrice === 500) {
                    onFilterChange({ minPrice: 0, maxPrice: 1000 });
                  } else {
                    onFilterChange({ minPrice: 500, maxPrice: 1000 });
                  }
                }}
              />
              <span>a partir de R$ 500</span>
            </label>
          </div>
        </Collapsible>
      </div>
    );
  }

  return (
    <div className={styles.filterBar}>
      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <h3 className={styles.sectionTitle}>cores</h3>
          <div className={styles.colorOptions}>
            <label className={styles.colorOption}>
              <input
                type="checkbox"
                checked={filters.color === 'Amarelo'}
                onChange={() => handleColorChange(filters.color === 'Amarelo' ? '' : 'Amarelo')}
              />
              <span className={styles.colorName}>Amarelo</span>
            </label>
            <label className={styles.colorOption}>
              <input
                type="checkbox"
                checked={filters.color === 'Azul'}
                onChange={() => handleColorChange(filters.color === 'Azul' ? '' : 'Azul')}
              />
              <span className={styles.colorName}>Azul</span>
            </label>
            <label className={styles.colorOption}>
              <input
                type="checkbox"
                checked={filters.color === 'Branco'}
                onChange={() => handleColorChange(filters.color === 'Branco' ? '' : 'Branco')}
              />
              <span className={styles.colorName}>Branco</span>
            </label>
            <label className={styles.colorOption}>
              <input
                type="checkbox"
                checked={filters.color === 'Cinza'}
                onChange={() => handleColorChange(filters.color === 'Cinza' ? '' : 'Cinza')}
              />
              <span className={styles.colorName}>Cinza</span>
            </label>
            <label className={styles.colorOption}>
              <input
                type="checkbox"
                checked={filters.color === 'Laranja'}
                onChange={() => handleColorChange(filters.color === 'Laranja' ? '' : 'Laranja')}
              />
              <span className={styles.colorName}>Laranja</span>
            </label>
            <div className={styles.seeAll}>
              <span>Ver todas as cores</span>
              <span className={styles.arrow}>▼</span>
            </div>
          </div>
        </div>

        <div className={styles.filterGroup}>
          <h3 className={styles.sectionTitle}>Tamanhos</h3>
          <div className={styles.sizeOptions}>
            <button
              className={`${styles.sizeBtn} ${filters.size === 'P' ? styles.active : ''}`}
              onClick={() => handleSizeChange(filters.size === 'P' ? '' : 'P')}
            >
              P
            </button>
            <button
              className={`${styles.sizeBtn} ${filters.size === 'M' ? styles.active : ''}`}
              onClick={() => handleSizeChange(filters.size === 'M' ? '' : 'M')}
            >
              M
            </button>
            <button
              className={`${styles.sizeBtn} ${filters.size === 'G' ? styles.active : ''}`}
              onClick={() => handleSizeChange(filters.size === 'G' ? '' : 'G')}
            >
              G
            </button>
            <button
              className={`${styles.sizeBtn} ${filters.size === 'GG' ? styles.active : ''}`}
              onClick={() => handleSizeChange(filters.size === 'GG' ? '' : 'GG')}
            >
              GG
            </button>
            <button
              className={`${styles.sizeBtn} ${filters.size === 'U' ? styles.active : ''}`}
              onClick={() => handleSizeChange(filters.size === 'U' ? '' : 'U')}
            >
              U
            </button>
            <button
              className={`${styles.sizeBtn} ${filters.size === '36' ? styles.active : ''}`}
              onClick={() => handleSizeChange(filters.size === '36' ? '' : '36')}
            >
              36
            </button>
            <button
              className={`${styles.sizeBtn} ${filters.size === '38' ? styles.active : ''}`}
              onClick={() => handleSizeChange(filters.size === '38' ? '' : '38')}
            >
              38
            </button>
            <button
              className={`${styles.sizeBtn} ${filters.size === '40' ? styles.active : ''}`}
              onClick={() => handleSizeChange(filters.size === '40' ? '' : '40')}
            >
              40
            </button>
          </div>
        </div>

        <div className={styles.filterGroup}>
          <h3 className={styles.sectionTitle}>Faixa de Preço</h3>
          <div className={styles.priceOptions}>
            <label className={styles.priceOption}>
              <input
                type="checkbox"
                checked={filters.minPrice === 0 && filters.maxPrice === 50}
                onChange={() => {
                  if (filters.minPrice === 0 && filters.maxPrice === 50) {
                    onFilterChange({ minPrice: 0, maxPrice: 1000 });
                  } else {
                    onFilterChange({ minPrice: 0, maxPrice: 50 });
                  }
                }}
              />
              <span>de R$0 até R$50</span>
            </label>
            <label className={styles.priceOption}>
              <input
                type="checkbox"
                checked={filters.minPrice === 51 && filters.maxPrice === 150}
                onChange={() => {
                  if (filters.minPrice === 51 && filters.maxPrice === 150) {
                    onFilterChange({ minPrice: 0, maxPrice: 1000 });
                  } else {
                    onFilterChange({ minPrice: 51, maxPrice: 150 });
                  }
                }}
              />
              <span>de R$51 até R$150</span>
            </label>
            <label className={styles.priceOption}>
              <input
                type="checkbox"
                checked={filters.minPrice === 151 && filters.maxPrice === 300}
                onChange={() => {
                  if (filters.minPrice === 151 && filters.maxPrice === 300) {
                    onFilterChange({ minPrice: 0, maxPrice: 1000 });
                  } else {
                    onFilterChange({ minPrice: 151, maxPrice: 300 });
                  }
                }}
              />
              <span>de R$151 até R$300</span>
            </label>
            <label className={styles.priceOption}>
              <input
                type="checkbox"
                checked={filters.minPrice === 301 && filters.maxPrice === 500}
                onChange={() => {
                  if (filters.minPrice === 301 && filters.maxPrice === 500) {
                    onFilterChange({ minPrice: 0, maxPrice: 1000 });
                  } else {
                    onFilterChange({ minPrice: 301, maxPrice: 500 });
                  }
                }}
              />
              <span>de R$301 até R$500</span>
            </label>
            <label className={styles.priceOption}>
              <input
                type="checkbox"
                checked={filters.minPrice === 500}
                onChange={() => {
                  if (filters.minPrice === 500) {
                    onFilterChange({ minPrice: 0, maxPrice: 1000 });
                  } else {
                    onFilterChange({ minPrice: 500, maxPrice: 1000 });
                  }
                }}
              />
              <span>a partir de R$ 500</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
