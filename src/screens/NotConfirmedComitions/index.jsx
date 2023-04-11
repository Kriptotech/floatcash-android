import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import { Header } from "../../components/Header";
import Toast from "react-native-toast-message";

export function NotConfirmedComitions({ navigation }) {
    const [comitions, setComitions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showH1, setShowH1] = useState(true);

    async function getComitions() {
        let server_url = await AsyncStorage.getItem("server_url");

        setIsLoading(true);

        await fetch(`${server_url}/comitions/get_all_unconfirmed_comitions`)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false);

                if (data.success === true) {
                    setComitions(data.result);
                }
                if (data.success === false) {
                    setShowH1(false);
                    return Toast.show({
                        type: "error",
                        text1: "Alerta!",
                        text2: data.message,
                        visibilityTime: 1000000,
                        position: "top",
                        topOffset: 200,
                    });
                }
            })
            .catch((err) => {
                setShowH1(false);
                setIsLoading(false);
                console.log(err);
                return Toast.show({
                    type: "error",
                    text1: "Erro!",
                    text2: "Erro ao pesquisar Comissões",
                    visibilityTime: 1000000,
                    position: "top",
                    topOffset: 200,
                });
            });

        setIsLoading(false);
    }

    useEffect(() => {
        getComitions();
    }, []);
    return (
        <View style={styles.dashboard_container}>
            <Header navigation={navigation} />

            {showH1 && (
                <Text style={styles.strong}>Comissões não confirmadas:</Text>
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
                                        "not_confirmed_comition",
                                        v
                                    )
                                }
                            >
                                <Text style={styles.span}>
                                    Nome: {v?.maker}
                                </Text>
                                <Text style={styles.span}>
                                    Valor: {v?.comition_value}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>

            <Toast />
        </View>
    );
}
