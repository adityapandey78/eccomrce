import { Text } from "@sparrowengg/twigs-react";

function Path({ path = "path/path" }) {
	return (
		<Text
			css={{
				color: "#000000",
				fontWeight: "900",
				fontSize: "14px",
				lineHeight: "21px",
				letterSpacing: "1px",
				padding: "50px 10px",
			}}
		>
			{path}
		</Text>
	);
}

export default Path;
