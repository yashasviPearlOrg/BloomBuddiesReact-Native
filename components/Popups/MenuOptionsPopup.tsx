import React from "react";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { View, Text } from "react-native";

import { useHeaderHeight } from "@react-navigation/elements";

const MenuOptionsPopup = ({
  sendNotificationModalVisiblity,
  sendDeleteAccountModalVisiblity,
}: any) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.options}>
        <Text style={styles.optionsText}>Logout</Text>
      </Pressable>
      <Pressable
        style={styles.options}
        onPress={() => sendNotificationModalVisiblity(true)}
      >
        <Text style={styles.optionsText}>Notification Settings</Text>
      </Pressable>
      <Pressable
        style={styles.options}
        onPress={() => sendDeleteAccountModalVisiblity(true)}
      >
        <Text style={styles.optionsText}>Delete Account</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  options: {
    width: "100%",
    paddingVertical: "5%",
    paddingHorizontal: "5%",
  },
  optionsText: {
    fontSize: 16,
  },
});

export default MenuOptionsPopup;
