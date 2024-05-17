import React from "react";

import { Container } from "./styles";

type ProfileDetailsContainer = {
	children: React.ReactNode;
};

export const ProfileDetailsContainer = ({
	children,
}: ProfileDetailsContainer) => {
	return <Container>{children}</Container>;
};
