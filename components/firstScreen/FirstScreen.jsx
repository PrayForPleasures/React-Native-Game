import { TouchableOpacity, StyleSheet, View, Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function FirstScreen({ navigation }) {
	return (
		<View style={styles.startScreen__box}>
			<Image
				style={styles.startScreen__image}
				source={require("../../images/sheep.png")}
			/>
			<View style={styles.startScreen__action_container}>
				<TouchableOpacity onPress={() => navigation.navigate("Game")}>
					<Text style={styles.text}>Начать игру !</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	startScreen__action_container: {
		alignItems: "center",
		marginBottom: 100,
	},
	startScreen__box: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		height: "100%",
		backgroundColor: "orange",
	},
	startScreen__image: {
		resizeMode: "contain",
		height: 200,
		width: "auto",
	},
	text: {
		padding: 25,
		color: "#222222",
		borderColor: "#222222",
		backgroundColor: "transparent",
		borderWidth: 3,
		borderRadius: 20,
		fontSize: 24,
		fontWeight: "bold",
	},
});
