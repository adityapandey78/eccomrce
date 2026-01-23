import { createBrowserRouter, Outlet } from "react-router-dom";
import { Footer, Navbar } from "../commons/components";
import ErrorPage from "../commons/pages/error";

// Import routes from each feature's page
import { allProductsRoutes } from "../features/all-products/pages";
import { billingRoutes } from "../features/billing-details/pages";
import { cartRoutes } from "../features/cart/pages";
import { homepageRoutes } from "../features/homepage/pages";
import { productPageRoutes } from "../features/product-page/pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Navbar />
				<Outlet />
				<Footer />
			</>
		),
		errorElement: (
			<>
				<Navbar />
				<ErrorPage />
				<Footer />
			</>
		),
		children: [
			// Homepage routes (index route)
			...homepageRoutes,
			// About page
			{ path: "about", element: <ErrorPage /> },
			// All products page
			...allProductsRoutes,
			// Product detail routes
			...productPageRoutes,
			// Cart routes
			...cartRoutes,
			// Billing routes
			...billingRoutes,
		],
	},
]);

export default router;
