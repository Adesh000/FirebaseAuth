import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";

const firebaseConfig = {
  apiKey: "AIzaSyAi_xQylFqlSVylSMcY--BfEuQ0N-AGv3s",
  authDomain: "reactnative-1339c.firebaseapp.com",
  projectId: "reactnative-1339c",
  storageBucket: "reactnative-1339c.appspot.com",
  messagingSenderId: "785593013709",
  appId: "1:785593013709:web:7c438cb7bfb8c5ced46084",
  measurementId: "G-QZVKGNCPTS",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
