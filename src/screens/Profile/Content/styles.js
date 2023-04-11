import { StyleSheet } from "react-native";

import { colors } from "../../../colors.js";

export default StyleSheet.create({
    box_container: {
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,
    },
    box: {
        padding: 15,
        marginTop: 30,
        width: "100%",
        backgroundColor: colors.white_background,
        borderRadius: 8,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    user: {
        width: 60,
        height: 60,
        borderWidth: 2.5,
        borderColor: "rgba(30, 151, 231,0.3)",
        backgroundColor: "rgba(30, 151, 231,0.1)",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    strong: {
        textAlign: "center",
        fontFamily: "Poppins_500Medium",
        fontWeight: "700",
        color: colors.tb2,
        marginTop: 15,
    },
    p: {
        textAlign: "center",
        fontFamily: "Poppins_400Regular",
        color: colors.tb2,
        marginTop: 5,
    },

    row: {
        padding: 15,
        marginTop: 20,
        marginBottom: 60,
        width: "100%",
        backgroundColor: colors.white_background,
        borderRadius: 8,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: "transparent",
        borderBottomColor: "rgba(10,10,60,0.2)",
        paddingBottom: 20,
        marginBottom: 15,
    },
    row_p: {
        fontFamily: "Poppins_400Regular",
        color: colors.tb2,
    },

    last_item: {
        flexDirection: "row",
        marginTop: 15,
        justifyContent: "flex-end",
    },
    button: {
        marginLeft: 20,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: colors.primary1,
    },
});
