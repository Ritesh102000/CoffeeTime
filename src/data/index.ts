import papercup from "../assets/papercup.svg";
import boiler from "../assets/boiler.svg";
import cup from "../assets/cup.svg";
import coffee from "../assets/coffee.svg";

export const services = [
	{
		title: "Cozy Ambiance",
		description:
			"Sink into plush seating, warm lighting, and a playlist curated to make every visit feel like home.",
		icon: papercup,
	},
	{
		title: "Artisanal Coffee",
		description:
			"Enjoy beans roasted in small batches and brewed to highlight the rich, nuanced flavors in every cup.",
		icon: boiler,
	},
	{
		title: "Fresh Delights",
		description:
			"Pair your drink with pastries baked each morning, from buttery croissants to decadent cakes.",
		icon: cup,
	},
	{
		title: "Friendly Service",
		description:
			"Our baristas remember names, favorite orders, and love crafting moments that brighten your day.",
		icon: coffee,
	},
];

export const menuSections = [
	{
		title: "Coffee Selection",
		items: [
			{
				title: "Espresso",
				description: "Rich, velvety espresso pulled to perfection.",
				price: 3.5,
			},
			{
				title: "Americano",
				description: "Smooth espresso mellowed with hot water.",
				price: 3.75,
			},
			{
				title: "Cappuccino",
				description:
					"Balanced espresso, steamed milk, and silky foam dusted with cocoa.",
				price: 4.25,
			},
			{
				title: "Latte",
				description: "Creamy espresso layered with lightly steamed milk.",
				price: 4.5,
			},
			{
				title: "Mocha",
				description: "Espresso, chocolate, and milk topped with whipped cream.",
				price: 4.95,
			},
			{
				title: "Macadamia Nut Latte",
				description: "A toasted macadamia twist on our signature latte.",
				price: 5.25,
			},
		],
	},
	{
		title: "Specialty Drinks",
		items: [
			{
				title: "Vanilla Oat Latte",
				description: "Subtle vanilla sweetness blended into a creamy latte.",
				price: 5,
			},
			{
				title: "Cold Brew",
				description: "Slow-steeped, smooth, and naturally sweet.",
				price: 4.75,
			},
			{
				title: "Caramel Macchiato",
				description: "Layered caramel, vanilla, and espresso over velvety milk.",
				price: 5.5,
			},
			{
				title: "Hazelnut Frappé",
				description: "Iced espresso blended with hazelnut and cream.",
				price: 5.75,
			},
			{
				title: "Matcha Green Tea Latte",
				description: "Ceremonial-grade matcha whisked with steamed oat milk.",
				price: 5.5,
			},
		],
	},
	{
		title: "Pastries",
		items: [
			{
				title: "Butter Croissant",
				description: "Layers of flaky pastry baked with French butter.",
				price: 3.95,
			},
			{
				title: "Strawberry Cake",
				description: "Vanilla sponge, whipped cream, and fresh strawberries.",
				price: 5.75,
			},
			{
				title: "Danish Pastry",
				description: "Flaky pastry filled with vanilla bean custard.",
				price: 3.95,
			},
			{
				title: "Butterscotch Slice",
				description: "Brown sugar sponge with silky butterscotch frosting.",
				price: 5.95,
			},
		],
	},
	{
		title: "Snacks & Extras",
		items: [
			{
				title: "Bagel with Cream Cheese",
				description: "Warm toasted bagel served with whipped cream cheese.",
				price: 4.25,
			},
			{
				title: "Granola Bar",
				description: "House-made granola bound with honey and almonds.",
				price: 2.5,
			},
			{
				title: "Fruit Cup",
				description: "Seasonal fruit with a hint of fresh mint.",
				price: 4.75,
			},
			{
				title: "Extra Shot of Espresso",
				description: "Boost any drink with an extra shot.",
				price: 1.5,
			},
			{
				title: "Flavored Syrup",
				description: "Choose vanilla, caramel, hazelnut, or seasonal syrup.",
				price: 1.25,
			},
		],
	},
];
