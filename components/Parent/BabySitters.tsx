import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import BabySittersListItem from "./BabySittersListItem";

const BabySitters = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>BabySitters</Text>
        <BabySittersListItem />
        <BabySittersListItem />
        <BabySittersListItem />
        <BabySittersListItem />
        <BabySittersListItem />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    paddingHorizontal:'1%'
  }
})

export default BabySitters;
