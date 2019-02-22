import React, { Component } from 'react';
import { 
  Text, 
  StyleSheet,
 } from 'react-native';


export default class Blink extends Component {
//  class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1400);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
      // <Text style={styles.blinktextLow}>{this.props.text}</Text>
    }

    return (
      <Text style={styles.blinktext}>{this.props.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
  blinktext: {
    fontFamily: 'Cochin',
    color: 'hsla(328, 100%, 100%, 0.5)',
    // color: 'hsla(189, 100%, 0%, 0.4)',
    fontSize: 40,
    borderStyle: 'dotted',
    borderColor: 'hsla(328, 100%, 100%, 0.5)',
    // borderColor: 'hsla(189, 100%, 0%, 0.4)',
    borderWidth: 1,
    padding: 10,
    marginTop: 16,
    top: 40,
    position: 'absolute'
  },
  blinktextLow: {
    fontFamily: 'Cochin',
    color: 'hsla(189, 100%, 0%, 0.8)',
    fontSize: 40,
    borderStyle: 'dotted',
    borderColor: 'hsla(189, 100%, 0%, 0.8)',
    borderWidth: 1,
    padding: 10,
    marginTop: 16,
    top: 40,
    position: 'absolute'
  }
});
