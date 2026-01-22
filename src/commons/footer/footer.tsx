import {
	Box,
	Flex,
	FormInput,
	Heading,
	Image,
	Text,
} from "@sparrowengg/twigs-react";

import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";
import { VscSend } from "react-icons/vsc";

const Footer = () => {
	return (
		<Box
			as="footer"
			css={{
				backgroundColor: "#000",
				color: "#fff",
				paddingTop: "60px",
				marginTop: "80px",
			}}
		>
			{/* Main content */}
			<Box
				css={{
					//   maxWidth: "1200px",
					margin: "0 auto",
					padding: "0 75px",
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
					gap: "40px",
				}}
			>
				<Box>
					<Heading size="h5" css={{ marginBottom: "16px" }}>
						Exclusive
					</Heading>

					<Text css={{ marginBottom: "12px" }}>Subscribe</Text>
					<Text css={{ marginBottom: "16px", color: "#aaa" }}>
						Get 10% off your first order
					</Text>

					<Flex css={{ gap: "8px" }}>
						<FormInput
							placeholder="Enter your email"
							rightIcon={<VscSend />}
							css={{
								backgroundColor: "transparent",
								// border: "1px solid #fff",
								color: "#fff",
								"::placeholder": { color: "#aaa" },
							}}
						/>
					</Flex>
				</Box>

				<Box>
					<Heading size="h5" css={{ marginBottom: "16px" }}>
						Support
					</Heading>

					<Text css={{ color: "#aaa", marginBottom: "8px" }}>
						111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
					</Text>

					<Text css={{ color: "#aaa", marginBottom: "8px" }}>
						exclusive@gmail.com
					</Text>

					<Text css={{ color: "#aaa" }}>+88015-88888-9999</Text>
				</Box>

				<Box>
					<Heading size="h5" css={{ marginBottom: "16px" }}>
						Account
					</Heading>

					{["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map(
						(item) => (
							<Text
								key={item}
								css={{
									color: "#aaa",
									marginBottom: "10px",
									cursor: "pointer",
									"&:hover": { color: "#fff" },
								}}
							>
								{item}
							</Text>
						),
					)}
				</Box>

				<Box>
					<Heading size="h5" css={{ marginBottom: "16px" }}>
						Quick Link
					</Heading>

					{["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map((item) => (
						<Text
							key={item}
							css={{
								color: "#aaa",
								marginBottom: "10px",
								cursor: "pointer",
								"&:hover": { color: "#fff" },
							}}
						>
							{item}
						</Text>
					))}
				</Box>

				<Box>
					<Heading size="h5" css={{ marginBottom: "16px" }}>
						Download App
					</Heading>

					<Text css={{ color: "#aaa", marginBottom: "12px", fontSize: "14px" }}>
						Save $3 with App New User Only
					</Text>

					<Flex css={{ gap: "12px", marginBottom: "16px" }}>
						<Image
							src="/Assets/qr.jpg"
							alt="QR Code"
							css={{ width: "80px", height: "80px", objectFit: "cover" }}
						/>

						<Flex css={{ gap: "8px", flexDirection: "column" }}>
							<Image
								src="/Assets/play-store.png"
								alt="Google Play"
								css={{ width: "110px", height: "40px", objectFit: "cover" }}
							/>
							<Image
								src="/Assets/app-store.png"
								alt="App Store"
								css={{ width: "110px", height: "40px", objectFit: "cover" }}
							/>
						</Flex>
					</Flex>

					<Flex css={{ gap: "16px", marginTop: "12px" }}>
						{[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
							(Icon, index) => (
								<Box
									key={index}
									css={{
										cursor: "pointer",
										color: "#aaa",
										"&:hover": { color: "#fff" },
									}}
								>
									<Icon size={18} />
								</Box>
							),
						)}
					</Flex>
				</Box>
			</Box>

			<Box
				css={{
					borderTop: "1px solid #222",
					marginTop: "48px",
					padding: "20px 24px",
					textAlign: "center",
					color: "#777",
					fontSize: "14px",
				}}
			>
				© Copyright Rimel 2022. All right reserved
			</Box>
		</Box>
	);
};

export default Footer;
