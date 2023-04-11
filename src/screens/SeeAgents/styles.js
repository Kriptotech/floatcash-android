import { StyleSheet, StatusBar } from "react-native";
import { colors } from "../../colors";

export default StyleSheet.create({
    dashboard_container: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.background,
    },
    row: {
        paddingHorizontal: 15,
        flexDirection: "row",
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginTop: 30,
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "transparent",
        borderBottomColor: colors.primary1,
        flex: 1,
        color: colors.tb2,
        fontFamily: "Poppins_400Regular",
    },
    btn: {
        backgroundColor: colors.primary1,
        width: 60,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    p: {
        paddingHorizontal: 15,
        color: colors.tb1,
        fontFamily: "Poppins_400Regular",
    },
    second_row: {
        marginTop: 30,
        width: "100%",
        paddingHorizontal: 15,
        marginBottom: 30,
    },
    second_row_item: {
        width: "100%",
        borderRadius: 4,
        marginBottom: 20,
        paddingBottom: 10,
        borderWidth: 0.7,
        borderColor: "transparent",
        borderBottomColor: colors.primary1,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: colors.white_background,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    span: {
        fontSize: 12,
        color: colors.tb1,
        fontFamily: "Poppins_400Regular",
        marginTop: 10,
    },
});
