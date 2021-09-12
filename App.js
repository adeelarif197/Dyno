import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

////////////////// Stack Screens ///////////////////
import Welcome_Screen from './source/screens/auth_screens/Welcome_Screen';
import Login_Screen from './source/screens/auth_screens/Login_Screen';
import Signup_Screen from './source/screens/auth_screens/Signup_Screen';
import Forget_Password_Screen from './source/screens/auth_screens/Forget_Password_Screen';
import Verification_Code_Screen from './source/screens/auth_screens/Verification_Code_Screen';
import Forget_Password_Phone_Screen from './source/screens/auth_screens/Forget_Password_Phone_Screen';
import Reset_Password_Screen from './source/screens/auth_screens/Reset_Password_Screen';
import Profile_Screen from './source/screens/home_screens/Profile_Screen';
import Home_Screen from './source/screens/home_screens/Home_Screen';
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome_Screen" component={Welcome_Screen} />
          <Stack.Screen name="Login_Screen" component={Login_Screen} />
          <Stack.Screen name="Signup_Screen" component={Signup_Screen} />
          <Stack.Screen name="Home_Screen" component={Home_Screen} />
          <Stack.Screen name="Forget_Password_Screen" component={Forget_Password_Screen} />
          <Stack.Screen name="Forget_Password_Phone_Screen" component={Forget_Password_Phone_Screen} />
          <Stack.Screen name="Verification_Code_Screen" component={Verification_Code_Screen} />
          <Stack.Screen name="Reset_Password_Screen" component={Reset_Password_Screen} />
          <Stack.Screen name="Profile_Screen" component={Profile_Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
