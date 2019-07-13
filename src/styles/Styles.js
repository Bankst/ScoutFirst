import { StyleSheet } from 'react-native';
import Colors from './Colors'

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
        fontWeight: 'bold',
        color: 'white',

    },
    largeTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',

    },
    largeTeamImage: {
        width: 200,
        height: 200,
        borderRadius: 100,

    }

});

export default Styles;