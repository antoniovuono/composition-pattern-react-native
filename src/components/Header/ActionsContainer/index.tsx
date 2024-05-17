import React from 'react';

import {
 Container
} from './styles';

type ActionsButtonProps = {
    children: React.ReactNode;
}

export const ActionsButton = ({children}: ActionsButtonProps) => {
return (
  <Container> 
    {children}
  </Container>
  );
}