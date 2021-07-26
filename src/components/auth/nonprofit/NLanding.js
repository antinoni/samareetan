import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function NLanding({ navigation }) {
  return (
    <View style={{ flex:1 }}>
      <Button title="<" onPress={() => navigation.navigate("UserType")} />
      <Text>Non-Profit</Text>
      <Text>Welcome to samareetan.</Text>
      <Text>
        As a non-profit you can find volunteers to help you with necessary tasks
        to run your organization
      </Text>
      <Button title="Sign In" onPress={() => navigation.navigate("NLogin")} />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate("NRegister")}
      />
      <Text>or</Text>
      <Button
        title="Continue with Facebook"
        onPress={() => navigation.navigate("NLanding")}
      />
      <Button
        title="Continue with Google"
        onPress={() => navigation.navigate("NLanding")}
      />
    </View>
  );
}