import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Alert, ScrollView, FlatList, Image, TextInput, View, Text, AsyncStorage} from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import {Icon, Button} from 'react-native-elements'
import  NoteCard from '../../components/NoteCard.js'
const styles = StyleSheet.create({
    container: {
        //justifyContent: 'center',
        //alignItems:'center',
        backgroundColor: '#121212',//'#2c2d3c',//'#900C3F',//'#3DFAFF',
        width: 100 + '%',
        height: 100 + '%',
        //flex: 1,
    },
    subCenterView: {
        justifyContent: 'center',
        alignItems:'center',
    },
    
    stdText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',

    },
    largeTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        
    },
    teamImage: {
        width: 200, 
        height: 200,
        borderRadius: 100,
        //borderWidth: 5,
        //borderColor: 'black'//'#3D7068',
        //'#afd728'
        //'#bfdf53'
        //'#5ab8d4'
        //'#d07dbd'
    }


});

class NotesRoute extends Component {
    static navigationOptions = ({navigation}) => {
        return{
            title: 'Notes',
            headerStyle: { backgroundColor: '#43C59E' },
            headerTitleStyle: { color: 'black' },
            headerRight:               
            <Button 
                icon={<Icon
                    name='add'//plussquare
                    size={25}
                    color='black'/>}
                type='clear'
                onPress={async () => {
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

                    //AsyncStorage.setItem('Note: 1', '')
                }}
            />
        };
    }
    
    componentDidMount() {
    }

    _screenNav(){

    }

    render(){
        //const {navigate} = this.props.navigation;
        const {navigate} = this.props.navigation;

        return(
            <ScrollView style={styles.container}>
                <View style={{...styles.subCenterView, paddingTop: 50}}>
                
                <NoteCard
                    title='Albany'
                    subtitle='118 The Robonaughts go off'
                    icon='folder'
                    onPress={() => navigate('Note')}
                />

                <NoteCard
                    title='Worlds'
                    subtitle='Housten Texas yee'
                    icon='folder'
                    onPress={() => navigate('Note')}
                />
                
                <NoteCard
                    title='State'
                    subtitle='ATL we booling in pch'
                    icon='folder'
                    onPress={() => navigate('Note')}
                />
                </View>
            </ScrollView>
        );
    }

}
/*
                    <Card.Content>
                        <Title>My Note Title</Title>
                        <Paragraph>blah, blah, blah...</Paragraph>
                    </Card.Content>
                    */

export default NotesRoute;

/*
                    <Text style={styles.stdText}>Notes Route</Text>
                    <TextInput
                        multiline={true}
                        placeholder='Enter Notes here'
                        color='white'
                        placeholderTextColor='grey'
                        numberOfLines = {4}
                        fontSize={20}
                    />
*/