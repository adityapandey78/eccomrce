import { Box, Grid, Heading, Text } from "@sparrowengg/twigs-react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { RiCustomerServiceLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import BannerCard from "../banner-card";

const NewArrivals = () => {
	const bottomCard = [
		{
			id: 1,
			icon: <TbTruckDelivery />,
			title: "free and fast delivery",
			subtitle: "Free delivery for all orders over $140",
		},

		{
			id: 2,
			icon: <RiCustomerServiceLine />,
			title: "24/7 CUSTOMER SERVICE",
			subtitle: "Friendly 24/7 customer support",
		},
		{
			id: 3,
			icon: <AiOutlineSafetyCertificate />,
			title: "MONEY BACK GUARANTEE",
			subtitle: "We reurn money within 30 days",
		},
	];
	return (
		<Box
			css={{
				display: "flex",
				flexDirection: "column",
				gap: "150px",
			}}
		>
			<Grid
				css={{
					gridTemplateColumns: "2fr 1fr",
					gap: "$6",
					width: "100%",
					height: "600px",
				}}
			>
				{/* Left Large Card */}
				<BannerCard
					title="PlayStation 5"
					subtitle="Black and White version of the PS5 coming out on sale."
					height={"600px"}
					bgImage="/Assets/ps5.png"
				/>

				{/* Right Grid */}
				<Grid
					css={{
						gridTemplateColumns: "1fr 1fr",
						gridTemplateRows: "1fr 1fr",
						gap: "$6",
						height: "600px",
					}}
				>
					<Box css={{ gridColumn: "1 / 3" }}>
						<BannerCard
							title="Women’s Collections"
							subtitle="Featured women collections that give you another vibe."
							height={"100%"}
							bgImage="/Assets/women.jpg"
						/>
					</Box>

					<BannerCard
						title="Speakers"
						subtitle="Amazon wireless speakers"
						height={"100%"}
						bgImage="/Assets/speakers.png"
					/>

					<BannerCard
						title="Perfume"
						subtitle="GUCCI INTENSE OUD EDP"
						height={"100%"}
						bgImage="/Assets/perfume.png"
					/>
				</Grid>
			</Grid>
			<Grid
				css={{
					gridTemplateColumns: "repeat(3,minmax(0,1fr))",
					height: "161px",
				}}
			>
				{bottomCard.map((card, i) => (
					<Box
						key={i}
						css={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							gap: "24px",
						}}
					>
						<Box
							css={{
								fontSize: "30px",
								padding: "10px",
								backgroundColor: "#000000",
								color: "#fff",
								borderRadius: "50%",
								height: "70px",
								width: "70px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								position: "relative",
								"&::after": {
									content: "",
									position: "absolute",
									border: "8px solid rgb(169 166 172)",
									height: "100%",
									width: "100%",
									borderRadius: "50%",
								},
							}}
						>
							{card.icon}
						</Box>
						<Box>
							<Heading
								css={{
									fontSize: "20px",
									lineHeight: "28px",
									textTransform: "Uppercase",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									gap: "20px",
								}}
							>
								{card.title}
							</Heading>
							<Text
								css={{
									fontSize: "14px",
									lineHeight: "21px",
									textAlign: "center",
								}}
							>
								{card.subtitle}
							</Text>
						</Box>
					</Box>
				))}
			</Grid>
		</Box>
	);
};

export default NewArrivals;
