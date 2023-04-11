import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as Notifications from "expo-notifications";

import styles from "./styles.js";
import { colors } from "../../colors.js";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { RouteLinks } from "../../components/RouteLinks/index.jsx";

export function Sidebar({ navigation }) {
    const isFocused = useIsFocused();
    const [username, setUsername] = useState(null);
    const [agent_phone_number, setAgent_phone_number] = useState(null);

    async function getUserData() {
        setUsername(await AsyncStorage.getItem("username"));
        setAgent_phone_number(await AsyncStorage.getItem("agent_phone_number"));
    }

    function schedulePushNotification(data) {
        data?.map((obj) => {
            Notifications.scheduleNotificationAsync({
                content: {
                    title: obj?.title,
                    body: obj?.body,
                    data: { data: "goes here" },
                },
                trigger: { seconds: 2 },
            });
        });
    }

    async function getNotifications() {
        let _user_type = await AsyncStorage.getItem("user_type");
        if (!_user_type || _user_type == null) getNotifications();
        if (_user_type === "agent") return;

        let server_url = await AsyncStorage.getItem("server_url");
        let res = await axios(`${server_url}/users/get_notifications`);

        res.data?.success == true && schedulePushNotification(res.data?.result);

        await axios(`${server_url}/users/delete_notifications`);
    }

    useEffect(() => {
        getUserData();
        getNotifications();
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.top_row}>
                    <View style={styles.person}>
                        <MaterialIcons
                            name="person"
                            color={colors.primary1}
                            size={20}
                        />
                    </View>
                    <View style={styles.small_container}>
                        <Text style={styles.small}>{username}</Text>
                        <Text style={styles.small}>{agent_phone_number}</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons
                            name="close"
                            color={colors.primary1}
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView>
                <RouteLinks navigation={navigation} />
            </ScrollView>
        </View>
    );
}
