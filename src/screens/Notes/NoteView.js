import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Alert, ScrollView, FlatList, Image, View, Text, TextInput, AsyncStorage } from 'react-native';
//import {TextInput} from 'react-native-paper'
import Styles from '../../styles/Styles';

class NoteView extends Component {

  static navigationOptions = {
    title: 'Note',
    headerStyle: { backgroundColor: '#43C59E' },
    headerTitleStyle: { color: 'black' },

  }

  state = {
    text: ''
  }

  async save(key, data) {
    await AsyncStorage.setItem('@Notes-Note-' + key, data);
  };

  async getText(key) {
    let text = await AsyncStorage.getItem('@Notes-Note-' + key);
    if (text == null) {
      text = ''
    }
    return text
  }

  render() {
    const { navigation } = this.props;
    const index = navigation.getParam('index', 'Error Index');

    return (
      <ScrollView
        style={Styles.scrollViewCenter}
      >
        <View style={{ alignItems: 'center' }}>
          <TextInput
            placeholder='Tap to add text'
            label='Press here and begin typing'
            placeholderTextColor='grey'
            multiline={true}
            fontSize={15}
            color='white'
            onChangeText={(text) => {
              this.save(this.index, 'hello its me')
              let words = text.split('\n')
              this.state.text = text
              console.log(this.getText(this.index))
              console.log(AsyncStorage.getAllKeys())
              //Alert.alert('changed ' + words[0] + ' ', this.index)
            }}
            value={this.getText(this.index)}
          />
        </View>
      </ScrollView>

    );
  }
}

export default NoteView;

/*
                       async () => {
                    AsyncStorage.get
                    try {
                        const myArray = await AsyncStorage.getItem('Notes');
                        if (myArray !== null) {
                          // We have data!!
                          let newArray = JSON.parse(myArray).push('New Note');
                          try {
                            await AsyncStorage.setItem('Notes', JSON.stringify(newArray));
                            navigation.navigate('Note')
                          } catch (error) {
                            // Error saving data
                          }

                        }
                      } catch (error) {
                        // Error retrieving data
                      }

                    //JSON.parse(myArray)
                    */