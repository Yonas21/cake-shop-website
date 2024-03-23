export const generic = {
	mini: {
		title: "Mini-Cake",
		quantity: 1,
		price: 400,
		description: "One 500g round cake with a custom flavour and note.",
	},
	cup_cake: {
		title: "Cup-Cake",
		quantity: 9,
		price: 350,
		description: "9 Pices of cup-cakes with three different toping.",
	},
	mini_cup: {
		title: "Mini+Cup Cake",
		quantity: "1+5",
		price: 700,
		description:
			"One 500g round cake with a custom flavour and note with 5 Pices of cup-cakes by different toping.",
	},
	slice: {
		title: "Slice Cake",
		quantity: 2,
		price: 150,
		description: "2 Pices of Slice cake with two different custom flavour.",
	},
};

export const non_fasting = {
	title: "Non Fasting",
	price: "450 Per Person",
	includes: [
		"3 Types of slice cake",
		"Donut",
		"Cup-Cake",
		"Bombolino",
		"Tiramisu",
		"Sambusa",
		"Cookies",
		"Mini Pizza",
		"Fruits",
		"Meat Roll",
	],
};

export const fasting = {
	title: "Fasting",
	price: "400 Per Person",
	includes: [
		"2 Types of slice cake",
		"Mini Pizza",
		"Zebra Cake",
		"Sandwich",
		"Maffin",
		"Bombolino",
		"Sambusa",
		"Cookies",
		"Fruits",
		"Vegg Roll",
	],
};

export const special = {
	birthday: {
		title: "Birthday Package",
		price: 1500,
		description: [
			"One 500g round cake with a custom flavour and note.",
			"Five pieces of cup-cakes by different toping.",
			"One mini drink.",
			"Two cup and fork",
			"One Candle",
		],
	},
	couple: {
		title: "Couple Package",
		price: 2300,
		description: [
			"One 500g round cake with a custom flavour and note.",
			"Five pieces of cup-cakes by different toping.",
			"One mini drink.",
			"One bundle of Flower.",
			"Two cup and fork.",
			"One Candle",
		],
	},

	picnic: {
		title: "Picnic Package",
		price: 3500,
		description: [
			"One 500g round cake with a custom flavour and note",
			"Five pieces of cup-cakes by different toping.",
			"One mini drink.",
			"Two Fruit cup.",
			"Candy and chocolates.",
			"One bundle of Flower.",
			"Two cup and fork.",
			"One Candle",
		],
	},
};
