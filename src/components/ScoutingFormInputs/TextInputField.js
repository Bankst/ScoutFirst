import React, { Component } from 'react'
import { TextInput, Text } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Colors from '../../styles/Colors'

class TextInputField extends Component {

    state = {
        switchValue: false,

    }

    render() {
        return (
            <Card
                onPress={this.props.onPress}
                style={{ width: 100 + '%', backgroundColor: 'white', paddingBottom: 0 }}>
                <Card.Content>
                    <TextInput
                        placeholder={this.props.question}
                    />
                </Card.Content>

            </Card>


        );
    }

}


export default TextInputField;





