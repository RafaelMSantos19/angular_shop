export interface ProductFilters {
  minPrice?: number;
  maxPrice?: number;
  category?: string;
  rating?: number;
  search?: string;
}

export interface PaginationInfo {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}