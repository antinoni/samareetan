import React, { Component } from "react";
import { Text, View } from "react-native";
import firestore from "firebase";

export default class Active extends Component {
  state = {
    task: {
      title: "",
    },
  };
  constructor(props) {
    super(props);
    this.getTask;
  }

  getActiveTask = async () => {
    const taskDocument = await firestore()
      .collection("tasks")
      .where("completed", "==", "false")
      .get();
  };

  render() {
    return <View>this.getActiveTask();</View>;
  }
}
