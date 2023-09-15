const animalList = [
	{ id: 1, Белочка: "require('../images/belkacolor.jpg')" },
	{ id: 2, Гусеница: "require('../images/chervColor.jpg')" },
	{ id: 3, Курица: "require('../images/chikenColor.jpg')" },
	{ id: 4, Корова: "require('../images/cowColor.jpeg')" },
	{ id: 5, Собака: "require('../images/dogColor.jpeg')" },
	{ id: 6, Лягушка: "require('../images/frogColor.jpeg')" },
	{ id: 7, Гриф: "require('../images/grifColor.jpg')" },
	{ id: 8, Лошадка: "require('../images/horseColor.jpg')" },
	{ id: 9, Козёл: "require('../images/kozelColor.jpg')" },
	{ id: 10, Лев: "require('../images/lionColor.jpg')" },
	{ id: 11, Лось: "require('../images/losColor.jpg')" },
	{ id: 12, Носорог: "require('../images/nosorogColor.jpeg')" },
	{ id: 13, Попугай: "require('../images/popugaiColor.jpg')" },
	{ id: 14, Пума: "require('../images/pumaColor.jpg')" },
	{ id: 15, Кролик: "require('../images/rabbitColor.jpg')" },
	{ id: 16, Тюлень: "require('../images/seacatColor.jpg')" },
	{ id: 17, Страус: "require('../images/strausColor.jpg')" },
	{ id: 18, Тирэкс: "require('../images/trexColor.jpg')" },
	{ id: 19, Жираф: "require('../images/zirafColor.jpg')" },
];

const m = {};
const animalNumber = [];
const renderAnimal = [];

for (let i = 0; i < 8; i++) {
	const num = Math.floor(Math.random() * (animalList.length - i));
	animalNumber.push((num in m ? m[num] : num) + 1);
	const l = animalList.length - i - 1;
	m[num] = l in m ? m[l] : l;
}

console.log(animalNumber);
