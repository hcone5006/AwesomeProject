import React from 'react';
import { 
  // AppRegistry, 
  Text, 
  View, 
  // Image,
  StyleSheet,
  // Button 
 } from 'react-native';// import { ExpoLinksView } from '@expo/samples';

// export default class LinksScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Links',
//   };

//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         {/* Go ahead and delete ExpoLinksView and replace it with your
//            * content, we just wanted to provide you with some helpful links */}
//         <ExpoLinksView />
//       </ScrollView>
//     );
//   }
// }

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {text: ''};
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        {/* <Text style={styles.textbasestyle}>         */}
          <Text style={styles.bodytext}>Hello {this.props.name}</Text>
        {/* </Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textbasestyle: {
    // fontFamily: 'Cochin',
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
