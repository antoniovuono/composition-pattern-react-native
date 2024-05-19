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
	onGoBack?: () => void;
	onNotification?: () => void;
	onAdd?: () => void;
};

export default function PrimaryHeader({
	avatar,
	goBack,
	notification,
	plus,
	onGoBack,
	onNotification,
	onAdd,
}: PrimaryHeaderProps) {
	return (
		<Container>
			{goBack ? (
				<ActionsButton onPress={onGoBack}>
					<Ionicons name="arrow-back" size={19} color="white" />
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
							<ActionsButton onPress={onNotification}>
								<Ionicons name="notifications" size={19} color="white" />
							</ActionsButton>
						)}

						{plus && (
							<ActionsButton onPress={onAdd}>
								<Ionicons name="add" size={19} color="white" />
							</ActionsButton>
						)}
					</ActionsContainer>
				</>
			)}
		</Container>
	);
}
