import { useState } from "react";
import {
	Alert,
	Modal,
	StyleSheet,
	Text,
	Pressable,
	View,
	Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ModalRight = () => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<View style={styles.modal__box}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}
			>
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
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Text style={styles.modal__text_button}>
									Следующий раунд 😊
								</Text>
							</Pressable>
						</LinearGradient>
					</View>
				</View>
			</Modal>
			<Pressable
				style={[styles.modal__button, styles.modal__open]}
				onPress={() => setModalVisible(true)}
			>
				<Text style={styles.modal__text_button}>Show Modal</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	modal__box: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
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

export default ModalRight;
