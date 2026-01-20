import fetchProducts from "../../../commons/services/fetchProducts";
import mapApiProductToProduct from "../../../commons/services/mapApiProductToProduct";
import { ApiProduct, Product } from "../../../commons/types/product";


export const getProductsQuery = () => ({
  queryKey: ["products"],
  queryFn: async (): Promise<Product[]> => {
    const data: ApiProduct[] = await fetchProducts();
    return data.map(mapApiProductToProduct);
  },
});
