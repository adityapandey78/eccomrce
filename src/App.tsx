import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./commons/footer/footer.tsx";
import Navbar from "./commons/header/navbar.tsx";
import ErrorPage from "./commons/pages/error.tsx";
import { globalStyles } from "./commons/styles/global-styles";
import BillingPage from "./features/billing-details/page";
import CartPage from "./features/cart/page";
import HomePage from "./features/homepage/page";
import ItemPage from "./features/itempage/page";
import ProductPage from "./features/products/page";

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
			{
				index: true,
				element: <HomePage />,
			},
			{ path: "about", element: <ErrorPage /> },
			{ path: "productspage", element: <ProductPage /> },
			{
				path: "products",
				children: [
					{ index: true, element: <HomePage /> },
					{ path: ":slug", element: <ItemPage /> },
				],
			},
			{ path: "cart", element: <CartPage /> },
			{ path: "itemPage", element: <ItemPage /> },
			{ path: "billingPage", element: <BillingPage /> },
		],
	},
]);

const App = () => {
	globalStyles();
	return <RouterProvider router={router} />;
};

export default App;
