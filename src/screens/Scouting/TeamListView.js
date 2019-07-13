import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import Swiper from 'react-native-swiper'
import Styles from '../../styles/Styles'
import Colors from '../../styles/Colors'

import TeamCard from '../../components/Cards/TeamCard';
import MatchCard from '../../components/Cards/MatchCard';


class TeamListView extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Live Scouting',
            headerStyle: { backgroundColor: '#43C59E' },
            headerTitleStyle: { color: 'black' },
            headerRight:
                <Button
                    icon={
                        <Icon
                            name='mail'//clipboard //polymer //palette //pages //mail
                            size={25}
                            color='black' />}
                    type='clear'
                    onPress={() => navigation.navigate('LiveScoutingForm')}

                />
        }
    };

    render() {
        return (
            <Swiper
                bounces
                loop={false}
                dotColor={Colors.backgroundColor}
                activeDotColor={Colors.primaryColor}
                backgroundColor={Colors.backgroundColor}>
                <ScrollView
                    style={Styles.scrollViewCenter}
                >
                    <View
                        style={{ ...Styles.subCenterView, paddingTop: 15 }}
                    >

                        <TeamCard
                            teamName='Oscar Robotics'
                            stats={{ rp: 100, opr: 203 }}
                            icon='apps' //code
                        />

                    </View>
                </ScrollView>


                <ScrollView
                    style={Styles.scrollViewCenter}
                >
                    <View
                        style={{ ...Styles.subCenterView, paddingTop: 15 }}
                    >
                        <MatchCard
                            matchNumber={1}
                            blueAlliance={{
                                team1: 'Oscar Robotics',
                                team2: 'Citrus Circuts',
                                team3: 'OTTO',
                            }}
                            redAlliance={{
                                team1: 'Kell Robotics',
                                team2: 'RoboNaughts',
                                team3: 'IHOT',
                            }}

                            icon='dvr'
                        />
                        <MatchCard
                            matchNumber={2}
                            blueAlliance={{
                                team1: 'Oscar Robotics',
                                team2: 'Citrus Circuts',
                                team3: 'OTTO',
                            }}
                            redAlliance={{
                                team1: 'Kell Robotics',
                                team2: 'RoboNaughts',
                                team3: 'IHOT',
                            }}

                            icon='dvr'
                        />
                    </View>

                </ScrollView>
            </Swiper>
        );
    }

}


export default TeamListView;