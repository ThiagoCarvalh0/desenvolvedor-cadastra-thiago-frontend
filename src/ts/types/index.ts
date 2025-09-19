// Product related types
export interface Product {
  id: string;
  name: string;
  price: number;
  parcelamento: number[];
  color: string;
  image: string;
  size: string[];
  date: string;
}

// Filter types
export interface Filters {
  color: string;
  size: string;
  minPrice: number;
  maxPrice: number;
}

// Sort types
export enum SortType {
  RECENTES = 'recentes',
  MENOR_PRECO = 'menor-preco',
  MAIOR_PRECO = 'maior-preco'
}

// Component props types
export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  visibleProducts: number;
  onLoadMore: () => void;
  hasMore: boolean;
}

export interface FilterBarProps {
  filters: Filters;
  onFilterChange: (filters: Partial<Filters>) => void;
  onSortChange: (sortBy: string) => void;
  sortBy: string;
  isMobileFilterOpen: boolean;
  isMobileSortOpen: boolean;
  onToggleMobileFilter: () => void;
  onToggleMobileSort: () => void;
}

// Constants
export const CONSTANTS = {
  SERVER_URL: "http://localhost:5000",
  INITIAL_VISIBLE_PRODUCTS: 8,
  DEFAULT_MAX_PRICE: 1000,
  IMAGE_DIMENSIONS: { width: 200, height: 200 }
} as const;
