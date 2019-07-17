import React, { Component } from 'react';
import { View, ScrollView, Switch, Picker, Image, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements'
import { TextInput } from 'react-native-paper'
//import MultipleSelect from '../../components/RootComponents/MultipleSelect'
import SelectMultiple from '../../components/ScoutingFormInputs/SelectMultiple'
import SelectOne from '../../components/ScoutingFormInputs/SelectOne'
import SubmitButton from '../../components/ScoutingFormInputs/SubmitButton'

import Styles from '../../styles/Styles'
import TextSwitch from '../../components/ScoutingFormInputs/TextSwitch'
import TextInputField from '../../components/ScoutingFormInputs/TextInputField'
import ItemPicker from '../../components/ScoutingFormInputs/ItemPicker'
import SectionTitle from '../../components/ScoutingFormInputs/SectionTitle'
import NumberStepper from '../../components/ScoutingFormInputs/NumberStepper'

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
        selectedFruits: ['fruit1', 'fruit2', 'fruit3'],
        value: 0
    }

    onSelectionsChange = (selectedFruits) => {
        // selectedFruits is array of { label, value }
        this.setState({ selectedFruits })
    }

    render() {
        return (
            <ScrollView style={{
                ...Styles.scrollViewCenter,
                backgroundColor: 'white'
            }}>

                <SectionTitle
                    title='Autonomous'
                />
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

                <NumberStepper
                    question='How many Balls?'
                    maximumValue={100}
                />

                <SectionTitle
                    title='Tele-OP'
                />

                <SectionTitle
                    title='EndGame'
                />
                <SelectMultiple
                    title='Final Position'
                    selections={['Scored Final Token',
                        'Extended Past 3',
                        'Scored 10 points in EndGame']}
                />

                <SelectOne
                    title='Final Position'
                    selections={['Park Level 1',
                        'Climbed Level 2',
                        'Climbed Level 3']}
                />

                <SubmitButton
                    title='Submit'

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