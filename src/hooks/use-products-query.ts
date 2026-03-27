"use client";

import { useState, useEffect, useCallback } from "react";
import { Products } from "@/content/products";

interface ProductQueryState {
  products: typeof Products;
  loading: boolean;
  error: string | null;
}

export function useProductsQuery() {
  const [state, setState] = useState<ProductQueryState>({
    products: [],
    loading: true,
    error: null
  });

  const loadProducts = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      // Simulate network delay for realistic loading
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setState({
        products: Products,
        loading: false,
        error: null
      });
    } catch (error) {
      setState({
        products: [],
        loading: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const refetch = useCallback(() => {
    loadProducts();
  }, [loadProducts]);

  return {
    ...state,
    refetch,
    isLoading: state.loading
  };
}
