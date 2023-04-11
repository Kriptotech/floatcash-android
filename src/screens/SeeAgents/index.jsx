import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TextInput,
    ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import { Header } from "../../components/Header";
import { MaterialIcons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

export function SeeAgents({ navigation }) {
    const [agents, setAgents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    async function getAgents() {
        let server_url = await AsyncStorage.getItem("server_url");

        setIsLoading(true);

        await fetch(`${server_url}/users/get_all_agents`)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false);

                if (data.success === true) {
                    setAgents(data.result);
                }
                if (data.success === false) {
                    return Toast.show({
                        type: "error",
                        text1: "Erro!",
                        text2: "Erro ao pesquisar agentes",
                    });
                }
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
                return Toast.show({
                    type: "error",
                    text1: "Erro!",
                    text2: "Erro ao pesquisar agentes",
                });
            });

        setIsLoading(false);
    }

    useEffect(() => {
        getAgents();
    }, []);

    return (
        <View style={styles.dashboard_container}>
            <Header navigation={navigation} />

            {isLoading ? (
                <View
                    style={{
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 200,
                    }}
                >
                    <ActivityIndicator
                        size={"large"}
                        color={"rgb(30, 151, 231)"}
                    />
                </View>
            ) : (
                <>
                    <View style={styles.row}>
                        <TextInput
                            style={styles.input}
                            value={searchTerm}
                            onChangeText={(text) => setSearchTerm(text)}
                            placeholder="Pesquise por um agente"
                        />
                        <TouchableOpacity style={styles.btn}>
                            <MaterialIcons
                                name="search"
                                color={"#fff"}
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        {/* <Text style={styles.p}>Agentes registrados:</Text> */}
                        <View style={styles.second_row}>
                            {agents
                                ?.filter((v, i) => {
                                    if (searchTerm === "") {
                                        return (
                                            <TouchableOpacity
                                                key={i}
                                                style={styles.second_row_item}
                                                onPress={() =>
                                                    navigation.navigate(
                                                        "agent",
                                                        v
                                                    )
                                                }
                                            >
                                                <Text style={styles.span}>
                                                    Nome: {v?.username}
                                                </Text>
                                                <Text style={styles.span}>
                                                    Celular:{" "}
                                                    {v?.agent_phone_number}
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    } else if (
                                        v?.username
                                            .toLowerCase()
                                            .includes(searchTerm.toLowerCase())
                                    ) {
                                        return (
                                            <TouchableOpacity
                                                key={i}
                                                style={styles.second_row_item}
                                                onPress={() =>
                                                    navigation.navigate(
                                                        "agent",
                                                        v
                                                    )
                                                }
                                            >
                                                <Text style={styles.span}>
                                                    Nome: {v?.username}
                                                </Text>
                                                <Text style={styles.span}>
                                                    Celular:{" "}
                                                    {v?.agent_phone_number}
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    }
                                })
                                .map((v, i) => {
                                    return (
                                        <TouchableOpacity
                                            key={i}
                                            style={styles.second_row_item}
                                            onPress={() =>
                                                navigation.navigate("agent", v)
                                            }
                                        >
                                            <Text style={styles.span}>
                                                Nome: {v?.username}
                                            </Text>
                                            <Text style={styles.span}>
                                                Celular: {v?.agent_phone_number}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                        </View>
                    </ScrollView>

                    <Toast />
                </>
            )}
        </View>
    );
}
