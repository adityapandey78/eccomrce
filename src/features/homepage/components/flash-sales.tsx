import { Flex } from "@sparrowengg/twigs-react";
import SectionHeader from "./section-header";
import Timer from "./timer";
import ArrowButton from "./arrow-button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import Carousel from "./carousel";
import { ButtonPrimary, HorizontalLine } from "../../../commons/components";

import { useNavigate } from "react-router-dom";
import type { Product } from "../../../commons/types";

const FlashSales = ({ products }: { products: Product[] }) => {
	const navigate = useNavigate();
	const [page, setPage] = useState(0);
	const maxPage = Math.max(0, Math.ceil(products.length / 4) - 1);
	return (
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
	);
};

export default FlashSales;
