import type { ApiProduct } from "../../../commons/types";

const fetchProducts = async (): Promise<ApiProduct[]> => {
	const res = await fetch("https://fakestoreapi.com/products");
	if (!res.ok) {
		throw new Error("Failed to fetch the data!");
	}
	return res.json();
};

export default fetchProducts;
