import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Alert, ScrollView, FlatList, Image, TextInput, View, Text, } from 'react-native';
//import {TableView} from 'react-native-tableview'
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import {Button, Icon} from 'react-native-elements'
import {createStackNavigator, createAppContainer} from 'react-navigation';
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
/*
const RootStack = createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
      Details: {
        screen: DetailsScreen,
      },
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
  );

const AppContainer = createAppContainer(RootStack);
*/

class ScoutingRoute extends Component {
  
  /*
    state = {
        loading: true,
        users: [],
    }
    */
       /*
      async componentWillMount() {
        const response = await fetch('https://randomuser.me/api/?results=5000')
        const data = await response.json()
       
        this.setState({
          loading: false,
          users: data.results.map(a => ({
            name: `${a.name.first} ${a.name.last}`,
            id: a.registered,
          })),
        })
      }*/

      //static navigationOptions = {
      //  title: 'Scouting',
      //};


      
    static navigationOptions = {
        headerTitle: 'Live Scouting',
        headerRight: (
          <Button 
          icon={<Icon
               name='add'//plussquare
               size={25}
               color='black'/>}
          type='clear'
                    />
    ),
  };
  
    render(){
        //const {navigate} = this.props.navigation;

        return(

    
            <ScrollView style={{...styles.container, paddingTop: 75}}>
                <View style={styles.subCenterView}>
                    <Text style={styles.stdText}>Scouting Route</Text>
                </View>
                <TableView>
                <Section header="Tournaments">
                <Cell cellStyle="Basic" title="Albany" />
                <Cell cellStyle="RightDetail" title="Deluth" detail="Live" />
            
                </Section>
                </TableView>
            </ScrollView>
            
        );
    }

}

/*

const RootStack = createStackNavigator(
  {
    Scouting: {
      screen: ScoutingRoute,
    },
  },
  {
    initialRouteName: 'Scouting',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#43C59E',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'black',
      },
    },
  }
);

const AppContainer = createAppContainer(RootStack);

class ScoutingScreen extends Component {
  render(){

      return(
          <AppContainer/>
      );

  }
}
*/

export default ScoutingRoute;