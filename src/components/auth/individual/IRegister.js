import React, { Component } from "react";
import { Text, View, Button, TextInput } from "react-native";
import firebase from "firebase";

export default class IRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      surname: "",
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
          .collection("inusers")
          .doc(firebase.auth().currentUser.uid)
          .set({ name, email });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  passwordCheck() {
    if (this.state.password !== this.state.c_password) {
      <Text>Passwords don't match!</Text>;
    }
  }

  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <View>
          <Button
            title="<"
            onPress={() => this.props.navigation.navigate("ILanding")}
          />
          <Text> Sign Up</Text>
          <Button
            title="Sign In"
            onPress={() => this.props.navigation.navigate("ILogin")}
          />
        </View>
        <Text>Create an account</Text>
        <TextInput
          placeholder="First Name"
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          placeholder="Last Name"
          onChangeText={(surname) => this.setState({ surname })}
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
