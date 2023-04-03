import React, { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

import { COLORS, SIZES } from "../../constants";

const Login = ({ navigation }: any) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [userType, setUserType] = useState("");

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = () => {
    if (email != null && pass != null) {
      if (email === "parent@gmail.com" && pass === "parent@123") {
        setUserType("Parent");
        navigation.navigate("Home", { user: "Parent" });
      } else if (email === "babysitter@gmail.com" && pass === "baby@123") {
        setUserType("BabySitter");
        navigation.navigate("Home", { user: "BabySitter" });
      } else {
        alert("Invalid Credentials!!!");
      }
    }
    // navigation.navigate("Home", { user: "Parent" });
  };

  const goToParentSignup = () => {
    navigation.navigate("ParentSignup");
  };

  const goToBabySitterSignup = () => {
    navigation.navigate("BabySitterSignup");
  };

  const [newUser, setNewUser] = useState(false);

  return (
    <View style={[styles.modalBox, styles.shadowStyle]}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.line} />
      <View style={styles.contentView}>
        <View style={styles.inputView}>
          {/* <Text>{customStyle}</Text> */}
          <TextInput
            label="Email"
            mode="outlined"
            left={
              <TextInput.Icon
                iconColor={COLORS.primary}
                icon="email"
                size={20}
              />
            }
            style={styles.input}
            outlineColor={COLORS.primary}
            activeOutlineColor={COLORS.primary}
            onChangeText={setEmail}
            autoFocus
          />
          <TextInput
            label="Password"
            mode="outlined"
            style={styles.input}
            outlineColor={COLORS.primary}
            activeOutlineColor={COLORS.primary}
            left={
              <TextInput.Icon
                iconColor={COLORS.primary}
                icon="lock"
                size={20}
              />
            }
            right={
              <TextInput.Icon
                icon={secureTextEntry ? "eye-off" : "eye"}
                size={20}
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry);
                  return false;
                }}
              />
            }
            secureTextEntry={secureTextEntry}
            onChangeText={setPass}
          />
          <Pressable style={styles.button} onPress={() => login()}>
            <Text style={styles.buttonText}>Sign In</Text>
          </Pressable>
        </View>

        <View style={styles.line} />

        {!newUser ? (
          <View style={styles.bottomView}>
            <Text style={styles.subHeading}>New User! </Text>
            <Pressable>
              <Text
                style={[
                  styles.subHeading,
                  { borderBottomColor: COLORS.primary, borderBottomWidth: 1 },
                ]}
                onPress={() => setNewUser(true)}
              >
                Click Here
              </Text>
            </Pressable>
          </View>
        ) : (
          <View
            style={[styles.bottomView, { justifyContent: "space-between" }]}
          >
            <Pressable
              style={[
                styles.button,
                {
                  position: "relative",
                  width: "45%",
                  paddingHorizontal: "1%",
                },
              ]}
              onPress={() => goToBabySitterSignup()}
            >
              <Text style={styles.buttonText}>I am {"\n"}Babysitter</Text>
            </Pressable>
            <Pressable
              style={[
                styles.button,
                {
                  position: "relative",
                  width: "45%",
                  paddingHorizontal: "1%",
                },
              ]}
              onPress={() => goToParentSignup()}
            >
              <Text style={styles.buttonText}>I am {"\n"}Parent</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBox: {
    backgroundColor: "white",
    borderRadius: 8,
    margin: "5%",
    paddingVertical: "5%",
    paddingHorizontal: "2%",
    height: SIZES.height * 0.7,
    width: SIZES.width * 0.9,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },

  shadowStyle: {
    shadowColor: COLORS.black,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },

  heading: {
    fontSize: SIZES.width > 400 ? 30 : 28,
    fontWeight: "900",
    color: COLORS.primary,
  },

  line: {
    height: 1,
    backgroundColor: COLORS.primary,
    width: "100%",
    marginVertical: "2%",
  },

  contentView: {
    height: "90%",
    width: "90%",
    flexDirection: "column",
    paddingTop: "10%",
  },
  inputView: {
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "75%",
    position: "relative",
  },
  inputLabel: {
    fontSize: SIZES.width > 400 ? 24 : 20,
    color: COLORS.primary,
  },
  input: {
    fontSize: SIZES.width > 400 ? 20 : 16,
    color: COLORS.primary,
    marginVertical: "5%",
    backgroundColor: "white",
  },
  button: {
    width: SIZES.width > 400 ? "80%" : "70%",
    backgroundColor: COLORS.primary,
    paddingVertical: "2%",
    paddingHorizontal: "8%",
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    position: "absolute",
    bottom: "5%",
  },
  buttonText: {
    fontSize: SIZES.width > 400 ? 20 : 18,
    color: COLORS.white,
    position: "relative",
    textAlign: "center",
  },

  bottomView: {
    flexDirection: "row",
    width: "100%",
    textAlign: "center",
    marginTop: "10%",
    justifyContent: "flex-end",
  },

  subHeading: {
    color: COLORS.primary,
    fontSize: 16,
  },

  inputMargin: {
    marginTop: "8%",
  },

  noMargin: {},
});

export default Login;
