import DashboardScreen from "./individual/Dashboard";
import ProfileScreen from "./individual/Profile";
import FeedScreen from "./individual/Feed";
import Main from "./individual/Main";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import React, { Component } from "react";

const Stack = createStackNavigator();

export default class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Feed"
            component={FeedScreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
