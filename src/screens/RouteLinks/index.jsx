import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

import styles from "./styles";
import { Header } from "../Header";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../colors";

export function Dashboard({ navigation }) {
    const isFocused = useIsFocused();
    const [user_type, setUser_type] = useState(null);

    async function getUserData() {
        let info = await AsyncStorage.getItem("user_type");

        if (!info || info == null) getUserData();

        setUser_type(info);
    }

    useEffect(() => {
        getUserData();
    }, [isFocused]);

    return (
        <View style={styles.dashboard_container}>
            <Header navigation={navigation} />

            <ScrollView>
                {/* <View style={styles.first_row}>
                    <TouchableOpacity style={styles.first_row_item}>
                        <View style={styles.circle}>
                            <MaterialIcons name="hail" color="#fff" size={25} />
                        </View>
                        <View>
                            <Text style={styles.first_row_item_p}>7</Text>
                            <Text style={styles.first_row_item_p}>
                                Comições
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.first_row_item}>
                        <View style={styles.circle}>
                            <MaterialIcons
                                name="dangerous"
                                color="#fff"
                                size={25}
                            />
                        </View>
                        <View>
                            <Text style={styles.first_row_item_p}>7</Text>
                            <Text style={styles.first_row_item_p}>
                                Pedidos de float
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.first_row_item,
                            styles.first_row_item_large,
                        ]}
                    >
                        <View style={styles.circle}>
                            <MaterialIcons name="10mp" color="#fff" size={25} />
                        </View>
                        <View>
                            <Text style={styles.first_row_item_p}>7</Text>
                            <Text style={styles.first_row_item_p}>
                                Pedidos de dinheiro
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View> */}
                {/* user_type == "admin"
                        ? "Administrador"
                        : user_type == "agent" && "Agente" */}
                <View style={styles.btn_list}>
                    {user_type == "admin" && (
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() =>
                                navigation.navigate("register_agent")
                            }
                        >
                            <MaterialIcons
                                name="person-add"
                                color={colors.primary1}
                                size={30}
                            />
                            <Text style={styles.item_text}>
                                Registrar Agente
                            </Text>
                        </TouchableOpacity>
                    )}

                    {user_type == "admin" && (
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() => navigation.navigate("see_agents")}
                        >
                            <MaterialIcons
                                name="remove-red-eye"
                                color={colors.primary1}
                                size={30}
                            />
                            <Text style={styles.item_text}>Ver Agentes</Text>
                        </TouchableOpacity>
                    )}

                    {user_type == "agent" && (
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() =>
                                navigation.navigate("register_comition")
                            }
                        >
                            <MaterialIcons
                                name="plus-one"
                                color={colors.primary1}
                                size={30}
                            />
                            <Text style={styles.item_text}>Lançar comição</Text>
                        </TouchableOpacity>
                    )}

                    {user_type == "agent" && (
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() => navigation.navigate("request_money")}
                        >
                            <MaterialIcons
                                name="request-page"
                                color={colors.primary1}
                                size={30}
                            />
                            <Text style={styles.item_text}>
                                Requsitar dinheiro/float
                            </Text>
                        </TouchableOpacity>
                    )}

                    {user_type == "admin" && (
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() =>
                                navigation.navigate(
                                    "not_confirmed_money_requests"
                                )
                            }
                        >
                            <MaterialIcons
                                name="monetization-on"
                                color={colors.primary1}
                                size={30}
                            />
                            <Text style={styles.item_text}>
                                Requisições de float/dinheiro não confirmadas
                            </Text>
                        </TouchableOpacity>
                    )}

                    {user_type == "admin" && (
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() =>
                                navigation.navigate("not_confirmed_comitions")
                            }
                        >
                            <MaterialIcons
                                name="view-list"
                                color={colors.primary1}
                                size={30}
                            />
                            <Text style={styles.item_text}>
                                Comições não confirmadas
                            </Text>
                        </TouchableOpacity>
                    )}

                    {user_type == "admin" && (
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() => navigation.navigate("comitions")}
                        >
                            <MaterialIcons
                                name="view-list"
                                color={colors.primary1}
                                size={30}
                            />
                            <Text style={styles.item_text}>
                                Comições confirmadas
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>

                {/* <Text style={styles.p}>Ultimos 3 registros:</Text>
                <View style={styles.second_row}>
                    <TouchableOpacity style={styles.second_row_item}>
                        <Text style={styles.span}>Registro: 1.49</Text>
                        <Text style={styles.span}>Feito em: 10/04/2022</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.second_row_item}>
                        <Text style={styles.span}>Registro: 1.49</Text>
                        <Text style={styles.span}>Feito em: 10/04/2022</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.second_row_item}>
                        <Text style={styles.span}>Registro: 1.49</Text>
                        <Text style={styles.span}>Feito em: 10/04/2022</Text>
                    </TouchableOpacity>
                </View> */}
            </ScrollView>
        </View>
    );
}
