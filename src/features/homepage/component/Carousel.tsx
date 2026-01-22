import { Box, type BoxProps } from "@sparrowengg/twigs-react";
import type React from "react";
import type { Product } from "../../../commons/types/common-types";
import ProductCard from "./product-card";

interface CarouselProps extends BoxProps {
	itemsPerView: number;
	noOfRows?: number;
	page: number;
	items: Product[];
}
const Carousel: React.FC<CarouselProps> = ({
	itemsPerView,
	noOfRows = 1,
	page,
	items,
	css,
	...props
}) => {
	const itemsPerPage = itemsPerView * noOfRows;
	const pages: Product[][] = [];
	for (let i = 0; i < items.length; i += itemsPerPage) {
		pages.push(items.slice(i, i + itemsPerPage));
	}

	const actualPage = Math.min(page, pages.length - 1);

	return (
		<Box
			{...props}
			css={{
				overflow: "hidden",
				width: "100%",
				...css,
			}}
		>
			<Box
				css={{
					display: "flex",
					width: `${pages.length * 100}%`,
					transform: `translateX(-${(actualPage * 100) / pages.length}%)`,
					transition: "transform 0.4s ease",
				}}
			>
				{pages.map((group, i) => {
					return (
						<Box
							key={i}
							css={{
								flex: `0 0 ${100 / pages.length}%`,
								minWidth: "0",
								display: "grid",
								gridTemplateColumns: `repeat(${itemsPerView},minmax(0,1fr))`,
								gridAutoRows: "auto",
								gap: "30px",
							}}
						>
							{group.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

export default Carousel;
