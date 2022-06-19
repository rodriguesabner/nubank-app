import { useState } from "react";
import { ScrollView } from "react-native";
import { Separator } from "./styles";
import Header from "../../components/Header";
import Balance from "../../components/Home/Balance";
import ActionButtons from "../../components/Home/ActionButtons";
import CreditCard from "../../components/Home/CreditCard";
import Investiments from "../../components/Home/Investiments";

function Home() {
    const [showBalance, setShowBalance] = useState(false);

    const handleChangeBalanceVisibility = () => {
        setShowBalance(!showBalance);
    }

    return (
        <ScrollView>
            <Header
                showBalance={showBalance}
                handleChangeBalanceVisibility={handleChangeBalanceVisibility}
            />
            <Balance showBalance={showBalance} />
            <ActionButtons />
            <Separator />
            <CreditCard showBalance={showBalance} />
            <Separator />
            <Investiments />
        </ScrollView>
    )
}

export default Home;