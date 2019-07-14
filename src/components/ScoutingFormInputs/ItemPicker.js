import React, { Component } from 'react'
import { TextInput, Text, Picker, FlatList } from 'react-native'
import { Card } from 'react-native-paper';
import Colors from '../../styles/Colors'

class ItemPicker extends Component {

    state = {
        switchValue: false,

    }

    render() {

        let pickerItems = this.props.pickerItems.map((val) => {
            return <Picker.Item label={val} key={val} value={val} />
        })
        return (
            <Card
                onPress={this.props.onPress}
                style={{ width: 100 + '%', backgroundColor: 'white', paddingBottom: 0 }}>
                <Card.Content>
                    <Card.Title title={this.props.question} />
                    <Picker
                        selectedValue={this.state.language}
                        style={{ height: 150, width: 100 + '%', backgroundColor: 'white' }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                        }>

                        {pickerItems}

                    </Picker>
                </Card.Content>

            </Card>


        );
    }

}


export default ItemPicker;