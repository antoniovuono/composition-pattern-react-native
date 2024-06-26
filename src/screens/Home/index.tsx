import React from "react";
import { Container } from "./styles";
import { Header } from "../../components";
import { ActionsButton } from "../../components/PrimaryHeader/styles";

// variant 1
export const Home = () => {
	return (
		<Container>
			<Header.Box>
				<Header.ProfileDetailsContainer>
					<Header.Avatar url="https://avatars.githubusercontent.com/u/7297243?s=96&v=4"/>

					<Header.ProfileDetailsContent>
						Bem vindo, Antonio
					</Header.ProfileDetailsContent>
				</Header.ProfileDetailsContainer>

			<Header.ActionsContainer>
				<ActionsButton onPress={() => console.log("notificaton_click")}>
					<Header.Icon iconName="notifications" />
				</ActionsButton>

				<ActionsButton onPress={() => console.log("add_click")}>
					<Header.Icon iconName="add" />
				</ActionsButton>
			</Header.ActionsContainer>
			</Header.Box>

		</Container>
	);
};

// variant 2
// export const Home = () => {
// 	return (
// 		<Container>
// 			<Header.Box>
// 				<Header.ActionsContainer>
// 					<Header.ActionsButton onPress={() => console.log("goBack")}>
// 						<Header.Icon iconName="arrow-back" />
// 					</Header.ActionsButton>
// 				</Header.ActionsContainer>
// 			</Header.Box>

// 		</Container>
// 	);
// };

// variant 3
// export const Home = () => {
// 	return (
// 		<Container>
// 			<Header.Box>
// 				<Header.ProfileDetailsContainer>
// 					<Header.Avatar url="https://avatars.githubusercontent.com/u/7297243?s=96&v=4"/>

// 					<Header.ProfileDetailsContent>
// 						Bem vindo, Antonio
// 					</Header.ProfileDetailsContent>
// 				</Header.ProfileDetailsContainer>

// 			<Header.ActionsContainer>
// 				<ActionsButton onPress={() => console.log("add_click")}>
// 					<Header.Icon iconName="add" />
// 				</ActionsButton>
// 			</Header.ActionsContainer>
// 			</Header.Box>

// 		</Container>
// 	);
// };
