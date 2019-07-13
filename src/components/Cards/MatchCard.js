import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Alert, ScrollView, FlatList, Image, TextInput, View, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Style from '../../styles/Styles'

class MatchCard extends Component {

    render() {
        return (
            <View style={{ paddingBottom: 15, width: 90 + '%' }}>
                <Card
                    onPress={this.props.onPress}
                    style={{ width: 100 + '%', backgroundColor: 'white', paddingBottom: 0 }}>
                    <Card.Title title={'match: ' + this.props.matchNumber} subtitle={this.props.subtitle} left={(props) => <Avatar.Icon {...props} icon={this.props.icon} />} />
                    <Card.Content style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold' }}>Blue Alliance</Text>
                            <Text>{this.props.blueAlliance.team1}</Text>
                            <Text>{this.props.blueAlliance.team2}</Text>
                            <Text>{this.props.blueAlliance.team3}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold' }}>Red Alliance</Text>
                            <Text>{this.props.redAlliance.team1}</Text>
                            <Text>{this.props.redAlliance.team2}</Text>
                            <Text>{this.props.redAlliance.team3}</Text>
                        </View>

                    </Card.Content>

                </Card>
            </View>

        );
    }

}

export default MatchCard;