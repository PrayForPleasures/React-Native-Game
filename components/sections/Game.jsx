import { useState } from "react";
import { TouchableOpacity, Image, StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import {
	renderAnimalFirst,
	renderAnimalSecond,
	mainAnimal,
	questions,
	smiles,
} from "../../logic/lists";
import ModalRight from "../modals/ModalRight";

const Game = ({ navigation }) => {
	const clickAnswer = (el) => {
		if (el.id == mainAnimal.id) {
			console.log(true);
		} else console.log(false);
	};

	return (
		<View style={styles.game__box}>
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
			<ModalRight></ModalRight>
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
		</View>
	);
};
export default Game;

const styles = StyleSheet.create({
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
	},
	game__main_smile: {
		height: 28,
		width: 28,
	},
});
