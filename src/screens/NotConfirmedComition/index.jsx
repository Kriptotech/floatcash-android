import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import { Header } from "../../components/Header";
import { useState } from "react";

export function NotConfirmedComition({ navigation, route }) {
    let data = route.params;
    const [isLoading, setIsLoading] = useState(false);

    async function confirmComition() {
        let server_url = await AsyncStorage.getItem("server_url");

        let obj = {
            data: {
                id: data.id,
            },
        };

        setIsLoading(true);

        await fetch(`${server_url}/comitions/confirm_comition`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsLoading(false);

                if (data.success == false) {
                    setIsLoading(false);
                    return Toast.show({
                        type: "error",
                        text1: "Erro!",
                        text2: "Erro ao confirmar comissão",
                    });
                }
                if (data.result.affectedRows == 0) {
                    setIsLoading(false);
                    return Toast.show({
                        type: "error",
                        text2: "Erro",
                        text2: "A comissão já foi confirmada!",
                    });
                }
                if (data.result.affectedRows != 0) {
                    setIsLoading(false);
                    return Toast.show({
                        type: "success",
                        text1: "Sucesso!",
                        text2: data?.message,
                    });
                }
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
                return Toast.show({
                    type: "error",
                    text1: "Erro!",
                    text2: "Erro ao confirmar a comissão",
                });
            });

        setIsLoading(false);
    }
    return (
        <View style={styles.profile_container}>
            <Header navigation={navigation} />

            <ScrollView>
                <View style={styles.box_container}>
                    <View style={styles.box}>
                        <Text style={styles.strong}>Atenção</Text>

                        <Text style={styles.p}>
                            Quando for confirmar, certifique-se primeiro de de
                            que recebeu o dinheiro enviado por este agente e
                            depois confirme a comissão:{" "}
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.strong}>
                            Detalhes desta comissão não confirmada:
                        </Text>

                        <Text style={styles.p}>Comissão feita por: </Text>
                        <Text style={styles.main_text}>{data?.maker}</Text>
                        <Text style={styles.p}>Valor da comissão: </Text>
                        <Text style={styles.main_text}>
                            {data?.comition_value}MTs
                        </Text>
                        <Text style={styles.p}>Comissão do tipo: </Text>
                        <Text style={styles.main_text}>
                            {data?.request_format === "dayly"
                                ? "Diaria"
                                : "Semanal"}
                        </Text>
                        <Text style={styles.p}>Comissão de: </Text>
                        <Text style={styles.main_text}>
                            {data?.request_from === "emola" ? "Emola" : "Mpesa"}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.last_item}>
                            {!isLoading ? (
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => confirmComition()}
                                >
                                    <MaterialIcons
                                        name="check"
                                        color={"#fff"}
                                        size={40}
                                    />
                                </TouchableOpacity>
                            ) : (
                                <View
                                    style={styles.button}
                                    onPress={() => confirmComition()}
                                >
                                    <ActivityIndicator
                                        color={"#fff"}
                                        size={"large"}
                                    />
                                </View>
                            )}
                        </View>
                    </View>

                    <Toast />
                </View>
            </ScrollView>
        </View>
    );
}
