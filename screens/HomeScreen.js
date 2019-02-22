import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image,
  StyleSheet,
 } from 'react-native';

 // import { MonoText } from '../components/StyledText';

 import PizzaTranslator from './PizzaTranslator';
 import Greeting from './Greeting';
 import ButtonBasics from './ButtonBasics';
 import Blink from './Blink';


export default class BlinkApp extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Nine_steps_stair_in_Lysekil_-_bw.jpg'
    };

    return (
      <View style={styles.appbackground}>

        <Image source={pic} style={styles.imgstyle}/>

        <PizzaTranslator />

        <ButtonBasics />

        <Greeting name="Rue" />
        <Greeting name="Dharini" />
        <Greeting name="René" />

        <Blink text='Change is inevitable' />

        {/* <Text style={styles.textbasestyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit nulla erat, eu molestie lacus volutpat sit amet. Mauris convallis faucibus dapibus. Sed et tortor vitae neque vestibulum imperdiet at in magna.       
        </Text> */}

        <View style={{width: '100%', flex: 3, alignItems: "left"}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
          <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
        </View>

      </View>

    );
  }
}


const styles = StyleSheet.create({
  // bigblue: {
  //   color: 'blue',
  //   fontWeight: 'bold',
  //   fontSize: 30,
  // },
  appbackground: {
    // color: 'red',
    // height: '100%',
    flex: 1,
    backgroundColor: 'hsla(328, 100%, 22%, 0.59)',
    alignItems: 'center'
  },
  textbasestyle: {
    // fontFamily: 'Cochin',
    fontSize: 16,
    marginTop: 16,
    marginBottom: 20,
    marginLeft: 16,
    marginRight: 16,
    color: 'hsla(328, 100%, 100%, 0.8)',
  },
  imgstyle: {
    // flexGrow: 1,
    width: '100%', 
    height: 180, 
    marginBottom: 16,
    opacity: .9
  },
  bodytext: {
    color: 'hsla(328, 100%, 100%, 0.8)',
  },
  // button: {
  //   marginBottom: 30,
  //   width: 260,
  //   alignItems: 'center',
  //   backgroundColor: '#2196F3'
  // },
  // buttonText: {
  //   padding: 20,
  //   color: 'white'
  // }
  // blinktext: {
  //   fontFamily: 'Cochin',
  //   color: 'hsla(328, 100%, 100%, 0.5)',
  //   fontSize: 40,
  //   borderStyle: 'dotted',
  //   borderColor: 'hsla(328, 100%, 100%, 0.5)',
  //   borderWidth: 1,
  //   padding: 10,
  //   marginTop: 16,
  //   top: 40,
  //   position: 'absolute'
  // }
});

// import React from 'react';
// import {
//   Image,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { WebBrowser } from 'expo';

// import { MonoText } from '../components/StyledText';

// export default class HomeScreen extends React.Component {
//   static navigationOptions = {
//     header: null,
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
//           <View style={styles.welcomeContainer}>
//             <Image
//               source={
//                 __DEV__
//                   ? require('../assets/images/robot-dev.png')
//                   : require('../assets/images/robot-prod.png')
//               }
//               style={styles.welcomeImage}
//             />
//           </View>

//           <View style={styles.getStartedContainer}>
//             {this._maybeRenderDevelopmentModeWarning()}

//             <Text style={styles.getStartedText}>Get started by opening</Text>

//             <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
//               <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
//             </View>

//             <Text style={styles.getStartedText}>
//               Testing 123! Change this text and your app will automatically reload.
//             </Text>
//           </View>

//           <View style={styles.helpContainer}>
//             <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
//               <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>

//         <View style={styles.tabBarInfoContainer}>
//           <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

//           <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
//             <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
//           </View>
//         </View>
//       </View>
//     );
//   }

//   _maybeRenderDevelopmentModeWarning() {
//     if (__DEV__) {
//       const learnMoreButton = (
//         <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
//           Learn more
//         </Text>
//       );

//       return (
//         <Text style={styles.developmentModeText}>
//           Development mode is enabled, your app will be slower but you can use useful development
//           tools. {learnMoreButton}
//         </Text>
//       );
//     } else {
//       return (
//         <Text style={styles.developmentModeText}>
//           You are not in development mode, your app will run at full speed.
//         </Text>
//       );
//     }
//   }

//   _handleLearnMorePress = () => {
//     WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
//   };

//   _handleHelpPress = () => {
//     WebBrowser.openBrowserAsync(
//       'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
//     );
//   };
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });
