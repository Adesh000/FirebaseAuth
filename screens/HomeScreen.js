import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const HomeScreen = ({navigation}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if(user){
        setName(user.displayName)
        setEmail(user.email)
      } else {
        navigation.replace('Sign In')
        console.log('User is Signed Out')
      }
    })
  }, [])

  const signOutUser = () => {
    const auth = getAuth()
    signOut(auth).then(() => {
      console.warn('Signned Out')
    }).catch((error) => {
      console.warn(error);
    })
  }

  return (
    <View style={styles.container}>
      <Text>Hey {name}</Text>
      <Text>You are logged in as: {email} </Text>
      <TouchableOpacity onPress={() => signOutUser()}>
        <Button title="Sign out" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
