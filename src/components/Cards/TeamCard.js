import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Alert, ScrollView, FlatList, Image, TextInput, View, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Style from '../../styles/Styles'

class TeamCard extends Component {

    render() {
        return (
            <View style={{ paddingBottom: 15, width: 90 + '%' }}>
                <Card
                    onPress={this.props.onPress}
                    style={{ width: 100 + '%', backgroundColor: 'white', paddingBottom: 0 }}>
                    <Card.Title title={this.props.teamName} subtitle={this.props.subtitle} left={(props) => <Avatar.Icon {...props} icon={this.props.icon} />} />
                    <Card.Content style={{ alignItems: 'left' }}>
                        <Text style={{
                            backgroundColor: 'black',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 20,

                        }}>Rank: 1</Text>
                        <Text>RP: {this.props.stats.rp}</Text>
                        <Text>OPR: {this.props.stats.opr}</Text>
                        <Text>other: 343894</Text>
                    </Card.Content>

                </Card>
            </View>

        );
    }

}
/*
                    <Card.Content>
                        <Text>Hello world</Text>
                    </Card.Content>
                    */

export default TeamCard;