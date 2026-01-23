import { Box, type BoxProps, Heading } from "@sparrowengg/twigs-react";
import type React from "react";

const Tags: React.FC<BoxProps> = ({ children, css }) => {
	return (
		<Box
			css={{
				height: "40px",
				display: "flex",
				flexDirection: "row",
				gap: "16px",
				justifyContent: "start",
				alignItems: "center",
				...css,
			}}
		>
			<Box
				css={{
					height: "40px",
					width: "20px",
					backgroundColor: "#DB4444",
					border: "solid none 1px",
					borderRadius: "4px",
				}}
			></Box>
			<Heading
				css={{ fontSize: "16px", lineHeight: "24px", color: "#DB4444", ...css }}
			>
				{children}
			</Heading>
		</Box>
	);
};

export default Tags;
