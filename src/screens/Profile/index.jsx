import { View, ScrollView, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

import styles from "./styles";
import { Header } from "../../components/Header";
import { Content } from "./Content";
import { UpdateInfo } from "./Update_Info/index";
import { useEffect, useState } from "react";

export function Profile({ navigation }) {
    const [modalOpened, setModalOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const isFocused = useIsFocused();

    const [username, setUsername] = useState(null);
    const [user_type, setUser_type] = useState(null);
    const [operator_name, setOperator_name] = useState(null);
    const [emola_agent_code, setEmola_agent_code] = useState(null);
    const [mpesa_agent_code, setMpesa_agent_code] = useState(null);
    const [agent_phone_number, setAgent_phone_number] = useState(null);
    const [operator_phone_number, setOperator_phone_number] = useState(null);

    async function getUserData() {
        let info = await AsyncStorage.getItem("username");

        if (!info || info == null) {
            getUserData();
        }

        setUsername(await AsyncStorage.getItem("username"));
        setUser_type(await AsyncStorage.getItem("user_type"));
        setOperator_name(await AsyncStorage.getItem("operator_name"));
        setEmola_agent_code(await AsyncStorage.getItem("emola_agent_code"));
        setMpesa_agent_code(await AsyncStorage.getItem("mpesa_agent_code"));
        setAgent_phone_number(await AsyncStorage.getItem("agent_phone_number"));
        setOperator_phone_number(
            await AsyncStorage.getItem("operator_phone_number")
        );
    }
    async function updateUserData() {
        setUsername(await AsyncStorage.getItem("username"));
        setUser_type(await AsyncStorage.getItem("user_type"));
        setOperator_name(await AsyncStorage.getItem("operator_name"));
        setEmola_agent_code(await AsyncStorage.getItem("emola_agent_code"));
        setMpesa_agent_code(await AsyncStorage.getItem("mpesa_agent_code"));
        setAgent_phone_number(await AsyncStorage.getItem("agent_phone_number"));
        setOperator_phone_number(
            await AsyncStorage.getItem("operator_phone_number")
        );
    }
    async function logOut() {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("id");
        await AsyncStorage.removeItem("username");
        await AsyncStorage.removeItem("user_type");
        await AsyncStorage.removeItem("operator_name");
        await AsyncStorage.removeItem("emola_agent_code");
        await AsyncStorage.removeItem("mpesa_agent_code");
        await AsyncStorage.removeItem("agent_phone_number");
        await AsyncStorage.removeItem("operator_phone_number");

        navigation.navigate("login");
    }

    useEffect(() => {
        getUserData();
    }, [isFocused]);

    return (
        <View style={styles.profile_container}>
            <Header navigation={navigation} />

            <ScrollView>
                {!modalOpened ? (
                    <Content
                        setModalOpened={setModalOpened}
                        username={username}
                        operator_name={operator_name}
                        user_type={user_type}
                        emola_agent_code={emola_agent_code}
                        agent_phone_number={agent_phone_number}
                        mpesa_agent_code={mpesa_agent_code}
                        operator_phone_number={operator_phone_number}
                        logOut={() => logOut()}
                    />
                ) : (
                    <UpdateInfo
                        _username={username}
                        agent_phone_number={agent_phone_number}
                        updateUserData={updateUserData}
                        setModalOpened={setModalOpened}
                    />
                )}
            </ScrollView>
        </View>
    );
}
