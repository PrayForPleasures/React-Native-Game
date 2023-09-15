import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "./components/firstScreen/FirstScreen";
import Game from "./components/sections/Game";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="auto" />
			<Stack.Navigator initialRouteName="FirstScreen">
				<Stack.Screen
					name="First"
					options={{
						headerStyle: {
							backgroundColor: "#00ff02",
						},
						title: "Начинай играть в весёлую игру !",
					}}
				>
					{(props) => <FirstScreen {...props} />}
				</Stack.Screen>
				<Stack.Screen name="Game" options={{ title: "Игра пошла" }}>
					{(props) => <Game {...props} />}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
