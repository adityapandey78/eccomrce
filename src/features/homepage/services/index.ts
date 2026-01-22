import fetchProducts from "../../../commons/services/fetch-products";
import mapApiProductToProduct from "../../../commons/services/map-apiproducts-to-product";
import type { ApiProduct, Product } from "../../../commons/types/common-types";

export const getProductsQuery = () => ({
	queryKey: ["products"],
	queryFn: async (): Promise<Product[]> => {
		const data: ApiProduct[] = await fetchProducts();
		return data.map(mapApiProductToProduct);
	},
});
