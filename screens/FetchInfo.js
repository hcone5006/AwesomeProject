import React from 'react';
import { 
  FlatList, 
  ActivityIndicator, 
  Text, 
  View,
  StyleSheet
} from 'react-native';

export default class FetchInfo extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      isLoading: true
    }
  }

  componentDidMount(){
    return fetch(this.props.dataJSON)
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
      }, function() {

      });

    })
    .catch((error) => {
      console.error(error);
    });
  }



  render(){
    if(this.state.isLoading) {
      return(
        <View style={{flex: 1, padding: 16}}>
          <ActivityIndicator />
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop: 20}}>
        <View style={styles.hr} />
        <Text style={styles.titleText}>Movies:</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={styles.bodytext}>ID# {item.id}: {item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bodytext: {
    color: 'hsla(328, 100%, 100%, 0.8)',
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
  titleText: {
    fontSize: 22, 
    color: 'hsla(328, 100%, 100%, 0.8)', 
    paddingRight: 16, 
    paddingLeft: 16,
    paddingBottom: 8,
  },
  hr: {
    borderBottomColor: 'hsla(328, 100%, 100%, 0.5)',
    borderBottomWidth: 1,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  }
})