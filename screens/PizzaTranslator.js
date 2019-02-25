import React, { Component } from 'react';
import { 
  // AppRegistry, 
  Text, 
  TextInput, 
  View,
  StyleSheet,
  // Label
 } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.bodytext}>
        <Text style={styles.label}>The pizza translator:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

        <View
          style={{
            borderBottomColor: 'hsla(328, 100%, 100%, 0.5)',
            borderBottomWidth: 1,
          }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    backgroundColor: 'hsla(328, 100%, 100%, 0.9)',
    borderColor: 'hsla(328, 100%, 100%, 0.4)',
    borderWidth: 1,
    borderRadius: 3,
    paddingRight: 8,
    paddingLeft: 8,
    color: 'hsla(328, 100%, 22%, 0.59)',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: 'hsla(328, 100%, 100%, 0.8)',
  },
  bodytext: {
    color: 'hsla(328, 100%, 100%, 0.8)',
    // paddingTop: 16,
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
});


// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);
