import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
// import { TextInput } from "react-native/Libraries/Components/TextInput/TextInput";
import RNDateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { SIZES, COLORS } from "../../constants";
import { TextInput as Input } from "react-native";
import { TextInput } from "react-native-paper";
import { SelectList } from "react-native-dropdown-select-list";




const EditBabySitterProfilePageOne = ({ navigation }: any) => {
  const [datePickerVisibile, setDatePickerVisibile] = useState<any>(false);

  const [date, setDate] = useState<any>("");
  const [currentDate, setCurrentDate] = useState<any>(new Date().getTime());

  const [selected, setSelected] = React.useState("");

  const expData = [
    { key: "1", value: "0 - 2 yrs" },
    { key: "2", value: "2 - 4 yrs" },
    { key: "3", value: "4 - 6 yrs" },
    { key: "4", value: "6 - 8 yrs" },
  ];

  const calc_age = (date1: any, date2: any) => {
    let diff = (date1 - date2) / 1000;
    diff /= 60 * 60 * 24;

    return Math.abs(Math.round(diff / 365.25));
  };

  const convertDateIn_DDMMYYYY_Format = (selectedDate: any) => {
    const selDate = selectedDate ? selectedDate : new Date();
    let date: any = selDate.getDate();
    let month: any = selDate.getMonth() + 1;
    let year: any = selDate.getFullYear();
    if (date < 10) date = "0" + date;
    if (month < 10) month = "0" + month;
    const convertedDate = date + "/" + month + "/" + year;
    console.log("convertedDate::: ", convertedDate);
    return convertedDate.toString();
  };

  const handleDatePicker = (val: any) => {
    if (val.type === "set") {
      setDatePickerVisibile(false);
      const rawdate = new Date(val.nativeEvent.timestamp);
      let diff = calc_age(val.nativeEvent.timestamp, currentDate);
      if (diff > 18) {
        console.log("Diff:: ", diff);
        setDate(convertDateIn_DDMMYYYY_Format(rawdate));
      } else {
        Alert.alert("Age Must be 18+");
      }

      console.log("currentDate:: ", currentDate);
    }
  };

  return (
    <SafeAreaView
      style={{
        height: SIZES.height,
        paddingTop: "5%",
        backgroundColor: COLORS.primary,
      }}
    >
      <View style={[styles.modalBox, styles.shadowStyle]}>
        <Text style={styles.heading}>Personal Details</Text>
        <View style={styles.line} />
        <View style={styles.contentView}>
          <View style={styles.inputView}>
            <View style={[styles.column, { marginTop: 0 }]}>
              <TextInput
                label="Contact Number"
                mode="outlined"
                left={
                  <TextInput.Icon
                    iconColor={COLORS.primary}
                    icon="phone"
                    size={20}
                  />
                }
                style={styles.input}
                outlineColor={COLORS.primary}
                activeOutlineColor={COLORS.primary}
              />

              <Text style={styles.label}>Address: </Text>
              <Input
                multiline={true}
                numberOfLines={3}
                style={styles.input2}
                autoFocus
              />

              <View style={styles.rows}>
                <Text style={[styles.label, { width: "20%" }]}>DOB :</Text>
                <Pressable
                  style={[
                    styles.input,
                    { paddingHorizontal: 0, borderWidth: 0 },
                  ]}
                  onPress={() => setDatePickerVisibile(true)}
                >
                  <TextInput
                    style={[
                      styles.input,
                      { width: "100%", textDecorationLine: "none" },
                    ]}
                    editable={false}
                    mode="outlined"
                    placeholder="dd/mm/yyyy"
                    outlineColor={COLORS.primary}
                    activeOutlineColor={COLORS.primary}
                  >
                    {date}
                  </TextInput>
                  {datePickerVisibile && (
                    <RNDateTimePicker
                      mode="date"
                      display="spinner"
                      maximumDate={new Date()}
                      minimumDate={new Date("1930-01-01")}
                      value={new Date()}
                      positiveButton={{ label: "OK", textColor: "green" }}
                      onChange={(val) => handleDatePicker(val)}
                    />
                  )}
                </Pressable>
              </View>
              <View style={styles.rows}>
                <Text style={[styles.label, { width: "30%" }]}>
                  Previous School Attended:{" "}
                </Text>
                <Input
                  multiline={true}
                  style={[styles.input2, { width: "70%" }]}
                  autoFocus
                />
              </View>

              <View style={[styles.rows, {position:'relative'}]}>
                <Text style={[styles.label, { width: "30%"}]}>
                  years of Experience:
                </Text>
                <SelectList
                  setSelected={(val: any) => setSelected(val)}
                  data={expData}
                  save="value"
                  inputStyles={styles.dropdownBox}
                  boxStyles={{
                    paddingTop: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                    borderWidth: 0,
                    alignItems: "center",
                    alignSelf:'flex-end',
                    position:'relative'
                  }}
                  defaultOption={expData[0]}
                  dropdownStyles={{
                    borderColor: COLORS.primary,
                    borderWidth: 1,
                  }}
                  placeholder={""}
                  search={false}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              alignSelf: "center",
              position: "absolute",
              bottom: 0,
              width: "99%",
            }}
          >
            <View style={styles.line} />
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
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

  subHeadings: {
    color: COLORS.black,
    fontSize: 20,
  },

  line: {
    height: 1,
    backgroundColor: COLORS.primary,
    width: "100%",
    marginVertical: "1%",
  },

  contentView: {
    height: "92%",
    width: "90%",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  inputView: {
    flexDirection: "column",
    justifyContent: "flex-start",
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
    marginTop:'2%'
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

  rows: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: "1%",
    width: "auto",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
    marginVertical: "2%",
  },
  label: {
    color: COLORS.black,
    fontSize: 16,
    margin: "2%",
  },
  text: {
    color: COLORS.black,
    fontSize: 16,
    width: "40%",
  },

  childListHolder: {
    flexDirection: "column",
    paddingVertical: "5%",
  },
  childListItem: {
    backgroundColor: COLORS.white,
    padding: 2,
    borderRadius: 12,
    marginVertical: "1%",
  },
  childItemContent: {
    backgroundColor: COLORS.white,
    flexDirection: "column",
    borderRadius: 10,
  },
  newChild: {
    backgroundColor: COLORS.primary,
  },
  child: {
    backgroundColor: COLORS.black,
    padding: 1,
  },
  input2: {
    fontSize: SIZES.width > 400 ? 20 : 16,
    color: COLORS.primary,
    backgroundColor: "white",
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 4,
    paddingTop: "2%",
    paddingLeft: "2%",
    textAlignVertical: "top",
  },

  dropdownBox: {
    fontSize: SIZES.width > 400 ? 20 : 16,
    color: COLORS.primary,
    backgroundColor: "white",
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 4,
    // paddingTop: "2%",
    // paddingLeft: "2%",
    paddingTop: 5,
    paddingLeft: 15,
    paddingBottom: 5,
    paddingRight: 15,
    alignSelf: "flex-end",
    margin: 0,
  },
});

export default EditBabySitterProfilePageOne;
