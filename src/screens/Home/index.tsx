import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PrimaryHeader from "../../components/PrimaryHeader";
import { Container } from "./styles";

export const Home = () => {
	return (
		<Container>
			<PrimaryHeader
				notification
				plus
				avatar="https://avatars.githubusercontent.com/u/7297243?s=96&v=4"
			/>
		</Container>
	);
};
