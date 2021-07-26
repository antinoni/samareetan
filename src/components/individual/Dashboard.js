import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import firebase from "firebase";

//import ActiveTasks from "./dash/Active";
import CompletedTasks from "./dash/Completed";

const Tab = createMaterialTopTabNavigator();

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.onSignOut = this.onSignOut.bind(this);
  }
  getCompletedTask = async () => {
    const taskDocument = await firestore()
      .collection("tasks")
      .where("completed", "==", "true")
      .get();
  };

  onSignOut() {
    firebase.auth().signOut().then(() => console.log("logged out successfully."));
  }

  render() {
    //const { currentUser } = this.props;
    return (
      <View>
        <Tab.Navigator>
          <Tab.Screen name="COMPLETED" component={CompletedTasks} />
        </Tab.Navigator>

        <Button title="Sign Out" onPress={() => this.onSignOut()} />
      </View>
    );
  }
}
