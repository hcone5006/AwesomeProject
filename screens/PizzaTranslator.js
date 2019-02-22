import React, { Component } from 'react';
import { 
  // AppRegistry, 
  Text, 
  TextInput, 
  View,
  StyleSheet
 } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={styles.textInput}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    backgroundColor: 'hsla(328, 100%, 100%, 0.85)',
    borderColor: 'hsla(328, 100%, 100%, 0.4)',
    borderWidth: 1,
    borderRadius: 3,
    paddingRight: 8,
    paddingLeft: 8,
    color: 'hsla(328, 100%, 22%, 0.59)',
  }
});


// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);
