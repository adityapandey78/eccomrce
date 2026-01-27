import { Flex, Text } from "@sparrowengg/twigs-react";
import { useEffect, useState } from "react";
import timeDateToMs from "../utils/time-date-to-ms";

const Timer = () => {
	const TIMER_DATE = "31/01/2026-10:00";
	const targetMs = timeDateToMs(TIMER_DATE);

	const [timeLeft, setTimeLeft] = useState<number>(
		targetMs ? targetMs - Date.now() : 0,
	);

	useEffect(() => {
		if (!targetMs) return;

		const id = setInterval(() => {
			const diff = targetMs - Date.now();
			setTimeLeft(diff > 0 ? diff : 0);
		}, 1000);

		return () => clearInterval(id);
	}, [targetMs]);

	const formatTime = (ms: number) => {
		const totalSeconds = Math.floor(ms / 1000);

		const days = Math.floor(totalSeconds / (24 * 3600));
		const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
		const minutes = Math.floor((totalSeconds % 3600) / 60);
		const seconds = totalSeconds % 60;

		return {
			days: days.toString().padStart(2, "0"),
			hours: hours.toString().padStart(2, "0"),
			minutes: minutes.toString().padStart(2, "0"),
			seconds: seconds.toString().padStart(2, "0"),
		};
	};
	const { days, hours, minutes, seconds } = formatTime(timeLeft);

	return (
		<Flex css={{ fontSize: "24px", fontWeight: "bold", gap: "12px" }}>
			{[
				["Days", days],
				["Hours", hours],
				["Minutes", minutes],
				["Seconds", seconds],
			].map(([label, value], idx, arr) => (
				<Flex key={idx}>
					<Flex
						flexDirection="column"
						alignItems="start"
						justifyContent="start"
					>
						<Text
							css={{
								fontSize: "11px",
								lineHeight: "18px",
								fontWeight: "$5",
								textAlign: "start",
							}}
						>
							{label}
						</Text>
						<Text
							css={{
								fontSize: "32px",
								lineHeight: "30px",
								letterSpacing: "1px",
								fontWeight: "$7",
							}}
						>
							{value}
						</Text>
					</Flex>
					{idx < arr.length - 1 && (
						<Text
							css={{
								fontSize: "28px",
								lineHeight: "30px",
								marginTop: "16px",
								fontWeight: "$7",
								color: "#db4444",
							}}
						>
							:
						</Text>
					)}
				</Flex>
			))}
		</Flex>
	);
};

export default Timer;
