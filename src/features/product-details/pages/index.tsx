import { Route } from "react-router-dom";
import ProductDetails from "../components/product-details";

export const ProductPageRoutes = () => (
	<>
		<Route path="products" element={<ProductDetails />} />
		<Route path="products/:slug" element={<ProductDetails />} />
	</>
);
