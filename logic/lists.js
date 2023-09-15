// lists

const animalList = [
	{
		id: 1,
		name: "Белочка",
		src: require("../images/belkacolor.jpg"),
		srcM: require("../images/belka.png"),
	},
	{
		id: 2,
		name: "Гусеница",
		src: require("../images/chervColor.jpg"),
		srcM: require("../images/cherv.png"),
	},
	{
		id: 3,
		name: "Курица",
		src: require("../images/chikenColor.jpg"),
		srcM: require("../images/kurica.png"),
	},
	{
		id: 4,
		name: "Корова",
		src: require("../images/cowColor.jpeg"),
		srcM: require("../images/cow.png"),
	},
	{
		id: 5,
		name: "Собака",
		src: require("../images/dogColor.jpeg"),
		srcM: require("../images/dog.png"),
	},
	{
		id: 6,
		name: "Лягушка",
		src: require("../images/frogColor.jpeg"),
		srcM: require("../images/frog.png"),
	},
	{
		id: 7,
		name: "Гриф",
		src: require("../images/grifColor.jpg"),
		srcM: require("../images/grif.png"),
	},
	{
		id: 8,
		name: "Лошадка",
		src: require("../images/horseColor.jpg"),
		srcM: require("../images/horse.png"),
	},
	{
		id: 9,
		name: "Козёл",
		src: require("../images/kozelColor.jpg"),
		srcM: require("../images/kozel.png"),
	},
	{
		id: 10,
		name: "Лев",
		src: require("../images/lionColor.jpg"),
		srcM: require("../images/lion.png"),
	},
	{
		id: 11,
		name: "Лось",
		src: require("../images/losColor.jpg"),
		srcM: require("../images/los.png"),
	},
	{
		id: 12,
		name: "Носорог",
		src: require("../images/nosorogColor.jpeg"),
		srcM: require("../images/nosorog.png"),
	},
	{
		id: 13,
		name: "Попугай",
		src: require("../images/popugaiColor.jpg"),
		srcM: require("../images/popugai.png"),
	},
	{
		id: 14,
		name: "Пума",
		src: require("../images/pumaColor.jpg"),
		srcM: require("../images/puma.png"),
	},
	{
		id: 15,
		name: "Кролик",
		src: require("../images/rabbitColor.jpg"),
		srcM: require("../images/rabbit.png"),
	},
	{
		id: 16,
		name: "Тюлень",
		src: require("../images/seacatColor.jpg"),
		srcM: require("../images/seacat.png"),
	},
	{
		id: 17,
		name: "Страус",
		src: require("../images/strausColor.jpg"),
		srcM: require("../images/straus.png"),
	},
	{
		id: 18,
		name: "Тирэкс",
		src: require("../images/trexColor.jpg"),
		srcM: require("../images/trex.png"),
	},
	{
		id: 19,
		name: "Жираф",
		src: require("../images/zirafColor.jpg"),
		srcM: require("../images/ziraf.png"),
	},
];

export const questions = {
	first: "Угадай! Кто это? ",
	second: "А это кто? ",
	third: "А это? ",
	fourth: "Ты молодец!А это кто? Угадаешь? ",
	fifth: "Попробуй угадай это существо! ",
};

export const smiles = {
	whoIsIt: require("../images/think.gif"),
	goodJob: require("../images/goodJob.gif"),
};

// functions

const m = {};
const animalNumber = [];
const renderAnimal = [];

for (let i = 0; i < 8; i++) {
	const num = Math.floor(Math.random() * (animalList.length - i));
	animalNumber.push((num in m ? m[num] : num) + 1);
	const l = animalList.length - i - 1;
	m[num] = l in m ? m[l] : l;
}

animalList.forEach((el) => {
	animalNumber.forEach((elem) => {
		if (el.id == elem) {
			renderAnimal.push(el);
		}
	});
});

const randomAnimal = Math.floor(Math.random() * renderAnimal.length);
export const mainAnimal = renderAnimal[randomAnimal];

export const renderAnimalFirst = renderAnimal.slice(0, 4);
export const renderAnimalSecond = renderAnimal.slice(4, 8);
