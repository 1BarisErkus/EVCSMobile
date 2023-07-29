import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/pages/Login'
import Register from './src/pages/Register'
import ForgotPassword from './src/pages/ForgotPassword';
import Map from './src/pages/BottomNavigator/TabNavigator/Map';
import NearStations from './src/pages/BottomNavigator/TabNavigator/NearStations';
import Recipes from './src/pages/BottomNavigator/Recipes';
import Profile from './src/pages/BottomNavigator/Profile/Main'
import AccountInfo from './src/pages/BottomNavigator/Profile/AccountInfo';
import ChangePassword from './src/pages/BottomNavigator/Profile/ChangePassword';

function changeColor(color) {
  tabBarStyle.backgroundColor = color
}

const Tab = createMaterialTopTabNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#333' },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray'
      }}
      onTabSelected={(tab) => changeColor(tab.color)}
    >
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="NearStations" component={NearStations} />
    </Tab.Navigator>
  );
}

const Bottom = createBottomTabNavigator()

function BottomNavigator() {
  return (
    <Bottom.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size, color }) => {
        let iconName
        if (route.name === "Ana Sayfa") {
          iconName = focused ? "home" : "home-outline"
        } else if (route.name === "Tarifeler") {
          iconName = focused ? "menu" : "menu-outline"
        } else if (route.name === "Profil") {
          iconName = focused ? "person" : "person-outline"
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarStyle: { backgroundColor: '#333' },
      headerShown: false,
      tabBarActiveTintColor: 'orange',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Bottom.Screen name="Ana Sayfa" component={TabNavigator} />
      <Bottom.Screen name="Tarifeler" component={Recipes} />
      <Bottom.Screen name="Profil" component={Profile} />
    </Bottom.Navigator>
  );
}


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar hidden={false} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='LoginScreen'>
          <Stack.Screen name='LoginScreen' component={Login} />
          <Stack.Screen name='RegisterScreen' component={Register} />
          <Stack.Screen name='ForgotPasswordScreen' component={ForgotPassword} />
          <Stack.Screen name='HomeScreen' component={BottomNavigator} />
          <Stack.Screen name='AccountInfoScreen' component={AccountInfo} />
          <Stack.Screen name='ChangePasswordScreen' component={ChangePassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App