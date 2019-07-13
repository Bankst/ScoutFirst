import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import NotesRoute from './NotesRoute'
import NoteView from './NoteView'


const NotesStack = createStackNavigator(
     {
          Notes: {
               screen: NotesRoute,

          },
          Note: {
               screen: NoteView,
          },
     },
     {
          initialRouteName: 'Notes',

     }
);

export default NotesStack