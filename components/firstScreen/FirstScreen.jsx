import { useRef } from "react";
import {
	Animated,
	TouchableOpacity,
	StyleSheet,
	View,
	Image,
	Text,
	Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { animated, useSpring } from "@react-spring/native";

export default function FirstScreen({ navigation }) {
	const value = useRef(new Animated.Value(0)).current;
	const startAnimate = () => {
		Animated.timing(value, {
			toValue: 5,
			duration: 10000,
			useNativeDriver: true,
		}).start();
	};

	const startPlayButton = () => {
		startAnimate();
		setTimeout(() => {
			navigation.navigate("Game");
		}, 1200);
	};
	return (
		<LinearGradient
			style={styles.startScreen__box}
			colors={["#00ff02", "whitesmoke", "#00ff02"]}
			start={{ x: 1, y: 0.15 }}
		>
			<Animated.View
				style={{
					transform: [
						{
							scale: value.interpolate({
								inputRange: [0, 0.5],
								outputRange: [1, 2],
							}),
						},
					],
					justifyContent: "center",
					backgroundColor: "transparent",
				}}
			>
				<Image
					style={styles.startScreen__image}
					source={require("../../images/sheep.png")}
				/>
			</Animated.View>
			<View style={styles.startScreen__action_container}>
				<TouchableOpacity onPress={startPlayButton}>
					<Text style={styles.text}>Начать игру !</Text>
				</TouchableOpacity>
			</View>
		</LinearGradient>
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
