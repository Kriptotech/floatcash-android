import {
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
    Alert,
} from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import Dropdown from "react-native-input-select";

import styles from "./styles";
import { Header } from "../../components/Header/index";

export function RegisterComition({ navigation }) {
    const [comition, setComition] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [choice1, setChoice1] = useState("Mpesa");
    const [choice2, setChoice2] = useState("Semanal");

    function ConfirmMoneyRequest() {
        if (comition.trim() === "") {
            return Alert.alert("Alerta!", "Preencha todos os campos!");
        }

        Alert.alert(
            "Por favor confirme os dados",
            `\nRegistrar comissão de ${choice1}\n\nNo valor de ${comition}MTs\n\nComo uma comissão ${choice2}?
            `,
            [
                {
                    text: "Cancelar",
                    onPress: () => null,
                    style: "cancel",
                },
                {
                    text: "Sim",
                    onPress: () => registerComition(),
                },
            ]
        );
    }

    async function registerComition() {
        let server_url = await AsyncStorage.getItem("server_url");
        let maker = await AsyncStorage.getItem("username");
        let id = await AsyncStorage.getItem("id");
        let obj = {
            data: {
                maker,
                comition_value: comition,
                maker_id: id,
                request_from: choice1 == "Mpesa" ? "mpesa" : "emola",
                request_format: choice2 == "Semanal" ? "weekly" : "dayly",
            },
        };

        if (maker.trim() === "" && comition.trim() === "") {
            return Toast.show({
                type: "error",
                text1: "Alerta",
                text2: "Preencha todos os campos!",
                visibilityTime: 3000,
                position: "bottom",
                bottomOffset: 200,
            });
        }

        setIsLoading(true);

        await fetch(`${server_url}/comitions/register_comition`, {
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
                    text2: "Erro ao registrar comissão",
                    position: "bottom",
                    bottomOffset: 200,
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
                        <Text style={styles.login_h1}>Registrar comição</Text>
                        <Text style={styles.p}>
                            Preencha os valores abaixo para lançar uma comissão
                        </Text>

                        <Dropdown
                            label="comissão de Mpesa/Emola"
                            placeholder="Selecione o a opção..."
                            options={[{ name: "Mpesa" }, { name: "Emola" }]}
                            optionLabel={"name"}
                            optionValue={"name"}
                            selectedValue={choice1}
                            onValueChange={(value) => setChoice1(value)}
                            primaryColor={"green"}
                        />
                        <Dropdown
                            label="comissão Semanal/Diaria"
                            placeholder="Selecione uma opção..."
                            options={[{ name: "Semanal" }, { name: "Diaria" }]}
                            optionLabel={"name"}
                            optionValue={"name"}
                            selectedValue={choice2}
                            onValueChange={(value) => setChoice2(value)}
                            primaryColor={"green"}
                        />

                        {/* INPUTS  */}
                        <Text style={styles.span}>Valor da comição</Text>
                        <TextInput
                            style={styles.input}
                            value={comition}
                            keyboardType="numeric"
                            onChangeText={(text) => setComition(text)}
                        />

                        {/* BUTTON  */}
                        {isLoading === true ? (
                            <TouchableOpacity style={styles.login_button}>
                                <Text style={styles.login_button_text}>
                                    <ActivityIndicator
                                        size={"large"}
                                        color={"#fff"}
                                    />
                                </Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={styles.login_button}
                                onPress={() => ConfirmMoneyRequest()}
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
