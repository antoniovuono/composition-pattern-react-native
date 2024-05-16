import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
	ActionsButton,
	ActionsContainer,
	Avatar,
	Container,
	Content,
	ProfileDetailsContainer,
} from "./styles";

export default function PrimaryHeader() {
	return (
		<Container>
			<ProfileDetailsContainer>
				<Avatar
					source={{
						uri: "https://avatars.githubusercontent.com/u/7297243?s=96&v=4",
					}}
				/>

				<Content>Welcome, Antonio</Content>
			</ProfileDetailsContainer>

			<ActionsContainer>
				<ActionsButton>
					<Ionicons name="notifications" size={19} color="white" />
				</ActionsButton>

				<ActionsButton>
					<Ionicons name="add" size={19} color="white" />
				</ActionsButton>
			</ActionsContainer>
		</Container>
	);
}
