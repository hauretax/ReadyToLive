import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
                title: '',
                note: '',
                smiley: '',
                time: '',
        }
    }
    changeText = (event, type) => {
        this.setState({ [type]: event })
    }
    render() {
        return (
            <View>
                <TextInput
                    onChangeText={(event) => this.changeText(event, 'title')}
                    value={this.state.title}
                    placeholder="donne un super titre"
                />
                <TextInput
                    onChangeText={(event) => this.changeText(event, 'note')}
                    value={this.state.note}
                    placeholder="note moi"
                />
                <TextInput
                    onChangeText={(event) => this.changeText(event, 'smiley')}
                    value={this.state.smiley}
                    placeholder="met un jolie smiley"
                />
                <TextInput
                    onChangeText={(event) => this.changeText(event, 'time')}
                    value={this.state.time}
                    placeholder="combien de temps as tu passer dessu ?"
                />
                <Button
                    title="sauvegarde se moment"
                    color="#13bd00"
                    onPress={() => this.props.addItem({
                        title: this.state.title,
                        note: this.state.note,
                        smiley: this.state.smiley,
                        time: this.state.time
                    })}
                />
            </View>
        )
    }
}