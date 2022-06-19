import styled from "styled-components/native"
import { StatusBar } from "react-native";

const Container = styled.View`
    flex-direction: column;
    justify-content: space-between;
    background-color: #9c44dc;
    height: 150px;
    padding-top: ${StatusBar.currentHeight + 10}px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
`;

const WrapperIconProfile = styled.View`
    align-items: center;
    justify-content: center;
    background-color: #bc8ae1;
    padding: 10px;
    border-radius: 50px;

`;

const Text = styled.Text`
    color: #fff;
    font-weight: 500;
    font-size: 16px;
`;

const TopWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const TopRightContent = styled.View`
    flex-direction: row;;
    align-items: center;
`;

export {
    Container,
    Text,
    TopWrapper,
    TopRightContent,
    WrapperIconProfile,
};