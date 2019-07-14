import React, { Component } from 'react';
import { View, ScrollView, Switch, Picker, Image, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements'
import { TextInput } from 'react-native-paper'
import SelectMultiple from 'react-native-select-multiple'
import Styles from '../../styles/Styles'
import TextSwitch from '../../components/ScoutingFormInputs/TextSwitch'
import TextInputField from '../../components/ScoutingFormInputs/TextInputField'
import ItemPicker from '../../components/ScoutingFormInputs/ItemPicker'
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

                <ItemPicker
                    question='Autonomous?'
                    pickerItems={['Basic Auto', 'No Auto', 'Full Auto']}
                />
                <TextSwitch
                    question={'Did they park'}
                />

                <TextSwitch
                    question={'Did they climb'}
                />
                <TextInputField
                    question='what is their intake design'
                />

            </ScrollView>
        );
    }
}

export default LiveScoutingForm;


/*
                <SelectMultiple
                    style={{ color: 'white' }}
                    items={fruits}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange}
                />
                */