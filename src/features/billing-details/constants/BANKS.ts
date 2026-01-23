import { bankEnum } from "../types";

const BANKS = [
	{ key: bankEnum.bkash, src: "/assets/bkash.png", alt: "Bkash" },
	{ key: bankEnum.visa, src: "/assets/visa.png", alt: "Visa" },
	{
		key: bankEnum.mastercard,
		src: "/assets/mastercard.png",
		alt: "Mastercard",
	},
	{ key: bankEnum.nagad, src: "/assets/nagad.png", alt: "Nagad" },
];
export default BANKS;
