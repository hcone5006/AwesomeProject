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
        
      // <TouchableHighlight onPress={this._onPressButton} underlayColor="grey">
      //   <View style={styles.button}>
      //     <Text style={styles.buttonText}>TouchableHighlight</Text>
      //   </View>
      // </TouchableHighlight>

      <TouchableOpacity onPress={this._onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
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
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
