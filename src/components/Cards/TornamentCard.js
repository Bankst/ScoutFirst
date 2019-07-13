import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Alert, ScrollView, FlatList, Image, TextInput, View, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Style from '../../styles/Styles'

class TornamentCard extends Component {

    render() {
        return (
            <View style={{ paddingBottom: 15, width: 90 + '%' }}>
                <Card
                    onPress={this.props.onPress}
                    style={{ width: 100 + '%', backgroundColor: 'white', paddingBottom: 0 }}>
                    <Card.Title title={this.props.name} subtitle={this.props.subtitle} left={(props) => <Avatar.Icon {...props} icon={this.props.icon} />} />
                    <Card.Content style={{ alignItems: 'center' }}>
                        <Text style={{
                            backgroundColor: 'black',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 20,
                            
                        }}>3rd Place</Text>
                        <Text>Match Number: 1</Text>
                        <Text>OSCAR Robotics vs Robonauts</Text>

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

export default TornamentCard;