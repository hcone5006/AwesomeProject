import React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
 } from 'react-native';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
          <Text style={styles.bodytext}>Hello {this.props.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textbasestyle: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 20,
    marginLeft: 16,
    marginRight: 16,
    color: 'hsla(328, 100%, 100%, 0.8)',
  },
  bodytext: {
    color: 'hsla(328, 100%, 100%, 0.8)',
  },
});
