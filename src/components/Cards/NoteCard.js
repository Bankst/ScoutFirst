import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Alert, ScrollView, FlatList, Image, TextInput, View, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


class NoteCard extends Component {

    render() {
        return (
            <View style={{ paddingBottom: 15, width: 90 + '%' }}>
                <Card
                    onPress={this.props.onPress}
                    style={{ width: 100 + '%', backgroundColor: 'white', paddingBottom: 0 }}>
                    <Card.Title title={this.props.title} subtitle={this.props.subtitle} left={(props) => <Avatar.Icon {...props} icon={this.props.icon} />} />
                </Card>
            </View>

        );
    }

}

export default NoteCard;