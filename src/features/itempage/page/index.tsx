import {
	Box,
	Button,
	Flex,
	Grid,
	Heading,
	IconButton,
	Image,
	Text,
	toast,
} from "@sparrowengg/twigs-react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ButtonPrimary from "../../../commons/components/button-primary";
import HorizontalLine from "../../../commons/components/horizontal-line";
import ErrorPage from "../../../commons/pages/error";
import Loading from "../../../commons/pages/loading";
import type { AppDispatch, RootState } from "../../../commons/store/store";
import { addToCart } from "../../cart/store/cart-slice";
import ProductCard from "../../homepage/component/product-card";
import SectionHeader from "../../homepage/component/section-header";
import StarRating from "../../homepage/component/start-rating";
import { getProductsQuery } from "../../homepage/services";

const ItemPage = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { slug } = useParams<{ slug: string }>();
	const {
		data: products = [],
		isLoading,
		isError,
	} = useQuery(getProductsQuery());

	// Find product
	const product = products.find((p) => p.id === Number(slug));

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [slug]);

	const cartItem = useSelector((state: RootState) =>
		state.cart.products.find((p) => p.id === product?.id),
	);
	const currentQty = cartItem?.quantity ?? 0;
	const [count, setCount] = useState(currentQty);

	useEffect(() => {
		setCount(currentQty);
	}, [currentQty]);

	if (isLoading) return <Loading />;
	if (isError || !slug) return <ErrorPage />;
	if (!product) return <ErrorPage />;

	return (
		<Box
			css={{
				padding: "40px 135px",
			}}
		>
			{/* <Path></Path> */}
			<Flex justifyItems="center" alignItems="center" flexDirection="column">
				<Box
					css={{
						display: "flex",
						gap: "60px",
            alignItems:'center'
					}}
				>
					<Box
						css={{
							height: "600px",
							width: "500px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#F5F5F5",
							padding: "27px",
						}}
					>
						<Image
							src={product.image}
							alt={product.title}
							css={{ maxHeight: "100%", maxWidth: "100%" }}
						></Image>
					</Box>

					<Box
						css={{
							minHeight: "600px",
							width: "500px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
              gap:'$10'
						}}
					>
						<Box
							css={{
								display: "flex",
								flexDirection: "column",
								gap: "10px",
							}}
						>
							<Heading
								css={{
									fontSize: "24px",
									lineHeight: "24px",
									letterSpacing: "1px",
								}}
							>
								{product.title}
							</Heading>
							<Box
								css={{
									display: "flex",
									justifyContent: "start",
									alignItems: "center",
								}}
							>
								<StarRating rating={product.rating} />
								<Text> | In Stock</Text>
							</Box>
							<Heading
								size="h6"
								css={{
									fontSize: "24px",
									lineHeight: "24px",
								}}
							>
								$ {product.price}
							</Heading>
						</Box>

						<Box
							css={{
								minHeight: "100px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly",
							}}
						>
							<Text
								weight="medium"
								css={{
									fontSize: "14px",
									lineHeight: "21px",
								}}
							>
								{product.description}
							</Text>
							<HorizontalLine
								css={{
									width: "100%",
									height: "2px",
									backgroundColor: "$secondary",
								}}
							/>
						</Box>

						<Box
							css={{
								display: "flex",
								flexDirection: "column",
								gap: "20px",
							}}
						>
							<Text> Colours: 🔴 🔵 🟢 🟡</Text>
							<Flex gap="$6" justifyContent="start" alignItems="center">
								<Text>Sizes</Text>
								<Flex gap="$4">
									{["XS", "S", "M", "L", "XL", "XLL"].map((button) => (
										<Button
											key={button}
											variant="outline"
											color="secondary"
											css={{ width: "30px" }}
										>
											{button}
										</Button>
									))}
								</Flex>
							</Flex>

							<Flex css={{ height: "44px", display: "flex", gap: "12px" }}>
								<Box
									css={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<IconButton
										variant="outline"
										color="default"
										icon={<FaPlus />}
										onClick={() => setCount((p) => p + 1)}
										css={{
											width: "40px",
											height: "100%",
											border: "1px solid #00000080",
											borderRadius: "0",
											borderTopLeftRadius: "4px",
											borderBottomLeftRadius: "4px",
											borderRight: "0",
											color: "Black",
										}}
									/>
									<Text
										css={{
											width: "80px",
											height: "100%",
											border: "1px solid #00000080",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											textAlign: "center",
											fontSize: "20px",
											lineHeight: "20px",
										}}
									>
										{count}
									</Text>
									<IconButton
										variant="outline"
										color="default"
										icon={<FaMinus />}
										onClick={() => setCount((p) => Math.max(0, p - 1))}
										disabled={count === 0}
										css={{
											width: "40px",
											height: "100%",
											border: "1px solid #00000080",
											borderRadius: "0",
											borderTopRightRadius: "4px",
											borderBottomRightRadius: "4px",
											borderLeft: "0",
											color: "Black",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}
									/>
								</Box>

								<Flex gap="$6">
									<ButtonPrimary
										css={{
											height: "100%",
											padding: "16px 16px",
											minWidth: "120px",
											backgroundColor: "$warning300",
										}}
										onClick={() => {
											if (count > currentQty) {
												dispatch(addToCart({ ...product, quantity: count }));
											}
											toast({
												variant: "success",
												title: "Item Added",
												description: "Item is added to cart",
											});
										}}
										disabled={count === currentQty}
									>
										Add to Cart
									</ButtonPrimary>
									<ButtonPrimary
										css={{
											height: "100%",
											padding: "16px 16px",
											minWidth: "120px",
										}}
									>
										Buy Now
									</ButtonPrimary>
								</Flex>

								<Box
									css={{
										height: "100%",
										border: "#00000080 1px solid",
										width: "40px",
										fontSize: "20px",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										borderRadius: "4px",
									}}
								>
									<IconButton
										color="secondary"
										variant="ghost"
										icon={<FaRegHeart />}
									/>
								</Box>
							</Flex>
						</Box>

						<Box
							css={{
								border: "1px solid $neutral300",
								borderRadius: "$4",
								width: "100%",
								overflow: "hidden",
							}}
						>
							<Flex
								css={{
									gap: "20px",
									padding: "24px 16px",
									alignItems: "flex-start",
									borderBottom: "1px solid $neutral300",
								}}
							>
								<TbTruckDelivery size={40} />
								<Box css={{}}>
									<Text weight="bold">Free Delivery</Text>
									<Text
										size="sm"
										css={{
											mt: "$1",
											textDecoration: "underline",
											cursor: "pointer",
										}}
									>
										Enter your postal code for Delivery Availability
									</Text>
								</Box>
							</Flex>

							<Flex
								css={{
									gap: "20px",
									alignItems: "flex-start",
									padding: "24px 16px",
								}}
							>
								<GrPowerCycle size={40} />
								<Box>
									<Text weight="bold">Return Delivery</Text>
									<Text size="sm" css={{ mt: "$1" }}>
										Free 30 Days Delivery Returns.{" "}
										<Text
											as="span"
											css={{
												textDecoration: "underline",
												cursor: "pointer",
											}}
										>
											Details
										</Text>
									</Text>
								</Box>
							</Flex>
						</Box>
					</Box>
				</Box>
			</Flex>

			<Flex
				flexDirection="column"
				css={{
					marginTop: "150px",
					gap: "60px",
				}}
			>
				<SectionHeader title="" tag="Related Item"></SectionHeader>
				<Grid templateColumns="repeat(4,minmax(0,1fr))">
					{products
						.filter((p) => p.category === product.category)
						.slice(0, 5)
						.map((p) => (
							<ProductCard key={p.id} product={p} />
						))}
				</Grid>
			</Flex>
		</Box>
	);
};

export default ItemPage;
