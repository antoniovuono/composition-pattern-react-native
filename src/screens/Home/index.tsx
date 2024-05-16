import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PrimaryHeader from "../../components/PrimaryHeader";

export const Home = () => {
	return (
		<View style={styles.container}>
			<PrimaryHeader />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#201d1d",
	},
});
