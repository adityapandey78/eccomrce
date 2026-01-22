import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
	".navbar__menu-items": {
		color: "#000000",
		fontSize: "16px",
		lineHeight: "24px",
		fontWeight: "$6",
		cursor: "pointer",
		"&::after": {
			content: "",
			position: "absolute",
			left: 0,
			bottom: "-4px",
			width: "100%",
			height: "2px",
			backgroundColor: "#000",
			transform: "scaleX(0)",
			transformOrigin: "left",
			transition: "transform 0.3s ease",
		},

		"&:hover::after": {
			transform: "scaleX(1)",
		},
	},
});
