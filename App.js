import { StyleSheet, View, StatusBar } from "react-native";
import { colors } from "./src/colors";
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

import CheckMobileVervion from "./CheckMobileVervion";
import { useState } from "react";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

export default function App() {
    const [openApp, setOpenApp] = useState(true);
    // AsyncStorage.setItem("server_url", "http://192.168.42.29:3001");
    AsyncStorage.setItem("server_url", "https://frail-fawn-belt.cyclic.app");

    const [fontLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
    });

    if (!fontLoaded) {
        return null;
    }

    function checkInternetConection() {
        fetch(`https://frail-fawn-belt.cyclic.app/check_current_mobile_version`)
            // fetch(`http://192.168.42.29:3001/check_current_mobile_version`)
            .then((res) => res.json())
            .then((data) => {
                console.log("opening app");
            })
            .catch((err) => {
                console.log("not opening app");
                setOpenApp(false);
            });
    }

    checkInternetConection();

    return (
        <>
            <View style={styles.app_container}>
                <StatusBar animated={true} barStyle="light-content" />
                {openApp && <CheckMobileVervion />}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    app_container: {
        flex: 1,
        backgroundColor: colors.background,
    },
});
