import { Container, TopWrapper, AccountText, BalanceText } from './styles';
import IonIcons from '@expo/vector-icons/Ionicons';

function Balance({ showBalance }) {
    const currentBalance = 'R$ 900.812,15';

    return (
        <Container>
            <TopWrapper>
                <AccountText>Conta</AccountText>
                <IonIcons name="ios-chevron-forward-outline" size={24} color="#666" />
            </TopWrapper>

            <BalanceText>
                {showBalance ? currentBalance : "*****" }
            </BalanceText>
        </Container>
    )
}

export default Balance;