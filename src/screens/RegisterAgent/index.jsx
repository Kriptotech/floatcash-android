import {
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
} from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

import styles from "./styles";
import { Header } from "../../components/Header/index";

export function RegisterAgent({ navigation }) {
    // state
    const [username, setUsername] = useState("");
    const [operator_name, setOperator_name] = useState("");
    const [agent_phone_number, setAgent_phone_number] = useState("");
    const [password, setPassword] = useState("");
    const [mpesa_agent_code, setMpesa_agent_code] = useState("");
    const [emola_agent_code, setEmola_agent_code] = useState("");
    const [operator_phone_number, setOperator_phone_number] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function registerAgent() {
        let server_url = await AsyncStorage.getItem("server_url");
        let obj = {
            data: {
                username,
                operator_name,
                agent_phone_number,
                password,
                mpesa_agent_code,
                emola_agent_code,
                operator_phone_number,
            },
        };

        if (
            username.trim() === "" &&
            operator_name.trim() === "" &&
            agent_phone_number.trim() === "" &&
            password.trim() === "" &&
            mpesa_agent_code.trim() === "" &&
            emola_agent_code.trim() === "" &&
            operator_phone_number.trim() === ""
        ) {
            return Toast.show({
                type: "error",
                text1: "Alerta",
                text2: "Preencha todos os campos!",
                position: "bottom",
                visibilityTime: 3000,
                bottomOffset: 200,
            });
        }

        setIsLoading(true);

        await fetch(`${server_url}/users/register_agent`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false);

                if (data.success === false) {
                    return Toast.show({
                        type: "error",
                        text1: "Erro!",
                        text2: data?.message,
                        position: "bottom",
                        bottomOffset: 200,
                    });
                }
                if (data.success === true) {
                    return Toast.show({
                        type: "success",
                        text1: "Sucesso!",
                        text2: data?.message,
                        position: "bottom",
                        bottomOffset: 200,
                    });
                }
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
                return Toast.show({
                    type: "error",
                    text1: "Erro!",
                    text2: "Erro ao adicionar agente",
                });
            });

        setIsLoading(false);
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>
                <View style={styles.login_container}>
                    <View style={styles.login_box}>
                        <Text style={styles.login_h1}>Registrar agente</Text>
                        <Text style={styles.p}>
                            Preencha os dados para adicionar um agente
                        </Text>

                        {/* INPUTS  */}
                        <Text style={styles.span}>Nome do agente</Text>
                        <TextInput
                            style={styles.input}
                            value={username}
                            onChangeText={(text) => setUsername(text)}
                        />
                        <Text style={styles.span}>
                            Nome do operador do agente{" "}
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={operator_name}
                            onChangeText={(text) => setOperator_name(text)}
                        />
                        <Text style={styles.span}>codigo de agente Mpesa </Text>
                        <TextInput
                            style={styles.input}
                            value={mpesa_agent_code}
                            keyboardType="numeric"
                            onChangeText={(text) => setMpesa_agent_code(text)}
                        />
                        <Text style={styles.span}>codigo de agente Emola </Text>
                        <TextInput
                            style={styles.input}
                            value={emola_agent_code}
                            keyboardType="numeric"
                            onChangeText={(text) => setEmola_agent_code(text)}
                        />
                        <Text style={styles.span}>
                            Numero de celular do agente{" "}
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={agent_phone_number}
                            keyboardType="numeric"
                            onChangeText={(text) => setAgent_phone_number(text)}
                        />
                        <Text style={styles.span}>
                            Numero de celular do operador{" "}
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={operator_phone_number}
                            keyboardType="numeric"
                            onChangeText={(text) =>
                                setOperator_phone_number(text)
                            }
                        />
                        <Text style={styles.span}>
                            Palavra passe do agente{" "}
                        </Text>
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
                                <ActivityIndicator
                                    size={"large"}
                                    color={"#fff"}
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={styles.login_button}
                                onPress={() => registerAgent()}
                            >
                                <Text style={styles.login_button_text}>
                                    CADASTRAR
                                </Text>
                            </TouchableOpacity>
                        )}

                        <Toast />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
