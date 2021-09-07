import React from "react";
import { StyleSheet, View } from "react-native";

export default function Plus(props) {

    return (
        <View>
            <View style={styles.plusH}></View>
            <View style={styles.plush}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    plusH: {
        width: 100,
        height: 20,
        top: 40,
        left: 0,
        backgroundColor: 'gold'
    },
    plush: {
        width: 100,
        height: 20,
        top: 20,
        left: 0,
        transform: [{ rotate: '90deg' }],
        backgroundColor: 'gold'

    }
})