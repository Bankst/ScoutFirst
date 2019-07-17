import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, } from 'react-native-paper';
import { SimpleStepper } from '../../../node_modules/react-native-simple-stepper'
import Colors from '../../styles/Colors'

class NumberStepper extends Component {

    state = {
        value: 0
    }
    valueChanged = (value) => {
        // Truncate value to 2 decimal places and cast as Number (like the demo).
        const nextValue = Number(value.toFixed(2));
        this.setState({ value: nextValue });
        // ...
    }
    render() {

        return (
            <Card
                onPress={this.props.onPress}
                style={{ width: 100 + '%', backgroundColor: 'white', paddingBottom: 0 }}>
                <Card.Title title={this.props.question} />
                <Card.Content>
                    <View
                        style={{
                            alignItems: 'center',
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >

                        <Text
                            style={{
                                color: Colors.primaryColor,
                                fontWeight: 'bold',
                                fontSize: 40,
                                paddingRight: 20

                            }}
                        >{this.state.value}</Text>

                        <SimpleStepper
                            maximumValue={this.props.maximumValue}
                            minimumValue={this.props.minimumValue}
                            stepValue={this.props.stepValue}
                            tintColor={Colors.primaryColor}
                            value={this.state.value}
                            valueChanged={this.valueChanged}
                        />

                    </View>
                </Card.Content>
            </Card>


        );
    }

}

export default NumberStepper;
