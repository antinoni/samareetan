import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import firebase from "firebase";

export default class NRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      c_password: "",
      phone: "",
    };

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password, name } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("nonpusers")
          .doc(firebase.auth().currentUser.uid)
          .set({ name, email });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <TextInput
          placeholder="Organization Name"
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          placeholder="Email Adress"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <Text> Min. 8 characters, at least 1 number and 1 capital letter.</Text>
        <TextInput
          placeholder="Repeat Password"
          secureTextEntry={true}
          onChangeText={(password) => {
            this.setState({ password }), this.passwordCheck();
          }}
        />
        <TextInput
          placeholder="Phone Number"
          onChangeText={(phone) => this.setState({ phone })}
        />

        <Button title="Get Started" onPress={() => this.onSignUp()} />
      </View>
    );
  }
}
