import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Alert, ScrollView, FlatList, Image, TextInput, View, Text, } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { Button, Icon } from 'react-native-elements'
import Styles from '../../styles/Styles'
import TornamentCard from '../../components/Cards/TornamentCard.js'


class ScoutingRoute extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Tournaments',
      headerStyle: { backgroundColor: '#43C59E' },
      headerTitleStyle: { color: 'black' },
      headerRight:
        <Button
          icon={
            <Icon
              name='add'//plussquare
              size={25}
              color='black' />}
          type='clear'

        />
    }
  };

  render() {
    const { navigate } = this.props.navigation;

    return (


      <ScrollView style={{ ...Styles.container, paddingTop: 15 }}>
        <View style={Styles.subCenterView}>
          <TornamentCard
            icon='games'
            name='Albany'
            subtitle='50 teams'
            onPress={
              () => navigate('TeamListView')
            }
          />

          <TornamentCard
            icon='games'
            name='Blehs'
            subtitle='50 teams'
            onPress={
              () => navigate('TeamListView')
            }
          />
          <TornamentCard
            icon='games'
            name='nablesh'
            subtitle='50 teams'
            onPress={
              () => navigate('TeamListView')
            }
          />
        </View>

      </ScrollView>

    );
  }

}

//           <Text style={{ ...Styles.stdText, paddingBottom: 15 }}>Scouting Route</Text>
/*

        <TableView>
          <Section header="Tournaments">
            <Cell cellStyle="Basic" title="Albany" />
            <Cell cellStyle="RightDetail" title="Deluth" detail="Live" />

          </Section>
        </TableView>

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