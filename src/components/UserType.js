import "react-native-gesture-handler";
import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

export default function UserType({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ marginTop: '5%', fontWeight: 'bold'}}>samareetan</Text>
        <Text style={{ marginTop: '-5%',fontSize: 28, fontWeight:'500'}}>are you a:</Text>
      </View>
      <TouchableOpacity style={{ flex: 1}} onPress={() => navigation.navigate("NLanding")}>
        <Image
          style={styles.npImage}
          source={{ uri: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" }}
        />
        <Text style={styles.npText}>Non-Profit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1}} onPress={() => navigation.navigate("ILanding")}>
        <Image
          style={styles.iImage}
          source={{ uri: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" }}
        />
        <Text style={styles.iText}>Individual</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'SF Pro Display',
  },
  header: {
    flex: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  npImage: {
    flex: 1,
  },
  npText: {
    position: 'absolute',
    marginTop: '52%',
    marginLeft: '8%',
    color: '#fff',
    fontSize: 36,
    fontWeight: '500',
    letterSpacing: 1,
  },
  iImage: {
    flex: 1,
  },
  iText: {
    position: 'absolute',
    marginTop: '52%',
    marginLeft: '10%',
    color: '#fff',
    fontSize: 36,
    fontWeight: '500',
    letterSpacing: 1,
  }
})