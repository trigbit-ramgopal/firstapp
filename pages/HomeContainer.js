import 'react-native-gesture-handler';
import * as React from 'react';
import { Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeNavigator from './HomeNavigator'; 
import Settings from './Settings'; 
import SettingsXml from '../component/setting'; 

const Tab = createMaterialBottomTabNavigator();

export default class HomeContainer extends React.Component {
  render() {
  return (
     <Tab.Navigator 
     activeColor="#FFFFFF"
     inactiveColor="#808080"
     barStyle={{ backgroundColor: '#694fad' }}
     >
        <Tab.Screen name="Home" component={HomeNavigator} options={{
          tabBarIcon: ({ focused }) => (  
            <Image
              source={require('../asset/home_icon.png')}
              style={{width: 26, height: 26, 
              tintColor:focused ? "#FFFFFF" : "#808080"
              }}
            />)
        }} />
        <Tab.Screen name="Settings" component={Settings} options={{
          tabBarIcon: ({ focused }) => ( 
            <SettingsXml style={{width: 26, height: 26, 
             tintColor:focused ? "#FFFFFF" : "#808080"
             }}/>
            )
        }}  />
      </Tab.Navigator>
  );
}
}
