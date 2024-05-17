import React from "react";

import { Content } from "./styles";

type ProfileDetailsContentProps = {
	children: React.ReactNode;
};

export const ProfileDetailsContent = ({
	children,
}: ProfileDetailsContentProps) => {
	return (
		<Content>{children}</Content>
	)
};
