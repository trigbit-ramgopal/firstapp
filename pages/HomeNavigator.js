import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator,HeaderBackButton } from '@react-navigation/stack';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import FlexDesign from '../pages/FlexDesign';
import FlexDesign2 from '../pages/FlexDesign2';
import FlexDesign3 from '../pages/FlexDesign3';
import FlexDesign4 from '../pages/FlexDesign4';
import FlexDesign5 from '../pages/FlexDesign5';
import Authentication from '../pages/Authentication';
import SavePhone from '../pages/SavePhone';
import FlatList from '../pages/FlatList';
import ModalExample from '../pages/ModalExample';
import SpeechText from '../pages/SpeechText';

const Stack = createStackNavigator();

export default class HomeNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
        <Stack.Screen name="FlexDesign" component={FlexDesign} options={{ headerShown: true }} />
        <Stack.Screen name="FlexDesign2" component={FlexDesign2} options={{ headerShown: true }} />
        <Stack.Screen name="FlexDesign3" component={FlexDesign3} options={{ headerShown: true }} />
        <Stack.Screen name="FlexDesign4" component={FlexDesign4} options={{ headerShown: true }} />
        <Stack.Screen name="FlexDesign5" component={FlexDesign5} options={{ headerShown: true }} />
        <Stack.Screen name="Authentication" component={Authentication} options={{ headerShown: true }} />
        <Stack.Screen name="SavePhone" component={SavePhone} options={({ navigation }) => ({
          headerShown: true,
          headerLeft: () => (
            <HeaderBackButton
              label="Home"
              onPress={() => navigation.navigate('Home')}
            />
          ),
        })} />
        <Stack.Screen name="FlatList" component={FlatList} options={{ headerShown: true }} />
        <Stack.Screen name="ModalExample" component={ModalExample} options={{ headerShown: true }} />
        <Stack.Screen name="SpeechText" component={SpeechText} options={{ headerShown: true }} />
      </Stack.Navigator>
    );
  }
}
