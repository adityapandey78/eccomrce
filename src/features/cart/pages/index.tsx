import { Route } from "react-router-dom";
import Cart from "../components/cart";

export const CartRoutes = () => (
	<>
		<Route path="cart" element={<Cart />} />
	</>
);
