import { View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import * as Notifications from "expo-notifications";

import styles from "./styles";
import { Header } from "../../components/Header";
import { RouteLinks } from "../../components/RouteLinks";
import { InfoBoxes } from "../../components/InfoBoxes";

export function Dashboard({ navigation }) {
    const isFocused = useIsFocused();
    const [user_type, setUser_type] = useState(null);

    async function getUserData() {
        let info = await AsyncStorage.getItem("user_type");
        if (!info || info == null) getUserData();

        setUser_type(info);
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
        <View style={styles.dashboard_container}>
            <Header navigation={navigation} />

            <ScrollView>
                <InfoBoxes navigation={navigation} user_type={user_type} />

                <RouteLinks navigation={navigation} />
            </ScrollView>
        </View>
    );
}
