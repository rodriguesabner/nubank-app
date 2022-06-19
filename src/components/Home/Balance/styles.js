import styled from 'styled-components/native';

const Container = styled.View`
    padding: 24px;
`;

const TopWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
    margin-bottom: 10px;
`;

const AccountText = styled.Text`
    color: #000; 
    font-size: 20px;
    font-weight: bold;
`;

const BalanceText = styled.Text`
    color: #000; 
    font-size: 26px;
    font-weight: bold;
`;

export {
    Container,
    TopWrapper,
    AccountText,
    BalanceText
}