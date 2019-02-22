import React, { Component } from 'react';
import { 
  Alert, 
  // AppRegistry, 
  // Button, 
  Text,
  StyleSheet, 
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
        
      <TouchableOpacity onPress={this._onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Touchable Opacity</Text>
        </View>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'hsla(173, 38%, 71%, 1)',
    borderColor: 'hsla(173, 38%, 71%, 1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 3,
  },
  buttonText: {
    padding: 20,
    color: 'hsla(328, 100%, 22%, 0.59)',
    fontSize: 18,
    // color: 'hsla(328, 100%, 100%, 0.9)',
  }
});

