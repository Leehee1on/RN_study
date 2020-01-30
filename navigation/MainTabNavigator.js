import React from 'react';
import { Platform,Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen'

import {Icon} from 'native-base';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);
HomeStack.navigationOptions = {
  tabBarLabel: ()=>(<></>),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 
          `ios-home${focused ? '' : '-outline'}`
          : 'md-home'}/>
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: ()=>(<></>),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} 
      />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {Settings: SettingsScreen},
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: ()=>(<></>),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 
    `ios-add-circle${focused? '':'-outline'}` : 'md-add-circle'} />
  ),
};

SettingsStack.path = '';


const ProfileStack = createStackNavigator(
  {Profile:ProfileScreen},
  config
  )
  ProfileStack.navigationOptions = {
    tabBarLabel: ()=>(<></>),
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name="md-person" />
    )
  }
  ProfileStack.path='';
  
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  ProfileStack,
});
tabNavigator.path = '';

export default tabNavigator;
