import React from "react";

import { Container } from "./styles";

type BoxProps = {
	children: React.ReactNode;
};

export const Box = ({ children }: BoxProps) => {
	return <Container>{children}</Container>;
};
