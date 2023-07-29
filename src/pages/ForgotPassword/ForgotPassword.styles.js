import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

export default StyleSheet.create({
    imageBackground: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: "center",
    },
    mainBox: {
        alignItems: "center",
    },
    formControlBox: {
        width: "100%",
        maxWidth: width / 1.3
    },
    buttons: {
        marginTop: 30,
    }

})