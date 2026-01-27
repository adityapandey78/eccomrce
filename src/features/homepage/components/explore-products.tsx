import { Box } from "@sparrowengg/twigs-react";
import SectionHeader from "./section-header";
import ArrowButton from "./arrow-button";
import Carousel from "./carousel";
import { ButtonPrimary } from "../../../commons/components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { Product } from "../../../commons/types";

const ExploreProducts = ({ products }: { products: Product[] }) => {
	const navigate = useNavigate();
	const [page, setPage] = useState(0);
	const maxPage = Math.max(0, Math.ceil(products.length / 4) - 1);
	return (
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
				></ArrowButton>

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
	);
};

export default ExploreProducts;
