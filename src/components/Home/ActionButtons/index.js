import { Alert, Text } from "react-native";
import { Container, WrapperButtons, Button, WrapperIcon, TextButton, MyCardsWrapper, MyCard } from "./styles"
import IonIcons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function ActionButtons() {
    const buttonTop = [{
        id: 1,
        title: "Pix",
        icon: <MaterialCommunityIcons name="transfer" size={24} color="#333" />
    }, {
        id: 2,
        title: "Pagar",
        icon: <IonIcons name="ios-barcode-outline" size={24} color="#333" />
    }, {
        id: 3,
        title: "Transferir",
        icon: <MaterialCommunityIcons name="bank-transfer" size={24} color="#333" />
    }, {
        id: 4,
        title: "Depositar",
        icon: <MaterialCommunityIcons name="bank-transfer-in" size={24} color="#333" />
    }, {
        id: 5,
        title: "Spotify",
        icon: <MaterialCommunityIcons name="spotify" size={24} color="#333" />
    }, {
        id: 6,
        title: "Netflix",
        icon: <MaterialCommunityIcons name="netflix" size={24} color="#333" />
    }]

    const clickTopItem = (str) => {
        Alert.alert(str);
    }

    return (
        <Container>
            <WrapperButtons
                data={buttonTop}
                renderItem={({ item }) => (
                    <Button onPress={() => clickTopItem(item.title)}>
                        <WrapperIcon>
                            {item.icon}
                        </WrapperIcon>

                        <TextButton>
                            {item.title}
                        </TextButton>
                    </Button>
                )}
            />

            <MyCardsWrapper>
                <MyCard>
                    <IonIcons name="ios-wallet-outline" size={24} color="#333" />
                    <Text style={{ marginLeft: 15 }}>Meus Cartões</Text>
                </MyCard>
            </MyCardsWrapper>
        </Container>
    )
}

export default ActionButtons;