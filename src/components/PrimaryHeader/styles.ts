import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #0d0b0b;
    width: 100%;
    height: 140px;
    padding: 20px;
    flex-direction: row;
    align-items: flex-end;
`;

export const ProfileDetailsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    width: 70%;
`;

export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border-width: 1px;
    border-color: #FFFFFF;
`;

export const Content = styled.Text`
    color: #FFFFFF;
    margin-left: 10px;
`;

export const ActionsContainer = styled.View`
    width: 30%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10px;
`;

export const ActionsButton = styled.TouchableOpacity`
    padding: 6px;
    background-color: #302d2d;
    border-radius: 6px;
`;