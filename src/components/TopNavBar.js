import React, { Component } from 'react';


class TopNavBar extends Component {
 
    render(){
        let nav = createStackNavigator({
            Notes: {
                 screen: NotesRoute,
                 navigationOptions:{
                   title: "Notes",
                   header: <View style={{
                        justifyContent:"center",
                        backgroundColor:'#43C59E',
                        alignItems:'center',
                        paddingTop:25
                   }}>
                      <Text style={{
                      paddingBottom:15,
                      alignContent:'center',
                      fontWeight:'bold',
                      fontSize:20
                   }}>Notes</Text>
                   </View>,
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
    return(
        <View>
            
        </View>
    );
}
}

export default TopNavBar;