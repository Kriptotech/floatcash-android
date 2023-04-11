import { StyleSheet } from "react-native";
import { colors } from "../../../colors";

export default StyleSheet.create({
    item: {
        padding: 10,
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",

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
    item_text: {
        marginLeft: 10,
        color: colors.tb3,
        fontFamily: "Poppins_400Regular",
        paddingRight: 10,
    },
});
