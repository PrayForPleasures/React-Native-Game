import { useState, useEffect } from "react";
import { TouchableOpacity, Image, StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Game = ({ navigation }) => {
	const animalsDescription = [
		{
			id: 1,
			name: "Лев",
			img: require("../../images/cowCol.png"),
		},
		{
			id: 2,
			name: "Белочка",
			img: require("../../images/cowCol.png"),
		},
		{
			id: 3,
			name: "Жираф",
			img: require("../../images/cowCol.png"),
		},
		{
			id: 4,
			name: "Птичка",
			img: require("../../images/cowCol.png"),
		},
	];

	const [animal, setAnimal] = useState(animalsDescription);

	return (
		<View style={styles.game__box}>
			<View style={styles.game__minibox}>
				{animal.map((el) => (
					<View style={styles.game__sub_minibox} key={el.id}>
						<Text style={styles.game__minibox_text}>{el.name}</Text>
						<Image style={styles.game__image} key={el.id} source={el.img} />
					</View>
				))}
			</View>
			<View style={styles.game__main_box}>
				<Image
					style={styles.game__main_image}
					source={require("../../images/cow.png")}
				/>
			</View>
			<View style={styles.game__minibox}>
				{animal.map((el) => (
					<View style={styles.game__sub_minibox} key={el.id}>
						<Text style={styles.game__minibox_text}>{el.name}</Text>
						<Image style={styles.game__image} key={el.id} source={el.img} />
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
	},
	game__main_image: {
		margin: 16,
		resizeMode: "contain",
		height: 250,
		width: "80%",
	},
	game__image: {
		resizeMode: "contain",
		width: "100%",
		height: 80,
	},
	game__minibox: {
		flexDirection: "row",
	},
	game__sub_minibox: {
		width: "25%",
	},
	game__main_box: {
		alignItems: "center",
	},
	game__minibox_text: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 18,
	},
});
