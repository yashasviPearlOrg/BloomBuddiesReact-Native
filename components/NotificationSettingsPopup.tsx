import React, { useState } from "react";
import { Modal, Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
import { COLORS, SIZES } from "../constants";

const NotificationSettingsPopup = ({
  visibility,
  manageNotificationModalVisiblility,
}: any) => {
  const [appNotifications, setAppNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
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
              <Text style={styles.heading}>Notification Settings</Text>
              <Pressable
                onPress={() => manageNotificationModalVisiblility("close")}
              >
                <Feather name="x-circle" size={24} color="black" />
              </Pressable>
            </View>
            <View style={styles.line} />
            <View
              style={{
                paddingVertical: "10%",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <View style={styles.rows}>
                <Text style={styles.labels}>App Notifications</Text>
                <ToggleSwitch
                  isOn={appNotifications}
                  onColor={COLORS.primary}
                  offColor="rgba(52,52,52,0.2)"
                  size={SIZES.width > 400 ? "medium" : "small"}
                  onToggle={() => setAppNotifications(!appNotifications)}
                />
              </View>
              <View style={styles.rows}>
                <Text style={styles.labels}>Email Notifications</Text>
                <ToggleSwitch
                  isOn={emailNotifications}
                  onColor={COLORS.primary}
                  offColor="rgba(52,52,52,0.2)"
                  size={SIZES.width > 400 ? "medium" : "small"}
                  onToggle={() => setEmailNotifications(!emailNotifications)}
                />
              </View>
              <View style={styles.rows}>
                <Text style={styles.labels}>SMS Notifications</Text>
                <ToggleSwitch
                  isOn={smsNotifications}
                  onColor={COLORS.primary}
                  offColor="rgba(52,52,52,0.2)"
                  size={SIZES.width > 400 ? "medium" : "small"}
                  onToggle={() => setSmsNotifications(!smsNotifications)}
                />
              </View>
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
    backgroundColor: "rgba(52, 52, 52, 0.6)",
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
});

export default NotificationSettingsPopup;
