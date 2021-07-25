import React from "react";
import { Text, View, Button } from "react-native";

export default function ILanding({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="<" onPress={() => navigation.navigate("UserType")} />
      <Text>Individual</Text>
      <Text>Welcome to samareetan.</Text>
      <Text>
        As an individual you can volunteer to help organizations around you and
        help any cause you believe in
      </Text>
      <Button title="Sign In" onPress={() => navigation.navigate("ILogin")} />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate("IRegister")}
      />
      <Text>or</Text>
      <Button
        title="Continue with Facebook"
        onPress={() => navigation.navigate("ILanding")}
      />
      <Button
        title="Continue with Google"
        onPress={() => navigation.navigate("ILanding")}
      />
    </View>
  );
}
