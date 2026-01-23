import { Box, Flex, Image, Input, Text } from "@sparrowengg/twigs-react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getProductsQuery } from "../../features/homepage/services";

const Searchbar = () => {
	const [input, setInput] = useState("");
	const [debouncedInput, setDebouncedInput] = useState("");

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedInput(input);
		}, 300);

		return () => clearTimeout(timer);
	}, [input]);

	const navigate = useNavigate();
	const { data: products = [] } = useQuery(getProductsQuery());
	const results = useMemo(() => {
		const q = debouncedInput.trim().toLocaleLowerCase();
		if (!q) return [];

		return products
			.filter((p) => {
				return (
					p.title.toLowerCase().includes(q) ||
					(p.category ?? "").toLowerCase().includes(q) ||
					(p.description ?? "").toLowerCase().includes(q)
				);
			})
			.slice(0, 6);
	}, [debouncedInput, products]);
	// console.log(results)
	return (
		<Box css={{ position: "relative" }}>
			<Input
				placeholder="What are you looking for?"
				rightIcon={<FiSearch size={20} />}
				css={{ width: "243px", height: "38px" }}
				onChange={(e) => setInput((e.target as HTMLInputElement).value)}
			/>
			{results.length > 0 && (
				<Flex
					flexDirection="column"
					gap="$5"
					css={{
						position: "absolute",
						top: "42px",
						width: "343px",
						backgroundColor: "#f6c9c99c",
						padding: "20px",
						borderRadius: "8px",
					}}
				>
					{results.map((item) => (
						<Flex
							justifyContent="space-between"
							key={item.id}
							onClick={() => navigate(`/products/${item.id}`)}
							css={{ cursor: "pointer" }}
							gap="10px"
						>
							<Text css={{ fontSize: "12px", lineHeight: "20px" }}>
								{item.title}
							</Text>
							<Image
								src={item.image}
								alt={item.title}
								css={{ height: "30px", maxWidth: "30px", objectFit: "contain" }}
							/>
						</Flex>
					))}
				</Flex>
			)}
		</Box>
	);
};

export default Searchbar;
