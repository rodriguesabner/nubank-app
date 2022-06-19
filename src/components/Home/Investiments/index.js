import { Alert, Text, View } from 'react-native';
import { Container, TopWrapper, Title, GenericView, GenericWrapper, TextGrayLight } from './styles';
import IonIcons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function Investiments() {
    return (
        <Container onPress={() => Alert.alert("Investimentos")}>
            <TopWrapper>
                <View>
                    <Title>
                        Investimentos
                    </Title>
                    <TextGrayLight>
                        O jeito Nu de investir: sem asteriscos, linguagem é fácil e apartir de R$1. Saiba mais.
                    </TextGrayLight>
                </View>

                <IonIcons name="ios-chevron-forward-outline" size={24} color="#666" />
            </TopWrapper>

            <GenericView>
                <GenericWrapper>
                    <FontAwesome name="money" size={24} color="#333" />
                    <Text style={{ marginLeft: 15 }}>Consultar saldo para transferência</Text>
                </GenericWrapper>
            </GenericView>
        </Container>
    )
}

export default Investiments;