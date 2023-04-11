import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
} from "react-native";
import Toast from "react-native-toast-message";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import { useEffect, useState } from "react";

export function UpdateInfo({
    setModalOpened,
    _username,
    updateUserData,
    agent_phone_number,
}) {
    const [number, setNumber] = useState(agent_phone_number);
    const [username, setUsername] = useState(_username);
    const [isLoading, setIsLoading] = useState(false);

    async function storeUserInfo(data) {
        await AsyncStorage.setItem("username", `${username}`);
        await AsyncStorage.setItem("agent_phone_number", `${number}`);

        updateUserData();
    }

    async function updateUserInfo() {
        let server_url = await AsyncStorage.getItem("server_url");
        let id = await AsyncStorage.getItem("id");

        if (number.trim() == "") {
            return Toast.show({
                type: "error",
                text1: "Alerta",
                text2: "Insira um numero de celular!",
                visibilityTime: 2000,
            });
        }
        if (number.length < 9 || number.length > 9) {
            return Toast.show({
                type: "error",
                text1: "Alerta",
                text2: "O numero de celular tem que ter 9 digitos! ",
            });
        }

        if (username.length < 3) {
            return Toast.show({
                type: "error",
                text1: "Alerta",
                text2: "O nome tem que ter pelo menos 3 caracteres!",
            });
        }

        let obj = {
            data: {
                id,
                username,
                agent_phone_number: number,
            },
        };

        setIsLoading(true);

        await fetch(`${server_url}/users/update_info`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                storeUserInfo();

                setIsLoading(false);

                if (data.success === false) {
                    return Toast.show({
                        type: "error",
                        text1: "Sucesso!",
                        text2: data?.message,
                    });
                }

                if (data.success === true) {
                    return Toast.show({
                        type: "success",
                        text1: "Sucesso!",
                        text2: "Dados atualizados com sucesso",
                    });
                }
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
                return Toast.show({
                    type: "error",
                    text1: "Erro!",
                    text2: "Erro ao atualizar os dados",
                });
            });

        setIsLoading(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.row1}>
                    <Text style={styles.span}>Editar perfil:</Text>

                    <TouchableOpacity
                        style={styles.close}
                        onPress={() => setModalOpened(false)}
                    >
                        <MaterialIcons name="close" color="#fff" size={25} />
                    </TouchableOpacity>
                </View>

                <View style={styles.row2}>
                    <TextInput
                        style={styles.input}
                        value={username}
                        placeholder="Nome"
                        onChangeText={(text) => setUsername(text)}
                    />

                    <TextInput
                        style={styles.input}
                        value={number}
                        keyboardType="numeric"
                        placeholder="Celular pessoal"
                        onChangeText={(text) => setNumber(text)}
                    />

                    {isLoading ? (
                        <View style={styles.btn}>
                            <ActivityIndicator size="large" color="#fff" />
                        </View>
                    ) : (
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => updateUserInfo()}
                        >
                            <Text style={styles.btn_txt}>Atualizar dados</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <Toast />
            </View>
        </View>
    );
}
