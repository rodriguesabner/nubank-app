import styled from 'styled-components/native';

const Container = styled.TouchableOpacity.attrs({
    activeOpacity: .7,
})`
    padding: 24px;
    flex-direction: column;
`;

const TopWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`;

const Title = styled.Text`
    font-size: 18px;
    font-weight: 800;
`;

const WrapperCredit = styled.View`
    margin-top: 18px;
`;

const Total = styled.Text`
    color: #000;
    font-size: 24px;
    margin: 5px 0;
    font-weight: 700;
`;

const TextGrayLight = styled.Text`
    color: #999;
    font-size: 16px;
    font-weight: 600;
`;

export {
    Container,
    TopWrapper,
    Title,
    WrapperCredit,
    Total,
    TextGrayLight
};