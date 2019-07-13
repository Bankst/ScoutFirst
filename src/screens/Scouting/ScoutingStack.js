import ScoutingRoute from './ScoutingRoute'
import LiveScoutingForm from './LiveScoutingForm'
import TeamListView from './TeamListView'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

const ScoutingStack = createStackNavigator({
  Tornaments: {
    screen: ScoutingRoute,

  },
  LiveScoutingForm: {
    screen: LiveScoutingForm,
  },
  TeamListView: {
    screen: TeamListView
  }
},
  {
    initialRouteName: 'Tornaments',

  })

export default ScoutingStack