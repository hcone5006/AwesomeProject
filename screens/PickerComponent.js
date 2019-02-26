import React, { Component } from 'react';
import { 
  Text,
  StyleSheet, 
  View,
  Picker
} from 'react-native';

export default class PickerComponent extends Component {

  render() {
    return (
      <View>
        <Text style={styles.titleText}>Select a language:</Text>
        <Picker
          selectedValue={this.props.language} 
          onValueChange={this.props.updateLanguage}
          style={{flex: 1 }}
          itemStyle={{color: 'hsla(328, 100%, 22%, 0.9)', backgroundColor: 'hsla(328, 100%, 100%, 0.8)'}}
          // onValueChange={(itemValue, itemIndex) =>
          //   this.setState({language: itemValue})
          // }
          >
          
          {this.props.languages.map(function(item) {
            return <Picker.Item key={item.id} label={item.label} value={item.value}/>
          })}
        </Picker>

        <Text style={{color: 'hsla(328, 100%, 100%, 0.8)', fontSize: 16, marginTop: 20, paddingLeft: 16, paddingRight: 16, paddingBottom: 16, fontWeight: 'bold'}}>{this.props.language}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 22, 
    color: 'hsla(328, 100%, 100%, 0.8)', 
    paddingRight: 16, 
    paddingLeft: 16,
    paddingBottom: 8,
  },
});

