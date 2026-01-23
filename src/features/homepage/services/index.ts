import fetchProducts from "./fetch-products";
import mapApiProductToProduct from "../utils/map-apiproducts-to-product";
import type { ApiProduct, Product } from "../../../commons/types";

export const getProductsQuery = () => ({
	queryKey: ["products"],
	queryFn: async (): Promise<Product[]> => {
		const data: ApiProduct[] = await fetchProducts();
		return data.map(mapApiProductToProduct);
	},
});
