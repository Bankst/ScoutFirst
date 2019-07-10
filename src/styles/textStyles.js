import { StyleSheet } from 'react-native';

const textStyles = StyleSheet.create({
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


export {textStyles}