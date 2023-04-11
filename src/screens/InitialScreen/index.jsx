import { View } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

import styles from "./styles";

export function InitialScreen({ navigation }) {
    const isFocused = useIsFocused();

    async function check_logged_in() {
        let info = await AsyncStorage.getItem("username");

        if (!info || info == null) {
            return navigation.navigate("login");
        }

        navigation.navigate("first_tab_nav");
    }

    useEffect(() => {
        check_logged_in();
    }, [isFocused]);

    return <View style={styles.container}></View>;
}
