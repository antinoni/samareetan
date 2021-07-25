import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";
import firebase from "firebase";

//TODO: check if correct password

export default class ILogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <View>
          <Button
            title="<"
            onPress={() => this.props.navigation.navigate("NLanding")}
          />
          <Text> Sign In</Text>
          <Button
            title="Sign Up"
            onPress={() => this.props.navigation.navigate("NRegister")}
          />
        </View>
        <Text>Welcome back!</Text>
        <Text>Sign in to your account to see what's new.</Text>

        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />

        <Button title="Sign In" onPress={() => this.onSignIn()} />
        <Text>Forgot password? Reset here</Text>
      </View>
    );
  }
}
