import { Flex, Grid, Pagination } from "@sparrowengg/twigs-react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ErrorPage from "../../../commons/pages/error";
import Loading from "../../../commons/pages/loading";
import { ProductCard, SectionHeader } from "../../homepage/components";
import { getProductsQuery } from "../../homepage/services";

const AllProducts = () => {
	const [activePage, setActivePage] = useState(1);

	const {
		data: products = [],
		isLoading,
		isError,
	} = useQuery(getProductsQuery());

	const itemsPerPage = 12;

	const start = (activePage - 1) * itemsPerPage;
	const end = start + itemsPerPage;
	const paginatedProducts = products.slice(start, end);
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});

	if (isLoading) return <Loading />;
	if (isError) return <ErrorPage />;

	return (
		<Flex
			flexDirection="column"
			css={{
				width: "100vw",
				minHeight: "100vh",
				padding: "60px 135px",
				gap: "$30",
			}}
		>
			<SectionHeader
				title="Explore All Products"
				tag="Exciting offer"
			></SectionHeader>

			<Flex css={{ minHeight: "1260px" }}>
				<Grid
					css={{
						gridTemplateColumns: `repeat(4,minmax(0,1fr))`,
						gridTemplateRows: `repeat(3,minmax(0,1fr))`,
						gap: "30px",
						transition: "0.2s all ease",
					}}
				>
					{paginatedProducts.map((item, _idx) => {
						return <ProductCard key={item.id} product={item} />;
					})}
				</Grid>
			</Flex>
			<Flex
				justifyContent="center"
				alignItems="center"
				css={{
					width: "100%",
					marginTop: "$30",
				}}
			>
				<Pagination
					activePage={activePage}
					itemsPerPage={itemsPerPage}
					total={products.length}
					onChange={(_, page) => setActivePage(page)}
					size="lg"
				/>
			</Flex>
		</Flex>
	);
};

export default AllProducts;
