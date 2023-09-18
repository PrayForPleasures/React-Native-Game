import { useState } from "react";
import {
	TouchableOpacity,
	Image,
	StyleSheet,
	View,
	Text,
	Modal,
	Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { questions, smiles, animalList } from "../../logic/lists";

const Game = ({ navigation }) => {
	const [score, setScore] = useState(0);
	const [modalVisible, setModalVisible] = useState(false);

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
	const mainAnimal = renderAnimal[randomAnimal];
	const renderAnimalFirst = renderAnimal.slice(0, 4);
	const renderAnimalSecond = renderAnimal.slice(4, 8);

	const clickAnswer = (el) => {
		if (el.id == mainAnimal.id) {
			setScore(score + 100);
			setModalVisible(true);
		} else console.log(false);
	};

	const hideModal = () => {
		setModalVisible(!modalVisible);
	};

	return (
		<View style={styles.game__box}>
			<View style={styles.game__score}>
				<Text style={styles.game__score_text}>Очки: {score}</Text>
			</View>
			<View style={styles.game__minibox}>
				{renderAnimalFirst.map((el) => (
					<View style={styles.game__sub_minibox} key={el.id}>
						<Image style={styles.game__image} key={el.id} source={el.src} />
						<TouchableOpacity onPress={() => clickAnswer(el)}>
							<LinearGradient
								style={styles.game__gradient}
								colors={["whitesmoke", "lightgreen"]}
								start={{ x: 0.1, y: 0.4 }}
							>
								<Text style={styles.game__minibox_text}>{el.name}</Text>
							</LinearGradient>
						</TouchableOpacity>
					</View>
				))}
			</View>

			<View style={styles.game__main_box}>
				<Text style={styles.game__main_box_text}>
					{questions.first}
					<Image style={styles.game__main_smile} source={smiles.whoIsIt} />
				</Text>
				<Image style={styles.game__main_image} source={mainAnimal.srcM} />
			</View>
			<View style={styles.game__minibox}>
				{renderAnimalSecond.map((el) => (
					<View style={styles.game__sub_minibox} key={el.id}>
						<TouchableOpacity onPress={() => clickAnswer(el)}>
							<LinearGradient
								style={styles.game__gradient}
								colors={["lightgreen", "whitesmoke"]}
								start={{ x: 0.1, y: 0.4 }}
							>
								<Text style={styles.game__minibox_text}>{el.name}</Text>
							</LinearGradient>
						</TouchableOpacity>
						<Image style={styles.game__image} key={el.id} source={el.src} />
					</View>
				))}
			</View>

			<View style={styles.modal__box}>
				<Modal animationType="fade" transparent={true} visible={modalVisible}>
					<View style={styles.modal__box}>
						<View style={styles.modal__box_view}>
							<Text style={styles.modal__box_text}>
								<Image
									style={styles.modal__smiles}
									source={require("../../images/dance.gif")}
								></Image>
								&nbsp;Ты молодец!&nbsp;
								<Image
									style={styles.modal__smiles}
									source={require("../../images/dance.gif")}
								></Image>
							</Text>
							<LinearGradient
								style={styles.modal__gradient}
								colors={["lightgreen", "whitesmoke"]}
								start={{ x: 0.4, y: 0.4 }}
							>
								<Pressable
									style={[styles.modal__button, styles.modal__continue]}
									onPress={() => hideModal()}
								>
									<Text style={styles.modal__text_button}>
										Следующий раунд 😊
									</Text>
								</Pressable>
							</LinearGradient>
						</View>
					</View>
				</Modal>
			</View>
		</View>
	);
};
export default Game;

const styles = StyleSheet.create({
	game__score_text: {
		fontWeight: "bold",
		fontSize: 16,
		borderWidth: 2,
		borderRadius: 8,
		paddingLeft: 20,
		paddingRight: 20,
	},
	game__score: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		paddingBottom: 4,
	},
	game__box: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "lightgreen",
		height: "100%",
		padding: 16,
		justifyContent: "space-between",
	},
	game__main_image: {
		margin: 16,
		resizeMode: "contain",
		height: 250,
		width: "80%",
	},
	game__image: {
		resizeMode: "cover",
		width: "100%",
		height: 120,
		borderWidth: 2,
		borderRadius: 8,
		marginTop: 4,
		marginBottom: 4,
	},
	game__minibox: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	game__sub_minibox: {
		width: "24%",
	},
	game__main_box: {
		alignItems: "center",
	},
	game__minibox_text: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 16,
		borderWidth: 2,
		borderRadius: 8,
		paddingTop: 12,
		paddingBottom: 12,
	},
	game__gradient: { borderRadius: 8 },
	game__main_box_text: {
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 16,
	},
	game__main_smile: {
		height: 28,
		width: 28,
	},
	modal__box: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "lightgreen",
	},
	modal__box_view: {
		margin: 20,
		backgroundColor: "lightyellow",
		borderWidth: 2,
		borderRadius: 8,
		padding: 35,
		alignItems: "center",
		shadowColor: "#222222",
		shadowOffset: {
			width: 10,
			height: 10,
		},
		shadowOpacity: 0.5,
		shadowRadius: 4,
		elevation: 5,
	},
	modal__button: {
		borderRadius: 8,
		padding: 10,
		elevation: 2,
	},

	modal__continue: {
		borderRadius: 8,
		borderWidth: 2,
	},
	modal__text_button: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 16,
	},
	modal__box_text: {
		marginBottom: 15,
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 16,
	},
	modal__smiles: {
		height: 28,
		width: 28,
	},
	modal__gradient: { borderRadius: 8 },
});
