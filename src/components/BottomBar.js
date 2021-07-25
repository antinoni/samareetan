import React, { Component } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import DashboardScreen from "./individual/Dashboard";
import FeedScreen from "./individual/Feed";
import ProfileScreen from "./individual/Profile";

import MaterialCommunityIcons from "react-native-vector-icons";

const Tab = createMaterialTopTabNavigator();

export default class BottomBar extends Component {
  render() {
    return (
      <Tab.Navigator initialRouteName="Dashboard" labeled={false}>
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="profile" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="person" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
