import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Alert, ScrollView, FlatList, Image, View, Text, TextInput} from 'react-native';
//import {TextInput} from 'react-native-paper'
import Styles from '../../styles/Styles';

class NoteView extends Component {
    static navigationOptions = {
        title: 'Note',
        headerStyle: { backgroundColor: '#43C59E' },
        headerTitleStyle: { color: 'black' },
      }
      render(){
          return(
              <ScrollView 
                style={Styles.scrollViewCenter}
              >
              <View style={{alignItems: 'center'}}>
                  <TextInput
                    placeholder='Enter notes!'
                    label='Press here and begin typing'
                    placeholderTextColor='white'
                    multiline={true}
                    fontSize={15}
                    color='white'
                    
                  />
              </View>
              </ScrollView>

          );
      }
    }

export default NoteView;