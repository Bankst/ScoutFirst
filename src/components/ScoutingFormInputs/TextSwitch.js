import React, { Component } from 'react'
import { Switch, Text } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Colors from '../../styles/Colors'

class TextSwitch extends Component {

    state = {
        switchValue: false,

    }

    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
    }

    render() {
        return (
            <Card
                onPress={this.props.onPress}
                style={{ width: 100 + '%', backgroundColor: 'white', paddingBottom: 0 }}>
                <Card.Title title={this.props.question} />
                <Card.Content>
                    <Switch
                        disabled='false'
                        trackColor={{ true: Colors.primaryColor }}
                        value={this.state.switchValue}
                        onValueChange={this.toggleSwitch}
                    />
                </Card.Content>

            </Card>


        );
    }

}


export default TextSwitch;