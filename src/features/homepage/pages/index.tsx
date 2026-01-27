import { Box } from "@sparrowengg/twigs-react";
import { useQuery } from "@tanstack/react-query";
import { ButtonPrimary } from "../../../commons/components";
import ErrorPage from "../../../commons/pages/error";
import Loading from "../../../commons/pages/loading";
import {
	ExploreProducts,
	FlashSales,
	NewArrivals,
	ProductCard,
	SectionHeader,
} from "../components";
import { getProductsQuery } from "../services";

import { Route } from "react-router-dom";

export const HomepageRoutes = () => (
	<>
		<Route index element={<HomePage />} />
	</>
);

const HomePage = () => {
	const {
		data: products = [],
		isLoading,
		isError,
	} = useQuery(getProductsQuery());

	if (isLoading) return <Loading />;
	if (isError) return <ErrorPage />;

	return (
		<Box
			css={{
				minHeight: "100vh",
				margin: "0 auto",
				padding: "80px 135px 16px",
				display: "flex",
				flexDirection: "column",
				justifyItems: "center",
				gap: "80px",
			}}
		>
			{/* Flash Sales Section */}
			<FlashSales products={products} />

			{/* Best Selling Products */}
			<Box
				css={{
					display: "flex",
					flexDirection: "column",
					gap: "60px",
				}}
			>
				<Box>
					<SectionHeader title="Best Selling Products" tag="This month">
						<ButtonPrimary>View All</ButtonPrimary>
					</SectionHeader>
				</Box>
				<Box
					css={{
						display: "grid",
						gridTemplateColumns: `repeat(4,minmax(0,1fr))`,
						gap: "30px",
					}}
				>
					{[...products]
						.sort((a, b) => (b?.rating || 0) - (a?.rating || 0))
						.splice(0, 4)
						.map((p) => {
							return <ProductCard key={p.id} product={p} />;
						})}
				</Box>
			</Box>

			{/* Explore Our Products */}

			<ExploreProducts products={products} />

			{/* New Arrivals */}
			<Box>
				<SectionHeader title="New Arrivals" tag="Featured"></SectionHeader>
			</Box>
			<Box>
				<NewArrivals />
			</Box>
		</Box>
	);
};
export default HomePage;
