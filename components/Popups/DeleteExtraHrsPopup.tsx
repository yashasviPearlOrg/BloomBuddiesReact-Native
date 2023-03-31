import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ScrollView,
  Modal,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import { TextInput } from "react-native-paper";
import { SelectList } from "react-native-dropdown-select-list";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RNDateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";

const DeleteExtraHrsPopup = ({ visibility, updateModalVisibility }: any) => {

  const [modalVisible, setModalVisible] = useState(visibility);
  
  const [selected, setSelected] = React.useState("");

  const [startTimePickerVisibile, setStartTimePickerVisibile] =
    useState<any>(false);
  const [endTimePickerVisibile, setEndTimePickerVisibile] =
    useState<any>(false);

  const [startTime, setStartTime] = useState<any>("");
  const [endTime, setEndTime] = useState<any>("");

  const expData = [
    { key: "1", value: "Family 1" },
    { key: "2", value: "Family 2" },
    { key: "3", value: "Family 3" },
    { key: "4", value: "Family 4" },
  ];

  const getTimeIN_hh_mm_am_pm = (val: any) => {
    let date = val;
    let hours: any =
      date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let am_pm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    let minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let time = hours + ":" + minutes + " " + am_pm;
    return time
  };

  const handleTimePicker = (val: any, type: string) => {
    if (type === "start") {
      if (val.type === "set") {
        setStartTimePickerVisibile(false);
        console.log("Start Time:: ", val.nativeEvent.timestamp);
        const rawdate = new Date(val.nativeEvent.timestamp);
        setStartTime(getTimeIN_hh_mm_am_pm(rawdate));
      }
    } else {
      if (val.type === "set") {
        setEndTimePickerVisibile(false);
        console.log("End Time:: ", val.nativeEvent.timestamp);
        const rawdate = new Date(val.nativeEvent.timestamp);
        setEndTime(getTimeIN_hh_mm_am_pm(rawdate));
      }
    }
  };

  return (
    <View>
      <View>
        <Modal
          visible={modalVisible}
          animationType={"fade"}
          transparent={true}
          onDismiss={() => setModalVisible(false)}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(52, 52, 52, 0.5)",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 0,
            }}
          >
            <View
              style={{
                alignItems: "center",
                backgroundColor: "white",
                height: "60%",
                width: "90%",
                borderRadius: 7,
                elevation: 10,
              }}
            >
              <View
                style={{
                  justifyContent: "space-around",
                  margin: 10,
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  paddingHorizontal: "2%",
                }}
              >
                <Text
                  style={{
                    fontSize: SIZES.width > 400 ? 34 : 30,
                    marginTop: "2%",
                  }}
                >
                  Delete Extra Hours
                </Text>
                <Pressable onPress={() => updateModalVisibility("close")}>
                  <Feather
                    name="x-circle"
                    size={SIZES.width > 400 ? 35 : 28}
                    color="black"
                  />
                </Pressable>
              </View>
              <View style={styles.line} />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-around",
                  height: "80%",
                  width: "95%",
                }}
              >
                <View style={styles.rows}>
                  <Text>Day: </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "flex-end",
                      borderWidth: 1,
                      borderColor: COLORS.primary,
                      borderRadius: 5,
                      height: 34,
                    }}
                  >
                    <TextInput
                      mode="outlined"
                      outlineColor={"transparent"}
                      activeOutlineColor={COLORS.primary}
                      editable={false}
                      style={styles.input}
                      placeholder={"DD/MM/YYYY"}
                    ></TextInput>
                    <MaterialCommunityIcons
                      name={"calendar-month-outline"}
                      size={30}
                      color={COLORS.primary}
                    />
                  </View>
                </View>
                <View style={styles.rows}>
                  <Text>Family: </Text>
                  <SelectList
                    setSelected={(val: any) => setSelected(val)}
                    data={expData}
                    save="value"
                    inputStyles={styles.dropdownBox}
                    boxStyles={styles.boxStyles}
                    defaultOption={expData[0]}
                    dropdownStyles={styles.dropdownStyles}
                    dropdownItemStyles={styles.dropdownItemStyles}
                    dropdownTextStyles={styles.dropdownTextStyles}
                    placeholder={""}
                    search={false}
                  />
                </View>

                <View style={styles.rows}>
                  <Text>Start Time: </Text>
                  <Pressable onPress={() => setStartTimePickerVisibile(true)}>
                    <TextInput
                      mode="outlined"
                      outlineColor={COLORS.primary}
                      activeOutlineColor={COLORS.primary}
                      editable={false}
                      style={styles.input}
                      placeholder={"hh:mm"}
                    >
                      {startTime}
                    </TextInput>
                    {startTimePickerVisibile && (
                      <RNDateTimePicker
                        mode="time"
                        display="spinner"
                        // maximumDate={new Date()}
                        // minimumDate={new Date("1930-01-01")}
                        value={new Date()}
                        positiveButton={{ label: "OK", textColor: "green" }}
                        onChange={(val) => handleTimePicker(val, "start")}
                      />
                    )}
                  </Pressable>
                </View>
                <View style={styles.rows}>
                  <Text>End Time: </Text>
                  <Pressable onPress={() => setEndTimePickerVisibile(true)}>
                    <TextInput
                      mode="outlined"
                      outlineColor={COLORS.primary}
                      activeOutlineColor={COLORS.primary}
                      editable={false}
                      style={styles.input}
                      placeholder={"hh:mm"}
                    >
                      {endTime}
                    </TextInput>
                    {endTimePickerVisibile && (
                      <RNDateTimePicker
                        mode="time"
                        display="spinner"
                        // maximumDate={new Date()}
                        // minimumDate={new Date("1930-01-01")}
                        value={new Date()}
                        positiveButton={{ label: "OK", textColor: "green" }}
                        onChange={(val) => handleTimePicker(val, "end")}
                      />
                    )}
                  </Pressable>
                </View>
                <View style={styles.rows}>
                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Delete Extra Hours</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    height: SIZES.height > 400 ? 1.5 : 1,
    backgroundColor: COLORS.primary,
    width: "95%",
    marginVertical: "4%",
    alignSelf: "center",
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: "1%",
    width: "100%",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: "2%",
    paddingHorizontal: "2%",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "flex-end",
    marginVertical: "5%",
  },
  buttonText: {
    fontSize: SIZES.width > 400 ? 20 : 18,
    color: COLORS.white,
    position: "relative",
    textAlign: "center",
  },

  input: {
    height: 30,
    paddingTop: 0,
    paddingBottom: 0,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: COLORS.white,
  },
  dropdownBox: {
    fontSize: SIZES.width > 400 ? 20 : 16,
    color: COLORS.primary,
    backgroundColor: "white",
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 4,
    paddingTop: 5,
    paddingLeft: 15,
    paddingBottom: 5,
    paddingRight: 15,
    alignSelf: "flex-end",
    margin: 0,
  },
  dropdownTextStyles: {
    lineHeight: 12,
    height: 15,
    paddingTop: 0,
    paddingBottom: 0,
    alignSelf: "center",
    textAlignVertical: "center",
    marginTop: 0,
  },
  dropdownItemStyles: {
    paddingTop: 0,
    paddingRight: 0,
    height: 20,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  dropdownStyles: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    height: 30,
    paddingTop: 0,
    width: "80%",
    paddingBottom: 0,
  },
  boxStyles: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    borderWidth: 0,
    alignItems: "center",
    alignSelf: "flex-end",
    position: "relative",
  },
});


export default DeleteExtraHrsPopup;