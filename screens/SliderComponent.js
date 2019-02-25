import React, { Component } from 'react';
import { 
  Text,
  StyleSheet, 
  View,
  Slider
} from 'react-native';

export default class SliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

  render() {
    const {value} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{String(value)}</Text>
        <Slider 
          step={1}
          maximumValue={100}
          onValueChange={this.change.bind(this)}
          value={value}
          minimumTrackTintColor={'hsla(173, 38%, 71%, 1)'}
          maximumTrackTintColor={'hsla(328, 100%, 100%, 0.9)'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
    color: 'hsla(328, 100%, 100%, 0.8)',
  }
  // button: {
  //   marginBottom: 30,
  //   width: 260,
  //   alignItems: 'center',
  //   backgroundColor: 'hsla(173, 38%, 71%, 1)',
  //   borderColor: 'hsla(173, 38%, 71%, 1)',
  //   borderWidth: 1,
  //   borderStyle: 'solid',
  //   borderRadius: 3,
  // },
  // buttonText: {
  //   padding: 20,
  //   color: 'hsla(328, 100%, 22%, 0.59)',
  //   fontSize: 18,
  //   // color: 'hsla(328, 100%, 100%, 0.9)',
  // }
});

