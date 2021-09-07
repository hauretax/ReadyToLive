import React, { Component } from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View } from 'react-native';
import Center from "./CenterOfCircl";
import Part from "./PartOdCircl";

export default class Circle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cTmp: [
                {
                    title: 'yellow',
                    time: "4h",
                    note: 12,
                    smiley: "🐝"
                },
                {
                    title: 'green',
                    time: "1h",
                    note: 20,
                    smiley: "🤠"
                },
                {
                    title: 'brown',
                    time: "12h",
                    note: 18,
                    smiley: "🦕"
                },
                {
                    title: 'red',
                    time: "30mn",
                    note: 8,
                    smiley: "🌞"
                }]
        }
    }

    addItem = (Item) => {
        console.log(Item)
        let items = this.state.cTmp;
        items.push(Item)
        this.setState({cTmp: items})
        
    }

    doMath = () => {
        const cTmp = this.state.cTmp
        let allPart = []
        let step = Math.PI * 2 / cTmp.length
        let space = 100
        let fat = 200 - (cTmp.length * 25)
        cTmp.forEach((el, i) => {
            allPart.push(<Part
                key={el.title}
                title={el.title}
                time={el.time}
                note={el.note}
                smiley={el.smiley}
                fat={fat}
                left={100 - (fat / 2) + (space * Math.cos(i * step))}
                right={100 - (fat / 2) + (space * Math.sin(i * step))}
            />)
        });
        return allPart
    }
    render() {
        return (
            <View style={styles.circle}>
                <Center addItem={this.addItem} showMe={this.props.showMe} />
                {this.doMath()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    circle: {
        backgroundColor: 'blue',
        borderRadius: 1000,
        height: 200,
        width: 200
    }
})