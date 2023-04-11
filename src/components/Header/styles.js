import { StyleSheet, StatusBar } from "react-native";

import { colors } from "../../colors.js";

export default StyleSheet.create({
    header: {
        width: "100%",
        backgroundColor: colors.white_background,
        borderWidth: 0.5,
        borderColor: "rgba(0,0,0,0)",
        borderBottomColor: "rgba(0,0,0,0.1)",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
    },

    text: {
        color: colors.primary1,
        fontFamily: "Poppins_500Medium",
        fontWeight: "800",
        fontSize: 15,
    },
});
