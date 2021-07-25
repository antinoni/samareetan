import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import React, { Component } from "react";
import UsertypeScreen from "./UserType";
import ILandingScreen from "./auth/individual/ILanding";
//import IRegisterEmailScreen from "./auth/individual/IRegisterEmail";
import IRegisterScreen from "./auth/individual/IRegister";
import ILoginScreen from "./auth/individual/ILogin";
import NLandingScreen from "./auth/nonprofit/NLanding";
import NRegisterScreen from "./auth/nonprofit/NRegister";
import NLoginScreen from "./auth/nonprofit/NLogin";
import DashboardScreen from "./individual/Dashboard";

const Stack = createStackNavigator();

export default class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UserType">
          <Stack.Screen
            name="UserType"
            component={UsertypeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ILanding"
            component={ILandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ILogin"
            component={ILoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="IRegister"
            component={IRegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NLanding"
            component={NLandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NLogin"
            component={NLoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NRegister"
            component={NRegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
