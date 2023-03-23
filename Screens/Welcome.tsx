import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import Login from "../components/Authentication/Login";
import { COLORS, SIZES } from "../constants";


const Welcome = ({navigation}:any) => {


  return (
    <View style={styles.container}>
      <Text style={styles.banner}>Welcome!{"\n"}Bloom Buddies</Text>
      <Login navigation = {navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    // alignSelf:'center'
    width: SIZES.width,
    height: SIZES.height,
  },
  banner: {
    fontSize: 35,
    fontWeight: "900",
    color: COLORS.white,
    alignSelf:'flex-start',
    margin:'5%',
  },
});

export default Welcome;
