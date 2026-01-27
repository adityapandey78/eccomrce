import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "../commons/components";
import ErrorPage from "../commons/pages/error";

// Import route components from each feature
import { HomepageRoutes } from "../features/homepage/pages";
import { AllProductsRoutes } from "../features/all-products/pages";
import { ProductPageRoutes } from "../features/product-details/pages";
import { CartRoutes } from "../features/cart/pages";
import { BillingRoutes } from "../features/billing-details/pages";

const AppRoutes = () => {
	return (
		<>
			<Navbar />
			<Routes>
				{/* Homepage routes */}
				{HomepageRoutes()}

				{/* About page */}
				<Route path="about" element={<ErrorPage />} />

				{/* All products routes */}
				{AllProductsRoutes()}

				{/* Product detail routes */}
				{ProductPageRoutes()}

				{/* Cart routes */}
				{CartRoutes()}

				{/* Billing routes */}
				{BillingRoutes()}

				{/* Catch-all for 404 */}
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</>
	);
};

export default AppRoutes;
