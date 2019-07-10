import NotesRoute from './NotesRoute'
import ScoutingRoute from '../Scouting/ScoutingRoute'
import TeamRoute from '../Team/TeamRoute'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {Text, View} from 'react-native'
import { Button, Icon } from 'react-native-elements';
const NotesStack = createStackNavigator({
     Notes: {
          screen: NotesRoute,
          navigationOptions:{
            title: "Notes",
            headerRight:               
               <Button 
                    icon={<Icon
                         name='add'//plussquare
                         size={25}
                         color='black'/>}
                    type='clear'
                    
                              />
                    
            ,
            headerBackTitle: "Notes",
            headerStyle: {
               backgroundColor: '#43C59E',
             },
             headerTintColor: '#fff',
             headerTitleStyle: {
               fontWeight: 'bold',
               color: 'black',
             },
          }
        }, //,
        //details: {screen: LaunchDetails}
})

export default NotesStack

/*

<View style={{
                 justifyContent:"center",
                 backgroundColor:'#43C59E',
                 alignItems:'center',
                 paddingTop:40
            }}>
               <Text style={{
               paddingBottom:15,
               alignContent:'center',
               fontWeight:'bold',
               fontSize:20
            }}>Notes</Text>
            </View>,

*/