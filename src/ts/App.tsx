import React, { useState, useEffect } from 'react';
import { Product } from './Product';
import { ProductList } from './components/ProductList';
import { FilterBar } from './components/FilterBar';
import styles from './App.module.scss';

export const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState({
    color: '',
    size: '',
    minPrice: 0,
    maxPrice: 1000
  });
  const [visibleProducts, setVisibleProducts] = useState<number>(8);
  const [sortBy, setSortBy] = useState<string>('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
  const [isMobileSortOpen, setIsMobileSortOpen] = useState<boolean>(false);
  const [isDesktopSortOpen, setIsDesktopSortOpen] = useState<boolean>(false);

  const serverUrl = "http://localhost:5000";

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [products, filters, sortBy]);

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isDesktopSortOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest(`.${styles.customSelect}`)) {
          setIsDesktopSortOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDesktopSortOpen]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${serverUrl}/products`);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = products.filter(product => {
      // Filtro por cor: se não há filtro ou está vazio, aceita todos
      const colorMatch = !filters.color || filters.color.trim() === '' || 
        product.color.toLowerCase().includes(filters.color.toLowerCase());
      
      // Filtro por tamanho: se não há filtro ou está vazio, aceita todos
      const sizeMatch = !filters.size || filters.size.trim() === '' || 
        product.size.includes(filters.size);
      
      // Filtro por preço: sempre aplicado
      const priceMatch = product.price >= filters.minPrice && product.price <= filters.maxPrice;
      
      return colorMatch && sizeMatch && priceMatch;
    });

    // Aplicar ordenação
    if (sortBy) {
      switch (sortBy) {
        case 'recentes':
          // Ordenar por ID (mais recentes primeiro)
          filtered.sort((a, b) => b.id.localeCompare(a.id, undefined, { numeric: true }));
          break;
        case 'menor-preco':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'maior-preco':
          filtered.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }
    }

    setFilteredProducts(filtered);
  };

  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleDesktopSortSelect = (value: string) => {
    setSortBy(value);
    setIsDesktopSortOpen(false);
  };

  const handleMobileSortSelect = (value: string) => {
    setSortBy(value);
    setIsMobileSortOpen(false);
  };

  const handleMobileFilterApply = () => {
    setIsMobileFilterOpen(false);
  };

  const handleMobileFilterCancel = () => {
    setIsMobileFilterOpen(false);
  };

  const addToCart = (product: Product) => {
    // Funcionalidade básica de adicionar ao carrinho conforme README
    console.log('Produto adicionado ao carrinho:', product);
  };

  const loadMoreProducts = () => {
    setVisibleProducts(prev => prev + 4);
  };

  const displayedProducts = filteredProducts.slice(0, visibleProducts);
  const hasMoreProducts = visibleProducts < filteredProducts.length;

  if (loading) {
    return (
      <div className={styles.loading}>
        <h2>Carregando produtos...</h2>
      </div>
    );
  }

  return (
        <div className={styles.app}>
          <header className={styles.header}>
            <div className={styles.headerContent}>
              <div className={styles.logo}>
                <img src="./img/logo_cadastra.webp" alt="Cadastra" className={styles.logoImg} />
              </div>
              <div className={styles.cartIcon}>
                <img src="./img/icon.webp" alt="Carrinho" />
              </div>
            </div>
          </header>

      <main className={styles.main}>
        <div className={styles.mainContent}>
          {/* Seção de Título e Ordenação - Alinhada com header */}
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Blusas</h1>
            
            {/* Desktop - Dropdown customizado de ordenação */}
            <div className={styles.sortContainer}>
              <div className={styles.customSelect}>
                <button 
                  className={styles.selectButton}
                  onClick={() => setIsDesktopSortOpen(!isDesktopSortOpen)}
                >
                  {sortBy === '' ? 'Ordenar por:' : 
                   sortBy === 'recentes' ? 'Mais recentes' :
                   sortBy === 'menor-preco' ? 'Menor preço' :
                   sortBy === 'maior-preco' ? 'Maior preço' : 'Ordenar por:'}
                  <span className={`${styles.selectArrow} ${isDesktopSortOpen ? styles.open : ''}`}>▼</span>
                </button>
                
                {isDesktopSortOpen && (
                  <div className={styles.selectDropdown}>
                    <button 
                      className={`${styles.selectOption} ${sortBy === '' ? styles.selected : ''}`}
                      onClick={() => handleDesktopSortSelect('')}
                    >
                      Ordenar por:
                    </button>
                    <button 
                      className={`${styles.selectOption} ${sortBy === 'recentes' ? styles.selected : ''}`}
                      onClick={() => handleDesktopSortSelect('recentes')}
                    >
                      Mais recentes
                    </button>
                    <button 
                      className={`${styles.selectOption} ${sortBy === 'menor-preco' ? styles.selected : ''}`}
                      onClick={() => handleDesktopSortSelect('menor-preco')}
                    >
                      Menor preço
                    </button>
                    <button 
                      className={`${styles.selectOption} ${sortBy === 'maior-preco' ? styles.selected : ''}`}
                      onClick={() => handleDesktopSortSelect('maior-preco')}
                    >
                      Maior preço
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile - Botões de Filtrar e Ordenar */}
            <div className={styles.mobileButtons}>
              <button 
                className={styles.mobileFilterBtn}
                onClick={() => setIsMobileFilterOpen(true)}
              >
                Filtrar
              </button>
              <button 
                className={styles.mobileSortBtn}
                onClick={() => setIsMobileSortOpen(true)}
              >
                Ordenar
              </button>
            </div>
          </div>

          {/* Seção de Conteúdo Principal */}
          <div className={styles.contentSection}>
            <aside className={styles.sidebar}>
              <FilterBar
                filters={filters}
                onFilterChange={handleFilterChange}
                products={products}
                isMobile={false}
              />
            </aside>

            <div className={styles.content}>
              <ProductList
                products={displayedProducts}
                onAddToCart={addToCart}
              />

              {hasMoreProducts && (
                <div className={styles.loadMore}>
                  <button onClick={loadMoreProducts} className={styles.loadMoreBtn}>
                    CARREGAR MAIS
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
          <footer className={styles.footer}>
            <p>CADASTRA: IMPLANTAÇÃO DE E-COMMERCE VTEX</p>
          </footer>

          {/* Mobile Sheets */}
          {/* Sheet de Ordenação */}
          {isMobileSortOpen && (
            <div className={styles.mobileSheet}>
              <div className={styles.sheetContent}>
                <h3 className={styles.sheetTitle}>
                  Ordenar por
                  <button 
                    className={styles.sheetCloseBtn}
                    onClick={() => setIsMobileSortOpen(false)}
                  >
                    ×
                  </button>
                </h3>
                <div className={styles.sortOptions}>
                  <button 
                    className={`${styles.sortOption} ${sortBy === 'recentes' ? styles.active : ''}`}
                    onClick={() => handleMobileSortSelect('recentes')}
                  >
                    Mais recentes
                  </button>
                  <button 
                    className={`${styles.sortOption} ${sortBy === 'maior-preco' ? styles.active : ''}`}
                    onClick={() => handleMobileSortSelect('maior-preco')}
                  >
                    Maior preço
                  </button>
                  <button 
                    className={`${styles.sortOption} ${sortBy === 'menor-preco' ? styles.active : ''}`}
                    onClick={() => handleMobileSortSelect('menor-preco')}
                  >
                    Menor preço
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Sheet de Filtros */}
          {isMobileFilterOpen && (
            <div className={styles.mobileSheet}>
              <div className={styles.sheetContent}>
                <h3 className={styles.sheetTitle}>
                  Filtros
                  <button 
                    className={styles.sheetCloseBtn}
                    onClick={() => setIsMobileFilterOpen(false)}
                  >
                    ×
                  </button>
                </h3>
                <div className={styles.mobileFilters}>
                  <FilterBar
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    products={products}
                    isMobile={true}
                  />
                </div>
                <div className={styles.sheetButtons}>
                  <button 
                    className={styles.cancelBtn}
                    onClick={handleMobileFilterCancel}
                  >
                    Cancelar
                  </button>
                  <button 
                    className={styles.applyBtn}
                    onClick={handleMobileFilterApply}
                  >
                    Aplicar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    };
