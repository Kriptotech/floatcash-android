import {
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
    Alert,
} from "react-native";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import Dropdown from "react-native-input-select";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import { Header } from "../../components/Header/index";
import { calcFloat } from "./calcFloat";
import { calcDinheiro } from "./calcDinheiro";

export function RequestMoney({ navigation }) {
    const [requestValue, setRequestValue] = useState("");
    const [receiveNumber, setReceiveNumber] = useState("");
    const [choice, setChoice] = useState("Dinheiro");
    const [choice1, setChoice1] = useState("Mpesa");
    const [isLoading, setIsLoading] = useState(false);

    async function changeReciveNumber() {
        let mpesa_agent_code = await AsyncStorage.getItem("mpesa_agent_code");
        setReceiveNumber(mpesa_agent_code);
    }

    async function changeChice1(value) {
        setChoice1(value);

        let emola_agent_code = await AsyncStorage.getItem("emola_agent_code");
        let mpesa_agent_code = await AsyncStorage.getItem("mpesa_agent_code");

        if (value == "Emola") {
            setReceiveNumber(emola_agent_code);
        }
        if (value == "Mpesa") {
            setReceiveNumber(mpesa_agent_code);
        }
    }

    function setValues() {
        let dinheiro = calcDinheiro(requestValue);
        let float = calcFloat(requestValue);

        if (choice == "Dinheiro") {
            let obj = {
                valor_a_entregar: dinheiro?.valor_de_dinheiro_a_entregar,
                valor_a_receber: dinheiro?.valor_de_dinheiro_a_receber,
            };

            return obj;
        } else {
            let obj = {
                valor_a_entregar: float?.valor_de_float_a_entregar,
                valor_a_receber: float?.valor_de_float_a_receber,
            };

            return obj;
        }
    }

    function ConfirmMoneyRequest() {
        if (requestValue.trim() === "") {
            return Alert.alert("Alerta!", "Preencha todos os campos!");
        }
        if (receiveNumber.trim() === "") {
            return Alert.alert("Alerta!", "Preencha todos os campos!");
        }
        if (Number(requestValue) >= 25001) {
            return Alert.alert(
                "Alerta!",
                "Valor a requisitar tem que ser menor que 25000! "
            );
        }

        Alert.alert(
            "Por favor confirme os dados",
            `\nRequisitar ${choice} para ${choice1}\n\nNo valor de ${requestValue}MT\n\nValor a entregar de ${
                setValues()?.valor_a_entregar
            }MT\n\nValor a receber de ${
                setValues()?.valor_a_receber
            }MT\n\nPara o codigo de agente ${
                choice1 == "Mpesa" ? "mpesa" : "emola"
            } numero ${receiveNumber}?
            `,
            [
                {
                    text: "Cancelar",
                    onPress: () => null,
                    style: "cancel",
                },
                {
                    text: "Sim",
                    onPress: () => MakeMoneyRequest(),
                },
            ]
        );
    }

    async function MakeMoneyRequest() {
        let server_url = await AsyncStorage.getItem("server_url");
        let maker = await AsyncStorage.getItem("username");
        let id = await AsyncStorage.getItem("id");

        let obj = {
            data: {
                maker,
                request_value: requestValue,
                maker_id: id,
                request_type: choice == "Dinheiro" ? "money" : "float",
                request_from: choice1 == "Mpesa" ? "mpesa" : "emola",
                number_to_receive: receiveNumber,
                value_to_give: setValues()?.valor_a_entregar,
                value_to_recieve: setValues()?.valor_a_receber,
            },
        };

        setIsLoading(true);

        await fetch(`${server_url}/money_requests/request_money`, {
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
                        text1: "Alerta!",
                        text2: data?.message,
                        bottomOffset: 200,
                        position: "bottom",
                    });
                }
                if (data.success === true) {
                    return Toast.show({
                        type: "success",
                        text1: "Sucesso!",
                        text2: data?.message,
                        bottomOffset: 200,
                        position: "bottom",
                    });
                }
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
                return Toast.show({
                    type: "error",
                    text1: "Erro!",
                    text2: `Erro ao fazer pedido de ${
                        choice == "Dinheiro" ? "dinheiro" : "float"
                    }`,
                });
            });

        setIsLoading(false);
    }

    useEffect(() => {
        changeReciveNumber();
    }, []);

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>
                <View style={styles.login_container}>
                    <View style={styles.login_box}>
                        <Text style={styles.login_h1}>
                            Requisitar Dinheiro/Float
                        </Text>

                        <Dropdown
                            label="Tipo Dinheiro/Float"
                            placeholder="Selecione o Dinheiro/Float..."
                            options={[{ name: "Dinheiro" }, { name: "Float" }]}
                            optionLabel={"name"}
                            optionValue={"name"}
                            selectedValue={choice}
                            onValueChange={(value) => setChoice(value)}
                            primaryColor={"green"}
                        />

                        <Dropdown
                            label="Dinheiro ou float para Mpesa/Emola"
                            placeholder="Selecione o a opção..."
                            options={[{ name: "Mpesa" }, { name: "Emola" }]}
                            optionLabel={"name"}
                            optionValue={"name"}
                            selectedValue={choice1}
                            onValueChange={(value) => changeChice1(value)}
                            primaryColor={"green"}
                        />
                        <Text style={styles.span}>
                            Numero do codigo do agente a receber o valor
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={receiveNumber}
                            keyboardType="numeric"
                            editable={false}
                        />

                        <Text style={styles.span}>Valor a requisitar </Text>
                        <TextInput
                            style={styles.input}
                            value={requestValue}
                            keyboardType="numeric"
                            onChangeText={(text) => setRequestValue(text)}
                        />

                        {isLoading === true && (
                            <TouchableOpacity style={styles.login_button}>
                                <ActivityIndicator
                                    size={"large"}
                                    color={"#fff"}
                                />
                            </TouchableOpacity>
                        )}
                        {isLoading === false && (
                            <TouchableOpacity
                                style={styles.login_button}
                                onPress={() => ConfirmMoneyRequest()}
                            >
                                <Text style={styles.login_button_text}>
                                    Requisitar
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
