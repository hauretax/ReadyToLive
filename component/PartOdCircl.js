import React from "react";
import { View, Text } from "react-native";

export default function Part(props) {
    return (
        <View style={{
            height: props.fat,
            width: props.fat,
            backgroundColor: props.title,
            position: 'absolute',
            left: props.left,
            bottom: props.right,
            borderWidth: 1,
        }}>
            <Text>{props.title}</Text>
            <Text>{props.time}</Text>
            <Text>{props.note}</Text>
            <Text>{props.smiley}</Text>
        </View>
    )
}