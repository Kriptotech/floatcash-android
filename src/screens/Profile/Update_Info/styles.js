import { StyleSheet } from "react-native";
import { colors } from "../../../colors";

export default StyleSheet.create({
    container: {
        paddingHorizontal: 15,
    },
    box: {
        marginTop: 30,
        padding: 10,
        width: "100%",
        backgroundColor: colors.white_background,
        borderRadius: 8,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginBottom: 50,
    },
    close: {
        width: 40,
        height: 40,
        backgroundColor: colors.primary1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    row1: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    span: {
        color: colors.tb2,
        fontFamily: "Poppins_500Medium",
    },

    row2: {
        marginTop: 55,
    },
    input: {
        fontFamily: "Poppins_400Regular",
        color: colors.tb2,
        width: "100%",
        height: 60,
        backgroundColor: colors.input_background,
        marginBottom: 20,
        fontSize: 13.5,
        borderRadius: 5,
        alignSelf: "center",
        paddingLeft: 8,
        paddingRight: 8,
    },
    btn: {
        width: "100%",
        height: 60,
        backgroundColor: colors.primary1,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    btn_txt: {
        fontFamily: "Poppins_600SemiBold",
        color: "#fff",
        fontWeight: "800",
    },
});
