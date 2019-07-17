import React, { Component } from 'react'
import { CheckBox } from 'react-native-elements'
import { View, Text, FlatList } from 'react-native'
import { Card } from 'react-native-paper';
import Colors from '../../styles/Colors'

class SelectOne extends Component {

    state = {
        checked: (new Array(this.props.selections.length)).fill(false),

    }
    render() {
        let checkBoxLines = this.props.selections.map((val, index) => {
            return (

                <CheckBox
                    checkedColor={Colors.primaryColor}
                    containerStyle={{
                        backgroundColor: 'white',
                        borderColor: 'white'
                    }}
                    iconRight
                    title={val}
                    key={val}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked[index]}
                    onPress={() => {
                        this.state.checked.fill(false)
                        this.state.checked[index] = !this.state.checked[index]
                        this.forceUpdate()
                        // probably bad form
                    }}

                />
            );
        })
        return (
            <Card>

                <Card.Title title={this.props.title} />

                <Card.Content>
                    <View>
                        {checkBoxLines}
                    </View>
                </Card.Content>

            </Card>
        );


    }

}

export default SelectOne;