import styled from "styled-components/native";

const Container = styled.View``;

const WrapperButtons = styled.FlatList.attrs({
    contentContainerStyle: { paddingLeft: 24, marginTop: 10 },
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    overScrollMode: "never"
})``;

const Button = styled.TouchableOpacity`
    padding-right: 24px;
    justify-content: center;
    align-items: center;
`;

const WrapperIcon = styled.View`
    height: 75px;
    width: 75px;
    background-color: #eee; 
    border-radius: 50px;
    align-items: center; 
    justify-content: center;
`;

const TextButton = styled.Text`
    margin-top: 7px;
    font-weight: bold;
`;

const MyCardsWrapper = styled.View`
    padding: 24px;
`;

const MyCard = styled.TouchableOpacity`
    background-color: #eee;
    flex-direction: row; 
    align-items: center; 
    padding: 16px;
    border-radius: 8px;
    margin-top: 16px;
`;

export {
    Container,
    WrapperButtons,
    Button,
    WrapperIcon,
    TextButton,
    MyCardsWrapper,
    MyCard
}