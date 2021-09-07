import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import AddItem from "./AddItem";
import Plus from "./Plus";



export default function Center(props) {
    return (
        <Pressable style={styles.center} onPress={() => props.showMe(
            <AddItem addItem={props.addItem}/>
        )}>
            <Plus />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    center: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        borderRadius: 1000,
        left: 50,
        top: 50
    }
})