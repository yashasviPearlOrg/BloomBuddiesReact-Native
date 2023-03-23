import { Pressable } from "@react-native-material/core";
import React from "react";
import { View, Text } from "react-native";

const BabySitterProfile = ({ navigation }: any) => {
  return (
    <View>
      <Text>BabySitter Profile page</Text>
      <Pressable onPress={() => navigation.navigate("EditBabySitterProfile")}>
        <Text>Edit Profile</Text>
      </Pressable>
    </View>
  );
};

export default BabySitterProfile;
