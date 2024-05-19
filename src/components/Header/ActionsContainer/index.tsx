import React from 'react';

import {
 Container
} from './styles';

type ActionsContainerProps = {
    children: React.ReactNode;
}

export const ActionsContainer = ({children}: ActionsContainerProps) => {
return (
  <Container> 
    {children}
  </Container>
  );
}