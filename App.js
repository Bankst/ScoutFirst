import React, { Component } from 'react';
import { Platform } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import ScoutingStack from './src/screens/Scouting/ScoutingStack.js'
import TeamStack from './src/screens/Team/TeamStack.js'
import NotesStack from './src/screens/Notes/NotesStack.js';

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

//import NotesStack from './src/screens/Notes/NotesStack.js'

//
// '#3D7068'
// '#43C59E' 
//
//

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    //backgroundColor: '#121212',
    primary: '#43C59E',
    accent: '#f1c40f',
    background: '#121212'
    //color: '#121212',
  }
};

const TabNavigator = createBottomTabNavigator({
  Notes: {
    screen: NotesStack,
    navigationOptions: {
      tabBarLabel: 'Notes',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='subject' size={26} style={{ color: tintColor }} />

    }
  },
  Team: {
    screen: TeamStack,
    navigationOptions: {
      tabBarLabel: 'Team',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='home' size={26} style={{ color: tintColor }} />

    }
  },
  Scouting: {
    screen: ScoutingStack,
    navigationOptions: {
      tabBarLabel: 'Scouting',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='polymer' size={26} style={{ color: tintColor }} />

    }

  },

  //Team: TeamRoute,
  //Scouting: ScoutingRoute,
},
  {
    initialRouteName: 'Team',
    headerMode: 'none',        // I don't want a NavBar at top
    tabBarPosition: 'bottom',  // So your Android tabs go bottom
    tabBarOptions: {
      activeTintColor: 'black',  // Color of tab when pressed
      inactiveTintColor: '#484848', // Color of tab when not pressed
      showIcon: 'true', // Shows an icon for both iOS and Android
      showLabel: (Platform.OS !== 'android'), //No label for Android
      labelStyle: {
        fontSize: 11,
      },
      style: {
        backgroundColor: '#43C59E', // Makes Android tab bar white instead of standard blue
        height: (Platform.OS === 'ios') ? 48 : 50 // I didn't use this in my app, so the numbers may be off. 
      }
    },
  }
);

const AppContainer = createAppContainer(TabNavigator);

class App extends Component {

  static navigationOptions = ({ navigation }) => {

    return {
      title: 'Team'
    };
  };


  render() {

    return (

      <PaperProvider theme={theme}>
        <AppContainer />
      </PaperProvider>
    );
  }
}

export default App;

/*
// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'TestApp',
  () => TestApp
);
*/

/*

        <BottomNavigation
          {...this.props}
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
          raised theme='primary'

          //shifting={true}

        />
*/