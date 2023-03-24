import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ParentProfile from "./Parent/ParentProfile";
import Posts from "./BabySitter/JobPosts";
import ChatBox from "./ChatBox";
import BabySitterProfile from "./BabySitter/BabySitterProfile";
import Calendar from "./BabySitter/Calendar";
import MyBuddies from "./Parent/MyBuddies";
import BabySitters from "./Parent/BabySitters";
import Documents from "./Documents";
import Notifications from "./Notifications";
import MenuOptionsPopup from "./MenuOptionsPopup";
import NotificationSettingsPopup from "./NotificationSettingsPopup";
import DeleteProfilePopup from "./DeleteProfilePopup";

const HomeScreen = ({ navigation, route }: any) => {
  const userType = route?.params?.user;

  const Tab = createBottomTabNavigator();

  //   const headerHeight = useHeaderHeight();

  const [menuVisibility, setMenuVisibility] = useState(false);
  const showOptions = () => {
    setMenuVisibility(!menuVisibility);
  };

  const [notificationModalVisiblity, setNotificationModalVisiblity] =
    useState(false);

  const [DeleteAccountModalVisiblity, setDeleteAccountModalVisiblity] =
    useState(false);

  const handleNotificationModal = (data: any) => {
    console.log("notificationdata:: ", data);
    if (data === true) {
      setMenuVisibility(false);
      setNotificationModalVisiblity(true);
    } else {
      setNotificationModalVisiblity(false);
    }
  };

  const manageNotificationVisibility = (val: string) => {
    console.log("val -not::: ", val);
    if (val === "close") setNotificationModalVisiblity(false);
  };

  const handleDeleteAccountModal = (data: any) => {
    if (data === true) {
      setMenuVisibility(false);
      setDeleteAccountModalVisiblity(true);
    } else {
      setDeleteAccountModalVisiblity(false);
    }
  };

  const manageDeleteAccountVisiblility = (val: string) => {
    if (val === "close") setDeleteAccountModalVisiblity(false);
  };

  return (
    <>
      {menuVisibility && (
        <View
          style={[
            {
              position: "absolute",
              top: 82,
              right: 0,
              zIndex: 1,
              backgroundColor: "white",
              width: "auto",
              height: SIZES.height > 700 ? "15%" : "18%",
              borderRadius: 10,
            },
            styles.shadowStyle,
          ]}
        >
          <MenuOptionsPopup
            sendNotificationModalVisiblity={handleNotificationModal}
            sendDeleteAccountModalVisiblity={handleDeleteAccountModal}
          />
        </View>
      )}
      {notificationModalVisiblity && (
        <NotificationSettingsPopup
          visibility={notificationModalVisiblity}
          manageNotificationModalVisiblility={manageNotificationVisibility}
        />
      )}
      {
        DeleteAccountModalVisiblity && (
          <DeleteProfilePopup
          visibility = {DeleteAccountModalVisiblity}
          manageDeleteAccountModalVisiblility = {manageDeleteAccountVisiblility}
          navigation={navigation}
          />
        )
      }

      <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={({ route }) => ({
          tabBarActiveBackgroundColor: "#CBE6FF",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let iconName: any;
            let rn = route.name;

            const size = SIZES.width>400?30:20;

            if (rn === "Profile")
              iconName = focused ? "account-circle" : "account-circle-outline";
            else if (rn === "Jobs")
              iconName = focused ? "post" : "post-outline";
            else if (rn === "Message")
              iconName = focused ? "message-text" : "message-text-outline";
            else if (rn === "Calendar")
              iconName = focused ? "calendar-month" : "calendar-month-outline";
            else if (rn === "Files")
              iconName = focused ? "file-document" : "file-document-outline";
            else if (rn === "Notifications")
              iconName = focused ? "list-status" : "list-status";
            else if (rn === "MyBuddies")
              iconName = focused ? "handshake" : "handshake-outline";
            else if (rn === "Babysitters")
              iconName = focused ? "account-group" : "account-group-outline";
            else iconName = "menu";

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={COLORS.primary}
              />
            );
          },
          tabBarActiveTintColor: COLORS.primary,
        })}
      >
        <Tab.Screen
          name="Profile"
          component={userType == "Parent" ? ParentProfile : BabySitterProfile}
          //   initialParams=
          options={{
            title: "My Profile",
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: SIZES.width > 400 ? 30 : 24,
            },
            headerRight: () => (
              <Ionicons
                size={SIZES.width > 400 ? 40 : 30}
                name="menu"
                color={COLORS.primary}
                onPress={showOptions}
              />
            ),
          }}
        />
        {userType === "Parent" ? (
          <>
            <Tab.Screen
              name="Babysitters"
              component={BabySitters}
              options={{
                title: "Bloom Buddies",
                headerTintColor: COLORS.primary,
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: SIZES.width > 400 ? 30 : 24,
                },
              }}
            />
          </>
        ) : (
          <>
            <Tab.Screen
              name="Jobs"
              component={Posts}
              options={{
                title: "Posts",
                headerTintColor: COLORS.primary,
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: SIZES.width > 400 ? 30 : 24,
                },
              }}
            />
          </>
        )}

        <Tab.Screen
          name="Message"
          component={ChatBox}
          options={{
            title: "Messages",
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: SIZES.width > 400 ? 30 : 20,
            },
          }}
        />
        {userType == "Parent" ? (
          <>
            <Tab.Screen
              name="MyBuddies"
              component={MyBuddies}
              options={{
                title: "My Bloom Buddies",
                headerTintColor: COLORS.primary,
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: SIZES.width > 400 ? 30 : 20,
                },
              }}
            />
          </>
        ) : (
          <>
            <Tab.Screen
              name="Calendar"
              component={Calendar}
              options={{
                title: "Calendar",
                headerTintColor: COLORS.primary,
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: SIZES.width > 400 ? 30 : 20,
                },
              }}
            />
          </>
        )}

        <Tab.Screen
          name="Files"
          component={Documents}
          options={{
            title: "Documents",
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: SIZES.width > 400 ? 30 : 20,
            },
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            title: "Notifications",
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: SIZES.width > 400 ? 30 : 20,
            },
          }}
        />
      </Tab.Navigator>
    </>

    // <View>
    //     <Text>HomeScreen</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  shadowStyle: {
    shadowColor: COLORS.black,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
});

export default HomeScreen;
