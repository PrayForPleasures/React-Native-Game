import { renderAnimalFirst, renderAnimalSecond, mainAnimal } from "./lists";

const answerAnimal = [...renderAnimalFirst, ...renderAnimalSecond];

const clickAnswer = () => {
	console.log("click");
};

export default clickAnswer;
