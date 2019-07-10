import { StyleSheet } from 'react-native';

const backgroundColor = '#121212'
const primaryColor = '#43C59E'

const Styles = StyleSheet.create({
    container: {
        //justifyContent: 'center',
        //alignItems:'center',
        backgroundColor: backgroundColor,//'#2c2d3c',//'#900C3F',//'#3DFAFF',
        width: 100 + '%',
        height: 100 + '%',
        //flex: 1,
    },
    scrollViewCenter: {
        backgroundColor: backgroundColor,

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

    }


});

export default Styles;