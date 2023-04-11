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
        paddingTop: 50,
        paddingBottom: 50,
    },
});
