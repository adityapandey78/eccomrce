import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../services/fetchProducts";
import mapApiProductToProduct from "../services/mapApiProductToProduct";
import { ApiProduct, Product } from "../types/product";

export const useProduct = () => {
  const query = useQuery<ApiProduct[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const products: Product[] = useMemo(
    () => query.data?.map(mapApiProductToProduct) ?? [],
    [query.data]
  );

  return {
    ...query,
    products,
  };
};
