import React, {Component} from 'react'
import { ScrollView } from 'react-native';
import Styles from '../../styles/Styles';
import { TextInput } from 'react-native-paper';


class AddNoteRoute extends Component {

    render(){
        return(

            <ScrollView style={Styles.scrollViewCenter}>
                <TextInput
                    placeholder='Enter Note Title'
                />

            </ScrollView>

        );
    }

}

export default AddNoteRoute;