import { ActivityIndicator, Text, View } from "react-native";

import styles from "./styles";

export function SupervisorBox({
    unConfirmedComitions,
    confirmedComitions,
    unConfirmedMoneyRequests,
    confirmedMoneyRequests,
    isLoading,
}) {
    return (
        <>
            <View style={styles.first_row_item}>
                <View style={styles.circle}>
                    <Text style={styles.p_circle_text}>
                        {isLoading ? (
                            <ActivityIndicator color={"#fff"} size={"small"} />
                        ) : unConfirmedComitions.length < 1 ? (
                            0
                        ) : (
                            unConfirmedComitions.length
                        )}
                    </Text>
                </View>
                <View>
                    <Text style={styles.first_row_item_p}>
                        Comissões não confirmadas
                    </Text>
                </View>
            </View>

            <View style={styles.first_row_item}>
                <View style={styles.circle}>
                    <Text style={styles.p_circle_text}>
                        {isLoading ? (
                            <ActivityIndicator color={"#fff"} size={"small"} />
                        ) : confirmedComitions.length < 1 ? (
                            0
                        ) : (
                            confirmedComitions.length
                        )}
                    </Text>
                </View>
                <View>
                    <Text style={styles.first_row_item_p}>
                        Comissões confirmadas
                    </Text>
                </View>
            </View>

            <View style={styles.first_row_item}>
                <View style={styles.circle}>
                    <Text style={styles.p_circle_text}>
                        {isLoading ? (
                            <ActivityIndicator color={"#fff"} size={"small"} />
                        ) : unConfirmedMoneyRequests.length < 1 ? (
                            0
                        ) : (
                            unConfirmedMoneyRequests.length
                        )}
                    </Text>
                </View>
                <View>
                    <Text style={styles.first_row_item_p}>
                        Pedidos de dinheiro não confirmados
                    </Text>
                </View>
            </View>

            <View style={styles.first_row_item}>
                <View style={styles.circle}>
                    <Text style={styles.p_circle_text}>
                        {isLoading ? (
                            <ActivityIndicator color={"#fff"} size={"small"} />
                        ) : confirmedMoneyRequests.length < 1 ? (
                            0
                        ) : (
                            confirmedMoneyRequests.length
                        )}
                    </Text>
                </View>
                <View>
                    <Text style={styles.first_row_item_p}>
                        Pedidos de dinheiro confirmados
                    </Text>
                </View>
            </View>

            {/* <View
                style={[styles.first_row_item, styles.first_row_item_large]}
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
            </View>} */}
        </>
    );
}
