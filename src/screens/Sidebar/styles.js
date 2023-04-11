import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.background,
    },
    box_container: {
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,
    },
    top: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 18,
    },
    top_row: {
        flexDirection: "row",
        alignItems: "center",
    },
    person: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: colors.primary1,
        alignItems: "center",
        justifyContent: "center",
    },
    small_container: {
        marginLeft: 15,
    },
    small: {
        fontSize: 10,
        color: colors.tb2,
        fontFamily: "Poppins_400Regular",
    },
});
