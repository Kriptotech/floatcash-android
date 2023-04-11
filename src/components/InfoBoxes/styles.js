import { StyleSheet, StatusBar } from "react-native";
import { colors } from "../../colors";

export default StyleSheet.create({
    first_row: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingHorizontal: 15,
        marginTop: 20,
    },
    p: {
        paddingHorizontal: 15,
        marginTop: 30,
        color: colors.tb1,
        fontFamily: "Poppins_400Regular",
    },
});
