import type { ApiProduct } from "../types/common-types";

const fetchProducts = async (): Promise<ApiProduct[]> => {
	const res = await fetch("https://fakestoreapi.com/products");
	// return res.json()
	if (!res.ok) {
		throw new Error("Failed to fetch teh data!");
	}
	return res.json();
};
export default fetchProducts;
