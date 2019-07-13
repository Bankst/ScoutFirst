import React, { Component } from 'react';
import { View, ScrollView, Switch, Picker, Image, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements'
import { TextInput } from 'react-native-paper'
import SelectMultiple from 'react-native-select-multiple'
import Styles from '../../styles/Styles'
import Colors from '../../styles/Colors'

const fruits = ['Apple', 'Orange', 'Grape']

class LiveScoutingForm extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Live Scouting',
            headerStyle: { backgroundColor: '#43C59E' },
            headerTitleStyle: { color: 'black' },
        }
    };

    state = {
        language: '',
        selectedFruits: [],
    }

    onSelectionsChange = (selectedFruits) => {
        // selectedFruits is array of { label, value }
        this.setState({ selectedFruits })
    }

    render() {
        return (
            <ScrollView style={Styles.scrollViewCenter}>

                <Switch
                    disabled='false'
                    trackColor={{ true: Colors.primaryColor }}
                />

                <TextInput
                    placeholder='Enter Number of Balls'
                    backgroundColor='white'
                />

                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 250, width: 100, backgroundColor: 'white' }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ language: itemValue })
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="akdf" value="djfld" />

                </Picker>

                <SelectMultiple
                    style={{ color: 'white' }}
                    items={fruits}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange}
                />

            </ScrollView>
        );
    }
}

export default LiveScoutingForm;
