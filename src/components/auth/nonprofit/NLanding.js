import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function NLanding({ navigation }) {
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
          onPress={() => navigation.navigate("UserType")}
        />
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 17,
            width: "auto",
            minWidth: "60%",
          }}
        >
          Organisation
        </Text>
      </View>
      <View style={styles.text}>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Welcome to samareetan.
        </Text>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            marginTop: "5%",
            fontSize: 15,
          }}
        >
          As a non profit you can find volunteers to help you with necessary
          tasks to run your organisation
        </Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={{
            marginRight: 40,
            marginLeft: 40,
            marginTop: 10,
            paddingTop: 15,
            paddingBottom: 15,
            backgroundColor: "#FFC37B",
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate("NLogin")}
        >
          <Text style={{ fontSize: 15, color: "white", textAlign: "center" }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginRight: 40,
            marginLeft: 40,
            marginTop: 10,
            paddingTop: 15,
            paddingBottom: 15,
            backgroundColor: "#fff",
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate("NRegister")}
        >
          <Text style={{ fontSize: 15, color: "#FFC37B", textAlign: "center" }}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", padding: "2%", color: "white" }}>
          or
        </Text>
        <TouchableOpacity
          style={{
            marginRight: 40,
            marginLeft: 40,
            marginTop: 10,
            paddingTop: 15,
            paddingBottom: 15,
            backgroundColor: "#0084F4",
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate("NLanding")}
        >
          <Text style={{ fontSize: 15, color: "#fff", textAlign: "center" }}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginRight: 40,
            marginLeft: 40,
            marginTop: 10,
            paddingTop: 15,
            paddingBottom: 15,
            backgroundColor: "#FF647C",
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate("NLanding")}
        >
          <Text style={{ fontSize: 15, color: "#fff", textAlign: "center" }}>
            Continue with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    fontFamily: "SF Pro Display",
  },
  header: {
    marginTop: "-5%",
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
    marginBottom: "35%",
    flex: 1,
  },
});
