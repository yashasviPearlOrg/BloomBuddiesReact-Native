import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./Screens/Welcome";
import ParentSignup from "./components/Parent/ParentSignup";
import BabySitterSignup from "./components/BabySitter/BabySitterSignup";
import Login from "./components/Authentication/Login";
import HomeScreen from "./components/HomeScreen";
import { useEffect, useState } from "react";
import EditBabySitterProfilePageOne from "./components/BabySitter/EditBabySitterProfilePageOne";
import BabySitterProfile from "./components/BabySitter/BabySitterProfile";
import DeleteProfilePopup from "./components/DeleteProfilePopup";


export default function App() {
  const Stack = createNativeStackNavigator();


  

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
          </>
          <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ParentSignup"
            component={ParentSignup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BabySitterSignup"
            component={BabySitterSignup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditBabySitterProfile"
            component={EditBabySitterProfilePageOne}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BabySitterProfile"
            component={BabySitterProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DeleteProfilePopup"
            component={DeleteProfilePopup}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
