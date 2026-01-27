import { Route } from "react-router-dom";
import AllProducts from "../components/all-products";

export const AllProductsRoutes = () => (
	<>
		<Route path="productspage" element={<AllProducts />} />
	</>
);
