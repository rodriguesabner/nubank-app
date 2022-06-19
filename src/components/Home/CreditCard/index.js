import { Alert, Text } from 'react-native';
import { Container, TopWrapper, Title, WrapperCredit, TextGrayLight, Total } from './styles';
import IonIcons from '@expo/vector-icons/Ionicons';

function CreditCard({ showBalance }) {
    const currentBalance = 'R$ 1.094,80';
    const limitCreditCard = 'R$ 730,00';

    return (
        <Container onPress={() => {Alert.alert("Cartão de Crédito")}}>
            <Text>
                <IonIcons name="ios-card-outline" size={24} color="#333" />
            </Text>
            <TopWrapper>
                <Title>
                    Cartão de crédito
                </Title>

                <IonIcons name="ios-chevron-forward-outline" size={24} color="#666" />
            </TopWrapper>

            <WrapperCredit>
                <TextGrayLight>
                    Fatura atual
                </TextGrayLight>

                <Total>
                    {showBalance ? currentBalance : "*****"}
                </Total>

                <TextGrayLight>
                    Limite disponível: {showBalance ? limitCreditCard : "*****"}
                </TextGrayLight>
            </WrapperCredit>
        </Container>
    )
}

export default CreditCard;