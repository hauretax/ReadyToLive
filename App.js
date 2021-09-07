import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './component/Helo';
import Circle from './component/Newcircle';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      say: <Text>cool</Text>,
    }
  }

  showMe = (thingToShow) => {
    this.setState({ say: thingToShow })
    this.setState({ show: true })
  }
  noMore = () => {
    this.setState({ show: false })
  }
  render() {
    return (
      <View style={styles.container}>
        <Circle showMe={this.showMe} />
        {this.state.show &&
          <Hello noMore={this.noMore}> {this.state.say} </Hello>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%"
  },
});
