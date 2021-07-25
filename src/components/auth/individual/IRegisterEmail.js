import React, { Component } from "react";
import { Text, View, Button, TextInput } from "react-native";

export default class IRegisterEmail extends Component {
  render() {
    const email = this.setState("Email");
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
        <Text>
          Sign Up to browse the app and start helping organizations in need!
          Enter your email address to begin.
        </Text>
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <Button
          title="Continue"
          onPress={() => this.props.navigation.navigate("IRegister", email)}
        />
      </View>
    );
  }
}
