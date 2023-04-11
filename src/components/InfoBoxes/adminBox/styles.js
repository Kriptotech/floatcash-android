import { StyleSheet, StatusBar } from "react-native";
import { colors } from "../../../colors";

export default StyleSheet.create({
    first_row_item: {
        width: "49%",
        minHeight: 100,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 20,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        padding: 10,
    },
    first_row_item_large: { width: "100%" },
    circle: {
        width: 30,
        height: 30,
        backgroundColor: colors.primary1,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
    },

    p_circle_text: {
        color: "#fff",
        fontWeight: "900",
        fontFamily: "Poppins_500Medium",
    },
    first_row_item_p: {
        fontSize: 13,
        fontFamily: "Poppins_400Regular",
        color: colors.tb2,
        flexWrap: "wrap",
    },
});
