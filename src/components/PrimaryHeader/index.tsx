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

type PrimaryHeaderProps = {
	avatar?: string;
	goBack?: boolean;
	notification?: boolean;
	plus?: boolean;
};

export default function PrimaryHeader({
	avatar,
	goBack,
	notification,
	plus,
}: PrimaryHeaderProps) {
	return (
		<Container>
			{goBack ? (
				<ActionsButton>
					<Ionicons name="notifications" size={19} color="white" />
				</ActionsButton>
			) : (
				<>
					<ProfileDetailsContainer>
						<Avatar
							source={{
								uri: avatar,
							}}
						/>

						<Content>Welcome, Antonio</Content>
					</ProfileDetailsContainer>

					<ActionsContainer>
						{notification && (
							<ActionsButton>
								<Ionicons name="notifications" size={19} color="white" />
							</ActionsButton>
						)}

						{plus && (
							<ActionsButton>
								<Ionicons name="add" size={19} color="white" />
							</ActionsButton>
						)}
					</ActionsContainer>
				</>
			)}
		</Container>
	);
}
