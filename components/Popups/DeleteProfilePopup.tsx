import React, { useEffect, useState } from "react";
import { View, Text, Modal, Pressable, StyleSheet, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
import { COLORS, SIZES } from "../../constants";
import { TextInput } from "react-native-paper";

const DeleteProfilePopup = ({
  visibility,
  manageDeleteAccountModalVisiblility,
  navigation,
}: any) => {
  const [text, setText] = useState("");
  const [disable, setDisable] = useState(true);

  const customStyle = disable ? styles.disabled : styles.enabled;

  useEffect(() => {
    if (text === "I <3 Bloom Buddies Babysitting") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [text]);

  const deleteAccount = () => {
    Alert.alert("Delete Account", "Are you sure!!", [
      {
        text: "Confirm",
        onPress: () => {
          manageDeleteAccountModalVisiblility("close");
          navigation.navigate("Welcome");
        },
        style: "default",
      },
      {
        text: "Cancel",
        onPress: () => manageDeleteAccountModalVisiblility("close"),
        style: "destructive",
      },
    ]);
  };

  return (
    <View>
      <Modal visible={visibility} animationType={"fade"} transparent={true}>
        <View style={styles.container}>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "white",
              width: "90%",
              borderWidth: 1,
              borderColor: "#fff",
              borderRadius: 7,
              elevation: 10,
              padding: "5%",
            }}
          >
            <View style={styles.header}>
              <Text style={styles.heading}>Delete Account</Text>
              <Pressable
                onPress={() => manageDeleteAccountModalVisiblility("close")}
              >
                <Feather name="x-circle" size={24} color="black" />
              </Pressable>
            </View>
            <View style={styles.line} />
            <View
              style={{
                paddingVertical: "5%",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <Text>{"To Delete Your Account, Kindly type:"}</Text>
              <Text style={{ fontWeight: "800" }}>
                {'\n "I <3 Bloom Buddies Babysitting"'}
              </Text>
              <TextInput
                mode="outlined"
                outlineColor={COLORS.black}
                activeOutlineColor={COLORS.primary}
                style={{
                  fontSize: SIZES.width > 400 ? 20 : 16,
                  color: COLORS.primary,
                  marginVertical: "5%",
                  backgroundColor: "white",
                }}
                onChangeText={(val: string) => setText(val)}
              />
              <Pressable
                style={[styles.button, customStyle]}
                onPress={() => deleteAccount()}
                disabled={disable}
              >
                <Text style={styles.buttonText}>Delete Account</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2%",
  },
  labels: {
    fontSize: 20,
    color: COLORS.primary,
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  heading: {
    color: COLORS.primary,
    fontSize: SIZES.width > 400 ? 30 : 22,
    fontWeight: "700",
  },
  line: {
    height: 1,
    backgroundColor: COLORS.primary,
    width: "100%",
    marginVertical: "2%",
  },

  button: {
    width: SIZES.width > 400 ? "80%" : "70%",
    backgroundColor: "#E10000",
    paddingVertical: "2%",
    paddingHorizontal: "8%",
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: SIZES.width > 400 ? 20 : 18,
    color: COLORS.white,
    textAlign: "center",
  },
  disabled: {
    backgroundColor: "#E1000070",
  },
  enabled: {
    backgroundColor: "#E10000",
  },
});

export default DeleteProfilePopup;
