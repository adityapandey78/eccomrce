import { Box, Button, Heading, Image, Text, toast } from "@sparrowengg/twigs-react";
import type React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { AppDispatch } from "../../../commons/store/store";
import type { Product } from "../../../commons/types/common-types";
import { addToCart } from "../../cart/store/cart-slice";
import StartRating from "./start-rating";

interface ProductCardProps {
	product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	return (
		<Box
			css={{
				height: "350px",
				display: "flex",
				flexDirection: "column",
				gap: "16px",
				overflow: "hidden",
			}}
		>
			<Box
				css={{
					backgroundColor: "#F5F5F5",
					height: "250px",
					padding: "35px 40px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					position: "relative",
					flexShrink: "0",
					"&:hover .show-add_to_cart": {
						opacity: 1,
						transform: "translateY(0)",
					},
				}}
			>
				{product.discount && (
					<Text
						css={{
							color: "#FAFAFA",
							backgroundColor: "#DB4444",
							position: "absolute",
							top: "4px",
							left: "12px",
							padding: "4px 12px",
							borderRadius: "4px",
						}}
					>
						{product.discount}
					</Text>
				)}
				<Box
					css={{
						width: "190px",
						height: "180px",
						backgroundColor: "#F5F5F5",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Image
						src={product.image}
						alt={product.image}
						css={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
					/>
				</Box>

				<Button
					css={{
						position: "absolute",
						bottom: "0px",
						height: "41px",
						width: "100%",
						padding: "20px 0px",
						backgroundColor: "#000000!important",
						borderRadius: "0px",

						opacity: 0,
						transform: "translateY(8px)",
						pointerEvents: "auto",
						transition: "all 0.25s ease",
						cursor: "pointer",
						zIndex: "100",
					}}
					className="show-add_to_cart"
					onClick={() => {dispatch(addToCart(product))
            toast({
              variant: "default",
              title: "Added to cart",
              description: "Product has been added to your cart",
            });
          }}
				>
					Add to Cart
				</Button>
			</Box>
			<Box
				css={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					height: "100%",
					flex: "1",
					pointerEvents: "auto",
					cursor: "pointer",
				}}
				onClick={() => navigate(`/products/${product.id}`)}
			>
				<Heading
					size="h6"
					css={{
						fontSize: "16px",
						lineHeight: "20px",
						fontWeight: "$5",
					}}
				>
					{product.title.length > 60
						? `${product.title.slice(0, 60)}...`
						: product.title}
				</Heading>
				<Box
					css={{
						display: "flex",
						justifyContent: "center",
						alignItems: "start",
						gap: "12px",
					}}
				>
					<Text
						css={{
							fontSize: "16px",
							lineHeight: "24px",
							fontWeight: "$5",
							color: "#DB4444",
						}}
					>
						${product.price}
					</Text>
					{product.originalPrice && (
						<Text
							css={{
								fontSize: "16px",
								lineHeight: "24px",
								fontWeight: "$5",
								color: "#9096A2",
								textDecoration: "line-through",
							}}
						>
							${product.originalPrice}
						</Text>
					)}
				</Box>
				<StartRating rating={product.rating} />
			</Box>
		</Box>
	);
};

export default ProductCard;
