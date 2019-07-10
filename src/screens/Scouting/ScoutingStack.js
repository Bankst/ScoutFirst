import ScoutingRoute from './ScoutingRoute'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {Text, View} from 'react-native'

const ScoutingStack = createStackNavigator({
    Scouting: {
         screen: ScoutingRoute,
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

export default ScoutingStack