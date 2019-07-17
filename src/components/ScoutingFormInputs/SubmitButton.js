import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import { Card } from 'react-native-paper';
import Colors from '../../styles/Colors'

class SubmitButton extends Component {

    state = {
        switchValue: false,

    }

    render() {
        return (
            <Card
                onPress={this.props.onPress}
                style={{ width: 100 + '%', backgroundColor: 'white', paddingBottom: 0 }}>
                <Card.Content>
                    <Button
                        buttonStyle={{
                            backgroundColor: Colors.primaryColor
                        }}
                        title={this.props.title}
                        onPress={this.props.onPress}
                    />
                </Card.Content>

            </Card>


        );
    }

}


export default SubmitButton;
