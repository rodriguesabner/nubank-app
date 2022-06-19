import { Container, Text, TopWrapper, TopRightContent, WrapperIconProfile } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Pressable } from "react-native";

function Header({ showBalance, handleChangeBalanceVisibility }) {
    const renderEyeIcon = () => {
        if (showBalance) {
            return <Feather name="eye" size={24} color="#fff" />
        } else {
            return <Feather name="eye-off" size={24} color="#fff" />
        }
    }

    const pressEyeButton = () => {
        handleChangeBalanceVisibility();
    }

    return (
        <Container>
            <TopWrapper>
                <WrapperIconProfile>
                    <AntDesign name="user" size={24} color="#fff" />
                </WrapperIconProfile>

                <TopRightContent>
                    <Pressable onPress={() => pressEyeButton()}>
                        {renderEyeIcon()}
                    </Pressable>

                    <AntDesign
                        name="questioncircleo"
                        size={22}
                        color="#fff"
                        style={{ marginHorizontal: 24 }}
                    />

                    <MaterialCommunityIcons name="email-plus-outline" size={24} color="#fff" />
                </TopRightContent>
            </TopWrapper>

            <Text>
                Olá, Abner
            </Text>
        </Container>
    )
}

export default Header;