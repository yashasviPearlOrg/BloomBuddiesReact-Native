import React, { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { TextInput } from "react-native-paper";
import { COLORS, SIZES } from "../../constants";
import PopupModal from "../Popups/PopupModal";

const BabySitterSignup = ({ navigation }: any) => {
  const [visiblity, setVisiblity] = useState(true);

  const goToSignin = () => {
    navigation.navigate("Welcome");
  };

  const managePopupItem = (data: String) => {
    console.log("Data::", data);
    setVisiblity(false);
  };

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <SafeAreaView
      style={{
        height: SIZES.height,
        paddingTop: "5%",
        backgroundColor: COLORS.primary,
      }}
    >
      {visiblity ? (
        <>
          <PopupModal
            visibility={visiblity}
            displayImage1={"../../assets/french-flag.png"}
            displayImage2={"../../assets/french-flag.png"}
            msg1={"I am French Baby Sitter"}
            msg2={"I am English Baby Sitter"}
            header={"Baby Sitter"}
            confirmAction={managePopupItem}
          />
        </>
      ) : (
        <>
          <View style={[styles.modalBox, styles.shadowStyle]}>
            <Text style={styles.heading}>Register</Text>
            <View style={styles.line} />
            <View style={styles.contentView}>
              <View style={styles.inputView}>
                <View style={styles.profileImageHolder}>
                  <Image
                    source={require("../../assets/account.png")}
                    resizeMode="contain"
                    style={styles.profileImage}
                  />
                </View>

                <TextInput
                  label="First Name"
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
                  // onChangeText={setEmail}
                  autoFocus
                />
                <TextInput
                  label="Last Name"
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
                />
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
                  // onChangeText={setEmail}
                  // autoFocus
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
                  // onChangeText={setPass}
                />
                <TextInput
                  label="Confirm Password"
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
                  // onChangeText={setPass}
                />
                <Pressable style={styles.button} onPress={()=>navigation.navigate('EditBabySitterProfileOne')}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
              </View>

              <View style={styles.line} />

              <View style={styles.bottomView}>
                <Pressable
                  style={{
                    flexDirection: "row",
                    width: "auto",
                    justifyContent: "center",
                    marginTop: "2%",
                    alignContent: "center",
                  }}
                >
                  <Image
                    source={require("../../assets/images/google-logo.png")}
                    resizeMode="cover"
                    style={{
                      height: 24,
                      width: 24,
                      marginHorizontal: 10,
                    }}
                  />
                  <Text
                    style={{
                      color: COLORS.primary,
                      fontSize: SIZES.width > 400 ? 20 : 16,
                    }}
                  >
                    Sign Up Using Google
                  </Text>
                </Pressable>
                <View
                  style={{
                    flexDirection: "row",
                    width: "auto",
                    justifyContent: "flex-end",
                    marginTop: "2%",
                  }}
                >
                  <Text style={styles.subHeading}>
                    Already Have an Account!{" "}
                  </Text>
                  <Pressable onPress={() => goToSignin()}>
                    <Text
                      style={[
                        styles.subHeading,
                        {
                          borderBottomColor: COLORS.primary,
                          borderBottomWidth: 1,
                          fontWeight: "600",
                        },
                      ]}
                    >
                      Click Here
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalBox: {
    backgroundColor: "white",
    borderRadius: 8,
    margin: "5%",
    paddingVertical: "2%",
    paddingHorizontal: "2%",
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
    height: "92%",
    width: "90%",
    flexDirection: "column",
    paddingTop: "2%",
    justifyContent: "flex-start",
  },
  inputView: {
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "80%",
    position: "relative",
  },
  inputLabel: {
    fontSize: SIZES.width > 400 ? 24 : 20,
    color: COLORS.primary,
  },
  input: {
    fontSize: SIZES.width > 400 ? 20 : 18,
    color: COLORS.primary,
    margin: "1%",
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
    bottom: "1%",
  },
  buttonText: {
    fontSize: SIZES.width > 400 ? 20 : 18,
    color: COLORS.white,
    position: "relative",
  },

  bottomView: {
    flexDirection: "column",
    width: "auto",
    justifyContent: "flex-end",
    textAlign: "center",
    marginTop: "5%",
    height: "14%",
  },

  subHeading: {
    color: COLORS.primary,
    fontSize: 16,
  },

  inputMargin: {
    marginTop: "8%",
  },

  noMargin: {},

  profileImageHolder: {
    height: "auto",
    width: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    height: 90,
    width: 90,
    borderRadius: 50,
    borderColor: COLORS.primary,
    borderWidth: 1,
    alignSelf: "center",
  },
});

export default BabySitterSignup;
