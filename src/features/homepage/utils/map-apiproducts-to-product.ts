import type { ApiProduct, Product } from "../../../commons/types";

function mapApiProductToProduct(p: ApiProduct): Product {
	const discountPercent = 20;

	const originalPrice = Math.round(p.price / (1 - discountPercent / 100));
	const discountedPrice = Math.round(p.price);

	return {
		id: p.id,
		title: p.title,
		image: p.image,
		price: discountedPrice,
		originalPrice,
		discount: `-${discountPercent}%`,
		rating: p.rating.rate,
		category: p.category,
		description: p.description,
	};
}

export default mapApiProductToProduct;
