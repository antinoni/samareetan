import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
} from "react-native";
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
        console.log("logged in successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{
            position: "absolute",
            width: "110%",
            height: "110%",
            marginLeft: "-10%",
            opacity: "0.75",
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          }}
        />
        <View style={styles.header}>
          <Icon.Button
            color="#fff"
            size={25}
            name="arrow-back-ios"
            onPress={() => this.props.navigation.navigate("ILanding")}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Sign In
          </Text>
          <Button
            color="#FFC37B"
            title="Sign Up"
            onPress={() => this.props.navigation.navigate("IRegister")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    fontFamily: "SF Pro Display",
  },
  header: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    flex: 1,
    textAlign: "center",
    padding: "10%",
    color: "#fff",
    fontSize: 36,
    fontWeight: "500",
  },
  button: {
    flex: 1,
  },
});
