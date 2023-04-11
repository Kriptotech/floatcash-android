import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

import styles from "./styles";
import { Header } from "../Header";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../colors";
import { Admin } from "./Admin";
import { Agent } from "./Agent";
import { Supervisor } from "./Supervisor";

export function RouteLinks({ navigation }) {
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
        <View style={styles.btn_list}>
            {user_type === "admin" && <Admin navigation={navigation} />}

            {user_type === "supervisor" && (
                <Supervisor navigation={navigation} />
            )}

            {user_type === "agent" && <Agent navigation={navigation} />}
        </View>
    );
}
