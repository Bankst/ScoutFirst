import React, { Component } from 'react'
import { Card } from 'react-native-paper';
import Colors from '../../styles/Colors'

class SectionTitle extends Component {

    render() {
        return (
            <Card
                onPress={this.props.onPress}
                style={{ width: 100 + '%', backgroundColor: 'white', paddingBottom: 0 }}>
                <Card.Title title={this.props.title} />

            </Card>


        );
    }

}


export default SectionTitle;