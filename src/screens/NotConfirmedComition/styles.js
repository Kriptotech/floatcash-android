import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export default StyleSheet.create({
    profile_container: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.background,
    },
    box_container: {
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,
    },
    box: {
        padding: 8,
        marginTop: 15,
        width: "100%",
        backgroundColor: colors.white_background,
        borderRadius: 8,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
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
        marginBottom: 15,
    },
    strong: {
        fontFamily: "Poppins_500Medium",
        fontWeight: "700",
        color: colors.tb2,
        marginBottom: 15,
    },
    p: {
        fontFamily: "Poppins_400Regular",
        color: colors.tb2,
        marginTop: 5,
    },
    main_text: {
        fontWeight: "700",
        fontFamily: "Poppins_400Regular",
        color: colors.tb2,
        marginBottom: 10,
    },

    row: {
        padding: 10,
        marginTop: 15,
        marginBottom: 60,
        width: "100%",
        backgroundColor: colors.white_background,
        borderRadius: 8,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    last_item: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    button: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: colors.primary1,
    },
});
