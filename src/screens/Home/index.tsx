import React from "react";
import PrimaryHeader from "../../components/PrimaryHeader";
import { Container } from "./styles";

export const Home = () => {
	return (
		<Container>
			<PrimaryHeader
				goBack
				avatar="https://avatars.githubusercontent.com/u/7297243?s=96&v=4"
			/>
		</Container>
	);
};
