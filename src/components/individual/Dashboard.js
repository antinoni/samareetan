import React, { Component } from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import firebase from "firebase";

import ActiveTasks from "./dash/Active";
import CompletedTasks from "./dash/Completed";

const Tab = createMaterialTopTabNavigator();

export default class Dashboard extends Component {
  getCompletedTask = async () => {
    const taskDocument = await firestore()
      .collection("tasks")
      .where("completed", "==", "true")
      .get();
  };

  render() {
    //const { currentUser } = this.props;
    return (
      <View>
        <Tab.Navigator>
          <Tab.Screen name="ACTIVE" component={ActiveTasks} />
          <Tab.Screen name="COMPLETED" component={CompletedTasks} />
        </Tab.Navigator>
      </View>
    );
  }
}
