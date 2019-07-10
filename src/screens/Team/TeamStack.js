import TeamRoute from './TeamRoute'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {Text, View} from 'react-native'

const TeamStack = createStackNavigator({
    Team: {
         screen: TeamRoute,
         headerTitle: 'Team',
         navigationOptions:{
          title: "Scouting ",
          headerBackTitle: "Scouting",
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

export default TeamStack