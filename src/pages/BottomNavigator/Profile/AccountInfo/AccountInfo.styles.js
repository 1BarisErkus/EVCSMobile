import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    mainBox: {
        alignItems: "center",
        marginTop: 60
    },
    formControlBox: {
        width: "100%",
        maxWidth: width / 1.3
    },
    buttons: {
        marginTop: 30,
    }

})