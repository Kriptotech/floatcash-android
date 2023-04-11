import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    Linking,
} from "react-native";
import { colors } from "../../colors";

export function UpdateScreen({ link }) {
    return (
        <View style={styles.container}>
            <View style={styles.alert}>
                <Image source={require("./img.png")} style={styles.img} />
                <Text style={styles.alert_text}>Atualize o app!</Text>
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => Linking.openURL(link)}
            >
                <Text style={styles.btn_text}>Baixar nova versão</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    alert: {
        width: "90%",
        paddingLeft: 18,
        paddingRight: 18,
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        height: 200,
        width: 200,
        resizeMode: "contain",
        marginBottom: 30,
    },
    alert_text: {
        color: colors.tb2,
        fontSize: 14,
        lineHeight: 27,
    },
    btn: {
        backgroundColor: colors.primary1,
        color: "#fff",
        padding: 20,
        paddingHorizontal: 40,
        marginTop: 30,
        borderRadius: 8,
    },
    btn_text: {
        color: "#fff",
        fontWeight: "900",
    },
});
