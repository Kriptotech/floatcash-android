import {
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
    BackHandler,
    Alert,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

export function Login({ navigation }) {
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Sair do aplicativo", "Desseja sair do aplicativo?", [
                {
                    text: "cancelar",
                    onPress: () => null,
                    style: "cancel",
                },
                {
                    text: "Sim",
                    onPress: () => BackHandler.exitApp(),
                },
            ]);

            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    }, []);

    async function storeUserInfo(data) {
        await AsyncStorage.setItem("token", `${data?.token}`);
        await AsyncStorage.setItem("id", `${data?.userData?.id}`);
        await AsyncStorage.setItem("username", `${data?.userData?.username}`);
        await AsyncStorage.setItem("user_type", `${data?.userData?.user_type}`);
        await AsyncStorage.setItem(
            "operator_name",
            `${data?.userData?.operator_name}`
        );
        await AsyncStorage.setItem(
            "emola_agent_code",
            `${data?.userData?.emola_agent_code}`
        );
        await AsyncStorage.setItem(
            "mpesa_agent_code",
            `${data?.userData?.mpesa_agent_code}`
        );
        await AsyncStorage.setItem(
            "agent_phone_number",
            `${data?.userData?.agent_phone_number}`
        );
        await AsyncStorage.setItem(
            "operator_phone_number",
            `${data?.userData?.operator_phone_number}`
        );

        navigation.navigate("first_tab_nav");
    }

    async function login() {
        let server_url = await AsyncStorage.getItem("server_url");

        if (number.trim() == "") {
            return Alert.alert("Alerta", "Insira um numero de celular!");
        }
        if (number.length < 9 || number.length > 9) {
            return Alert.alert(
                "Alerta",
                "O numero de celular tem que ter 9 digitos!"
            );
        }
        if (password.trim() == "") {
            return Alert.alert("Alerta", "Insira uma palavra passe!");
        }
        if (password.length < 8) {
            return Alert.alert(
                "Alerta",
                "A palavra passe tem que ter no minimo 8 caracteres!"
            );
        }

        let obj = {
            data: {
                agent_phone_number: number,
                password: password,
            },
        };

        setIsLoading(true);

        await fetch(`${server_url}/users/login`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.success == false) {
                    Alert.alert("Erro", data?.message);
                }
                if (data?.success == true) {
                    storeUserInfo(data);
                }
            })
            .catch((err) => {
                console.log(err);
                Alert.alert("Erro", "Erro ao fazer login");
            });

        setIsLoading(false);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.login_container}>
                    <View style={styles.login_box}>
                        <Text style={styles.login_h1}>SEJA BEM VINDO</Text>
                        <Text style={styles.p}>
                            Faça login para acessar a plataforma
                        </Text>

                        {/* INPUTS  */}
                        <Text style={styles.span}>Numero de celular:</Text>
                        <TextInput
                            style={styles.input}
                            value={number}
                            keyboardType="numeric"
                            onChangeText={(text) => setNumber(text)}
                        />

                        <Text style={styles.span}>Palavra passe</Text>
                        <TextInput
                            style={styles.input}
                            value={password}
                            keyBoardType="password"
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                        />

                        {/* BUTTON  */}
                        {isLoading === true ? (
                            <TouchableOpacity style={styles.login_button}>
                                <ActivityIndicator size="large" color="#fff" />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={styles.login_button}
                                onPress={() => login()}
                            >
                                <Text style={styles.login_button_text}>
                                    Entrar
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
