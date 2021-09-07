import React from "react";
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Hello(props) {
    return (
        <View style={styles.heho}>
            <View style={styles.info}>
                <Pressable style={styles.close} onPress={props.noMore}><Text>close</Text></Pressable>
                <Text>{props.children}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heho: {
        position: "absolute",
        width: '100%',
        height: '100%',
        backgroundColor: "rgba(0,0,0,0.5)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    close: {
        width: 100,
        height: 50,
        backgroundColor: 'red',
        borderWidth:1,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 5,
        right: 5
    },
    info: {
        width: "75%",
        height: "80%",
        backgroundColor: "white"
    }
})