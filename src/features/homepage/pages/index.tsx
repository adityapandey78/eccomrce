import { Box, Flex } from "@sparrowengg/twigs-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary, HorizontalLine } from "../../../commons/components";
import ErrorPage from "../../../commons/pages/error";
import Loading from "../../../commons/pages/loading";
import {
	ArrowButton,
	Carousel,
	NewArrivals,
	ProductCard,
	SectionHeader,
	Timer,
} from "../components";
import { getProductsQuery } from "../services";

import type { RouteObject } from "react-router-dom";

const HomePage = () => {
	const navigate = useNavigate();
	const [page, setPage] = useState(0);

	const {
		data: products = [],
		isLoading,
		isError,
	} = useQuery(getProductsQuery());

	const maxPage = Math.max(0, Math.ceil(products.length / 4) - 1);
	if (isLoading) return <Loading />;
	if (isError) return <ErrorPage />;

	return (
		<Box
			css={{
				// maxWidth: '1200px' ,
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
			<Flex flexDirection="column" gap="$20">
				<SectionHeader title="Flash Sales" tag="Today's" leftExtra={<Timer />}>
					<Flex
						flexDirection="row"
						justifyContent="space-between"
						alignItems="center"
						css={{ minWidth: "100%" }}
					>
						<Flex gap="$4">
							<ArrowButton
								css={{ transform: "rotate(180deg)" }}
								onClick={() =>
									setPage((p) => {
										const next = Math.max(0, p - 1);
										return next;
									})
								}
							>
								<FaArrowLeftLong />
							</ArrowButton>

							<ArrowButton
								onClick={() =>
									setPage((p) => {
										const next = Math.min(maxPage, p + 1);

										return next;
									})
								}
							/>
						</Flex>
					</Flex>
				</SectionHeader>
				<Carousel items={products} itemsPerView={4} page={page} />
				<ButtonPrimary
					css={{ margin: "40px auto" }}
					onClick={() => navigate("/productsPage")}
				>
					{" "}
					See All Products
				</ButtonPrimary>
				<HorizontalLine css={{ maxWidth: "100%" }} />
			</Flex>

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

			<Box
				css={{
					display: "flex",
					flexDirection: "column",
					gap: "60px",
					alignItems: "center",
				}}
			>
				<SectionHeader title="Best Selling Products" tag="This month">
					<ArrowButton
						css={{ transform: "rotate(180deg)" }}
						onClick={() =>
							setPage((p) => {
								const next = Math.max(0, p - 1);

								return next;
							})
						}
					>
						{/* <FaArrowLeftLong /> */}
					</ArrowButton>

					<ArrowButton
						onClick={() =>
							setPage((p) => {
								const next = Math.min(maxPage, p + 1);
								console.log("New page:", next);
								return next;
							})
						}
					/>
				</SectionHeader>
				<Carousel items={products} itemsPerView={4} noOfRows={2} page={page} />
				<ButtonPrimary
					css={{ maxWidth: "234px" }}
					onClick={() => navigate("/productsPage")}
				>
					View All Products
				</ButtonPrimary>
			</Box>

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

export const homepageRoutes: RouteObject[] = [
	{
		index: true,
		element: <HomePage />,
	},
];

export default HomePage;
