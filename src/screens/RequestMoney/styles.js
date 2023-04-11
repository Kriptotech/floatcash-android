import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../colors";

// screen width
const { height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        minHeight: height,
        backgroundColor: colors.background,
    },
    login_container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 40,
    },
    login_box: {
        width: "90%",
        paddingBottom: 50,
        paddingLeft: 10,
        paddingRight: 10,
    },
    login_h1: {
        fontFamily: "Poppins_500Medium",
        color: colors.tb2,
        fontSize: 25,
        fontWeight: "900",
        marginBottom: 30,
    },

  
    span: {
        color: colors.tb2,
        marginBottom: 8,
        fontSize: 12,
        fontFamily: "Poppins_400Regular",
    },
    input: {
        fontFamily: "Poppins_400Regular",
        color: colors.tb2,
        width: "100%",
        height: 60,
        backgroundColor: colors.input_background,
        marginBottom: 10,
        fontSize: 13.5,
        borderRadius: 5,
        alignSelf: "center",
        paddingLeft: 8,
        paddingRight: 8,
    },

    login_button: {
        backgroundColor: colors.primary1,
        color: "#fff",
        width: "100%",
        height: 70,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 25,
    },
    login_button_text: {
        fontFamily: "Poppins_400Regular",
        color: colors.foreground_primary,
        fontWeight: "900",
    },

    p_red: {
        fontFamily: "Poppins_400Regular",
        color: colors.green,
        marginBottom: 10,
    },
    p: {
        fontSize: 16,
        fontFamily: "Poppins_400Regular",
        color: colors.primary2,
        marginBottom: 10,
    },
});
