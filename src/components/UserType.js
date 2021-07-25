import "react-native-gesture-handler";
import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

export default function UserType({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ justifyContent: "center" }}>samareetan</Text>
      <Text style={{ justifyContent: "center" }}>are you a:</Text>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("NLanding")}>
          <Image
            style={{ height: 50, width: 50 }}
            source={{ uri: "https://source.unsplash.com/random" }}
          />
        </TouchableOpacity>
        <Text>NON PROFIT</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("ILanding")}>
          <Image
            style={{ height: 50, width: 50 }}
            source={{ uri: "https://source.unsplash.com/random" }}
          />
        </TouchableOpacity>
        <Text>INDIVIDUAL</Text>
      </View>
    </View>
  );
}
