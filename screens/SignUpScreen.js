import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = (username, email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = username;
      })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMsg = error.message;
        console.log(errorCode);
        console.log(errorMsg);
      });
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        autoCapitalize={true}
        onChangeText={(username) => setUsername(username)}
        keyboardType="name-phone-pad"
      />
      <TextInput
        placeholder="Email"
        autoCapitalize={false}
        onChangeText={(email) => setEmail(email)}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        autoCapitalize={false}
        onChangeText={(password) => setPassword(password)}
        keyboardType="name-phone-pad"
      />
      <Pressable onPress={() => signupUser(username, email, password)}>
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
