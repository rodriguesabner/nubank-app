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

const TextGrayLight = styled.Text`
    color: #666;
    font-size: 14px;
    margin-top: 14px;
`;

const GenericView = styled.View`
    padding: 0;
`;

const GenericWrapper = styled.View`
    background-color: #eee;
    flex-direction: row; 
    align-items: center; 
    padding: 16px;
    border-radius: 8px;
    margin-top: 16px;
`;

export {
    Container,
    TopWrapper,
    Title,
    TextGrayLight,
    GenericView,
    GenericWrapper
};