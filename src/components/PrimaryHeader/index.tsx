import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PrimaryHeader() {
	return (
		<View style={styles.container}>
			<View style={styles.profileDetails}>
				<Image
					style={styles.avatar}
					source={{
						uri: "https://avatars.githubusercontent.com/u/7297243?s=96&v=4",
					}}
				/>

				<Text style={styles.profileDetailsContent}>Welcome, Antonio</Text>
			</View>

			<View style={styles.actionsContainer}>
				<TouchableOpacity style={styles.actionsLabel}>
					<Ionicons name="notifications" size={19} color="white" />
				</TouchableOpacity>

				<TouchableOpacity style={styles.actionsLabel}>
					<Ionicons name="add" size={19} color="white" />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#0d0b0b",
		width: "100%",
		height: 140,
		padding: 20,
		flexDirection: "row",
		alignItems: "flex-end",
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 50,
		borderWidth: 1,
		borderColor: "#FFFFFF",
	},
	profileDetails: {
		flexDirection: "row",
		alignItems: "center",
		width: "70%",
	},
	profileDetailsContent: {
		color: "#FFFFFF",
		marginLeft: 10,
	},
	actionsContainer: {
		width: "30%",
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		gap: 10,
	},
	actionsLabel: {
		padding: 6,
		backgroundColor: "#302d2d",
		borderRadius: 6,
	},
});
