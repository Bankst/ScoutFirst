import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Alert, ScrollView, FlatList, Image, TextInput, View, Text} from 'react-native';
import {AreaChart, Grid, PieChart} from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { DefaultTheme, Provider as PaperProvider, Card } from 'react-native-paper';
import Styles from '../../styles/Styles.js'

/*
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
  */

class TeamRoute extends Component {
    componentDidMount() {
        //Dementions.get('window').width

    }

    static navigationOptions = {
        headerTitle: 'Team',
        /*headerRight: (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),*/
      };

    render(){
        
        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)
        
        const pieData = [75, 50]
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))
        return(
            <ScrollView style={Styles.container} contentContainerStyle='center'>
            
            <View style={{...Styles.subCenterView, paddingTop:15,}}>
                <Text style={Styles.largeTitle}>832</Text>
                <Text style={Styles.stdText}>Oscar Robotics</Text>
            </View>
            <View style={{...Styles.subCenterView, paddingTop: 20}}>
                <Image style={Styles.teamImage} source={require('../../../assets/TeamLogo.png')} />
            </View>
            <View style={Styles.subCenterView}>
                <Text style={Styles.largeTitle}>John Doe</Text>
                <Text style={Styles.stdText}>Member</Text> 
            </View>

            <View style={{...Styles.subCenterView, paddingTop: 150}}>
              <Card
                style={{width: 90 + '%'}}>
                <AreaChart 
                    style={{ height: 200 }}
                    data={ data }
                    contentInset={{ top: 30, bottom: 30 }}
                    curve={ shape.curveNatural }
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                >
                </AreaChart>
                <PieChart
                  style={ { height: 200 } }
                  data={ pieData }
                />
              </Card>
           
            </View>
            </ScrollView>

        );
    }

}
/*
const RootStack = createStackNavigator(
    {
      Team: {
        screen: TeamRoute,
      },
    },
    {
      initialRouteName: 'Team',
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

class TeamScreen extends Component {
    render(){

        return(
            <AppContainer/>
        );

    }
}
*/

export default TeamRoute;

