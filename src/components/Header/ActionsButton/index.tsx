import React from 'react';
import { Container } from './styles';
import { TouchableOpacityProps } from 'react-native';

type ActionsButtonProps = TouchableOpacityProps & {
    children: React.ReactNode;
    onPress: () => void; 
}

export const ActionsButton = ({children, ...rest}: ActionsButtonProps) => {
return (
  <Container {...rest}> 
    {children}
  </Container>
  );
}