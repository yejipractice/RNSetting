import {StyleSheet} from "react-native";

// 임시

export const viewStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export const textStyle = StyleSheet.create({
    text: { 
        padding: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    error: {
        padding: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
    },
});