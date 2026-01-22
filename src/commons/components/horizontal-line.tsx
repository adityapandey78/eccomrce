import { Box, type BoxProps } from "@sparrowengg/twigs-react";

const HorizontalLine: React.FC<BoxProps> = ({ css }) => {
	return (
		<Box
			css={{
				height: "1px",
				width: "100vw",
				border: "solid black 0.5px",
				opacity: "30%",
				...css,
			}}
		></Box>
	);
};

export default HorizontalLine;
