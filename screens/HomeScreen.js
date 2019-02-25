import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  SectionList
 } from 'react-native';

 // import { MonoText } from '../components/StyledText';

 import PizzaTranslator from './PizzaTranslator';
 import Greeting from './Greeting';
 import ButtonBasics from './ButtonBasics';
 import Blink from './Blink';
 import FetchInfo from './FetchInfo';
import { blue } from 'ansi-colors';


export default class BlinkApp extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Nine_steps_stair_in_Lysekil_-_bw.jpg'
    };

    return (
      <ScrollView style={{backgroundColor: 'hsla(328, 100%, 22%, 0.59)'}}>

        <View style={styles.appbackground}>

          <View style={styles.alignCenter}>
            <Image source={pic} style={styles.imgstyle}/>

            <Blink text='Change is inevitable' />
          </View>


          <PizzaTranslator />

          <Text style={styles.titleText}>Title here</Text>
          <Text style={styles.bodytext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit nulla erat, eu molestie lacus volutpat sit amet. Mauris convallis faucibus dapibus. Sed et tortor vitae neque vestibulum imperdiet at in magna.       
          </Text>

          <View style={styles.alignCenter}>
            <ButtonBasics />          
          </View>

          <Greeting name="Rue" />
          <Greeting name="Dharini" />
          <Greeting name="René" />

          <View style={{width: '100%', flex: 3, alignItems: "left"}}>
            <View style={{width: 50, height: 50, backgroundColor: '#D7EBBA'}} />
            <View style={{width: 100, height: 100, backgroundColor: '#FEFFBE'}} />
            <View style={{width: 150, height: 150, backgroundColor: '#EBD494'}} />
          </View>
          
          <View style={{width: '100%', flex: 3, alignItems: "left"}}>
            <View style={{width: 50, height: 50, backgroundColor: '#D7EBBA'}} />
            <View style={{width: 100, height: 100, backgroundColor: '#FEFFBE'}} />
            <View style={{width: 150, height: 150, backgroundColor: '#EBD494'}} />
          </View>

        </View>
        
        <Text style={{color: 'hsla(328, 100%, 100%, 0.8)', fontSize: 18, marginTop: 20, paddingLeft: 16,
    paddingRight: 16, paddingBottom: 16, fontWeight: 'bold'}}>Names:</Text>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />

        <View
          style={{
            borderBottomColor: 'hsla(328, 100%, 100%, 0.5)',
            borderBottomWidth: 1,
            marginTop: 16,
            marginLeft: 16,
            marginRight: 16
          }}
        />

        <Text style={{color: 'hsla(328, 100%, 100%, 0.8)', fontSize: 18, marginTop: 20, paddingLeft: 16,
    paddingRight: 16, paddingBottom: 16, fontWeight: 'bold'}}>My section list:</Text>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />

        <FetchInfo 
          dataJSON='https://facebook.github.io/react-native/movies.json'
        />

        <Text style={styles.footerText}>~~~~You've made it to the bottom!~~~~</Text>
      
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  appbackground: {
    flex: 1,
    // backgroundColor: 'hsla(328, 100%, 22%, 0.59)',
    // alignItems: 'left'
  },
  alignCenter: {
    alignItems: 'center'
  },
  titleText: {
    fontSize: 22, 
    color: 'hsla(328, 100%, 100%, 0.8)', 
    paddingRight: 16, 
    paddingLeft: 16,
    paddingBottom: 8,
  },
  footerText: {
    // fontFamily: 'Cochin',
    fontSize: 16,
    paddingTop: 16,
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 16,
    color: 'hsla(328, 100%, 100%, 0.8)',
    textAlign: 'center'
    // backgroundColor: 'hsla(328, 100%, 22%, 0.3)',
  },
  imgstyle: {
    width: '100%', 
    height: 180, 
    marginBottom: 16,
    opacity: .9
  },
  bodytext: {
    color: 'hsla(328, 100%, 100%, 0.8)',
    // paddingTop: 16,
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
  item: {
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    color: 'hsla(328, 100%, 100%, 0.8)',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 2,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'hsla(328, 100%, 22%, 0.9)',
    backgroundColor: '#D7EBBA',
  }
});
 
