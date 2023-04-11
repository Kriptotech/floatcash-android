import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    Alert,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import { Header } from "../../components/Header";

export function NotConfirmedMoneyRequests({ navigation }) {
    const [comitions, setComitions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showH1, setShowH1] = useState(true);

    async function getComitions() {
        let server_url = await AsyncStorage.getItem("server_url");

        setIsLoading(true);

        await fetch(
            `${server_url}/money_requests/get_all_unconfirmed_money_requests`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    setComitions(data.result);
                }
                if (data.success === false) {
                    setShowH1(false);

                    Alert.alert("Alerta", data.message);
                }
            })
            .catch((err) => {
                setShowH1(false);
                console.log(err);
                Alert.alert("Erro", "Erro ao pesquisar Comissões");
            });

        setIsLoading(false);
    }

    useEffect(() => {
        getComitions();
    }, []);
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />

            {showH1 && (
                <Text style={styles.strong}>
                    Requisições de float/dinheiro não confirmadas:
                </Text>
            )}

            {isLoading && (
                <View
                    style={{
                        justifyContent: "center",
                        alignContent: "center",
                        marginTop: 150,
                    }}
                >
                    <ActivityIndicator
                        color={"rgb(30, 151, 231)"}
                        size={"large"}
                    />
                </View>
            )}

            <ScrollView>
                <View style={styles.second_row}>
                    {comitions?.map((v, i) => {
                        return (
                            <TouchableOpacity
                                key={i}
                                style={styles.second_row_item}
                                onPress={() =>
                                    navigation.navigate(
                                        "not_confirmed_money_request",
                                        v
                                    )
                                }
                            >
                                <Text style={styles.span}>
                                    Nome: {v?.maker}
                                </Text>
                                <Text style={styles.span}>
                                    Valor: {v?.request_value}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
}
