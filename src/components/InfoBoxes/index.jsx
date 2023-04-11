import { View } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";

import styles from "./styles";
import { AdminBox } from "./adminBox";
import { AgentBox } from "./agentBox";
import { SupervisorBox } from "./SupervisorBox";

export function InfoBoxes({ user_type }) {
    const isFocused = useIsFocused();
    const [unConfirmedComitions, setUnConfirmedComitions] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [unConfirmedMoneyRequests, setUnConfirmedMoneyRequests] = useState(
        []
    );
    const [confirmedMoneyRequests, setConfirmedMoneyRequests] = useState([]);
    const [confirmedComitions, setConfirmedComitions] = useState([]);

    async function fetchAdminData() {
        let server_url = await AsyncStorage.getItem("server_url");

        let res = await axios(
            `${server_url}/comitions/get_all_unconfirmed_comitions`
        );
        res.data.success === true && setUnConfirmedComitions(res.data?.result);

        let res2 = await axios(
            `${server_url}/comitions/get_all_confirmed_comitions`
        );
        res2.data.success === true && setConfirmedComitions(res2.data?.result);

        let res3 = await axios(
            `${server_url}/money_requests/get_all_unconfirmed_money_requests`
        );
        res3.data.success === true &&
            setUnConfirmedMoneyRequests(res3.data?.result);

        let res4 = await axios(
            `${server_url}/money_requests/get_all_confirmed_money_requests`
        );
        res4.data.success === true &&
            setConfirmedMoneyRequests(res4.data?.result);

        setisLoading(false);
    }

    useEffect(() => {
        setisLoading(true);
        fetchAdminData();
    }, [isFocused]);

    return (
        <View style={styles.first_row}>
            {user_type === "admin" && (
                <AdminBox
                    unConfirmedComitions={unConfirmedComitions}
                    confirmedComitions={confirmedComitions}
                    unConfirmedMoneyRequests={unConfirmedMoneyRequests}
                    confirmedMoneyRequests={confirmedMoneyRequests}
                    isLoading={isLoading}
                />
            )}

            {user_type === "supervisor" && (
                <SupervisorBox
                    unConfirmedComitions={unConfirmedComitions}
                    confirmedComitions={confirmedComitions}
                    unConfirmedMoneyRequests={unConfirmedMoneyRequests}
                    confirmedMoneyRequests={confirmedMoneyRequests}
                    isLoading={isLoading}
                />
            )}

            {user_type === "agent" && (
                <AgentBox
                    unConfirmedComitions={unConfirmedComitions}
                    confirmedComitions={confirmedComitions}
                    unConfirmedMoneyRequests={unConfirmedMoneyRequests}
                    confirmedMoneyRequests={confirmedMoneyRequests}
                    isLoading={isLoading}
                />
            )}
        </View>
    );
}
