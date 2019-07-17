import { StyleSheet, Platform } from 'react-native';
import Colors from './Colors'

const defaultFont = Platform.OS == 'android' ? 'Roboto':'San Francisco';

const Styles = StyleSheet.create({
    container: {
        //justifyContent: 'center',
        //alignItems:'center',
        backgroundColor: Colors.backgroundColor, //'#2c2d3c',//'#900C3F',//'#3DFAFF',
        width: 100 + '%',
        height: 100 + '%',

    },
    scrollViewCenter: {
        backgroundColor: Colors.backgroundColor,

    },
    subCenterView: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    stdText: {
        fontSize: 20,
        fontFamily: defaultFont,
        fontWeight: 'bold',
        color: 'white',
    },
    largeTitle: {
        fontSize: 40,
        fontFamily: defaultFont,
        fontWeight: 'bold',
        color: 'white',
    },
    largeTeamImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    teamImage: {
        width: 200, 
        height: 200,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: 'green',
    }

});

export default Styles;