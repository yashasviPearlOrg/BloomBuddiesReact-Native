import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import RNDateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";

const BabySitterProfile = () => {
  const [editable, setEditable] = useState<any>(false);

  const [datePickerVisibile, setDatePickerVisibile] = useState<any>(false);

  const [dob, setDob] = useState<any>();

  const [date, setDate] = useState<any>("");

  const [focussed, setFocussed] = useState<any>("");

  const [head, setHead] = useState<any>([
    "",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ]);
  const [data, setData] = useState<any>([
    ["5am - 9am", "-", "-", "-", "-", "-", "-", "-"],
    ["9am - 10am", "-", "-", "-", "-", "-", "-", "-"],
    ["10am - 11am", "-", "-", "-", "-", "-", "-", "-"],
    ["11am - 12pm", "-", "-", "-", "-", "-", "-", "-"],
    ["12pm - 1pm", "-", "-", "-", "-", "-", "-", "-"],
    ["1pm - 2pm", "-", "-", "-", "-", "-", "-", "-"],
    ["2pm - 3pm", "-", "-", "-", "-", "-", "-", "-"],
    ["3pm - 4pm", "-", "-", "-", "-", "-", "-", "-"],
    ["4pm - 5pm", "-", "-", "-", "-", "-", "-", "-"],
  ]);

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
      setDate(convertDateIn_DDMMYYYY_Format(rawdate));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image
          source={require("../../assets/account.png")}
          resizeMode="contain"
          style={styles.profileImage}
        />
        <Text style={styles.headings}> User Name </Text>

        <View style={styles.editBtn}>
          {!editable ? (
            <Pressable onPress={() => setEditable(true)}>
              <Feather name="edit" size={30} color="white" />
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setEditable(false);
              }}
            >
              <Ionicons name="checkmark-circle-sharp" size={40} color="white" />
            </Pressable>
          )}
        </View>
      </View>
      <ScrollView style={styles.bottomView}>
        <View>
          <Text style={styles.subHeadings}>Bio -</Text>
          <View style={styles.rows}>
            <Text style={styles.label}>Email :</Text>
            {!editable ? (
              <Text style={styles.text}>user@mail.com</Text>
            ) : (
              <TextInput style={styles.input} inputMode="email"/>
            )}
          </View>

          <View style={styles.rows}>
            <Text style={styles.label}>Address :</Text>
            {!editable ? (
              <Text style={styles.text}>123, abc street, UK</Text>
            ) : (
              <TextInput style={styles.input} multiline={true}/>
            )}
          </View>

          <View style={styles.rows}>
            <Text style={styles.label}>Mobile No. :</Text>
            {!editable ? (
              <Text style={styles.text}>+01235678901</Text>
            ) : (
              <TextInput style={styles.input} inputMode="tel" />
            )}
          </View>
          <View style={styles.rows}>
            <Text style={styles.label}>DOB :</Text>

            {!editable ? (
              <Text style={styles.text}>{date ? date : "dd/mm/yyyy"}</Text>
            ) : (
              <Pressable
                style={[styles.input, { paddingHorizontal: 0, borderWidth: 0 }]}
                onPress={() => setDatePickerVisibile(true)}
              >
                <TextInput
                  style={[styles.input, { width: "100%", textAlignVertical:'center' }]}
                  editable={false}
                  placeholder="dd/mm/yyyy"
                  inputMode={"text"}
                  onChangeText={(val) => {
                    if (val != null || val != "") {
                      setDob(val);
                    } else {
                      Alert.alert("all fields are mandatory");
                    }
                  }}
                >
                  {date}
                </TextInput>
              </Pressable>
            )}

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
          </View>
        </View>

        <View style={styles.line} />
        <View>
          <Text style={styles.subHeadings}>Badges -</Text>
          <View style={styles.rows}>
            <View style={styles.column}>
              <Image
                source={require("../../assets/account.png")}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
              <Text style={[styles.label, { width: "100%" }]}>Badge</Text>
            </View>
            <View style={styles.column}>
              <Image
                source={require("../../assets/account.png")}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
              <Text style={[styles.label, { width: "100%" }]}>Badge</Text>
            </View>
            <View style={styles.column}>
              <Image
                source={require("../../assets/account.png")}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
              <Text style={[styles.label, { width: "100%" }]}>Badge</Text>
            </View>
            <View style={styles.column}>
              <Image
                source={require("../../assets/account.png")}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
              <Text style={[styles.label, { width: "100%" }]}>Badge</Text>
            </View>
            <View style={styles.column}>
              <Image
                source={require("../../assets/account.png")}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
              <Text style={[styles.label, { width: "100%" }]}>Badge</Text>
            </View>
          </View>
        </View>
        <View style={styles.line} />
        <View>
          <View style={styles.informationContainer}>
            <Text style={styles.subHeadings}>Education -</Text>
            {!editable ? (
              <Text style={styles.content}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            ) : (
              <TextInput
                style={[
                  styles.input,
                  {
                    width: "90%",
                    margin: "2%",
                    marginLeft: "5%",
                    paddingTop: 15,
                  },
                ]}
                inputMode={"text"}
                numberOfLines={8}
                multiline={true}
                onFocus={() => setFocussed("education")}
              />
            )}
          </View>
          <View style={styles.informationContainer}>
            <Text style={styles.subHeadings}>Experience -</Text>
            {!editable ? (
              <Text style={styles.content}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            ) : (
              <TextInput
                style={[
                  styles.input,
                  {
                    width: "90%",
                    margin: "2%",
                    marginLeft: "5%",
                    paddingTop: 15,
                  },
                ]}
                inputMode={"text"}
                numberOfLines={8}
                multiline={true}
                onFocus={() => setFocussed("experience")}
              />
            )}
          </View>
          <View style={styles.informationContainer}>
            <Text style={styles.subHeadings}>About Me -</Text>
            {!editable ? (
              <Text style={styles.content}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            ) : (
              <TextInput
                style={[
                  styles.input,
                  {
                    width: "90%",
                    margin: "2%",
                    marginLeft: "5%",
                    paddingTop: 15,
                  },
                ]}
                inputMode={"text"}
                numberOfLines={8}
                multiline={true}
                onFocus={() => setFocussed("about")}
              />
            )}
          </View>
          <View style={styles.informationContainer}>
            <Text style={styles.subHeadings}>Hobbies -</Text>
            {!editable ? (
              <Text style={styles.content}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            ) : (
              <TextInput
                style={[
                  styles.input,
                  {
                    width: "90%",
                    margin: "2%",
                    marginLeft: "5%",
                    paddingTop: 15,
                  },
                ]}
                inputMode={"text"}
                numberOfLines={8}
                multiline={true}
                onFocus={() => setFocussed("hobbies")}
              />
            )}
          </View>
        </View>
        <View style={styles.line} />
        <View>
          <Text style={styles.subHeadings}>Availability -</Text>
          <View style={{margin:'2%', marginVertical:'5%'}}>
            <Table borderStyle={{borderColor:'black',borderWidth:1}}>
            <Row
              data={head}
              style={{height:30}}
              textStyle={styles.cellStyle}
              flexArr={[1.5,1,1,1,1,1,1,1]}
            />
            
            <TableWrapper>
              <Rows
                data={data}
                style={{height:SIZES.width>400?30:40,alignContent:'center', justifyContent:'center'}}
                textStyle={styles.cellStyle}
                flexArr={[1.5,1,1,1,1,1,1,1]}
              />
              
            </TableWrapper>
          </Table>
          </View>
          
        </View>
        <View style={styles.line} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
  },
  line: {
    height: SIZES.height > 400 ? 1.5 : 1,
    backgroundColor: COLORS.primary,
    width: "95%",
    marginVertical: "4%",
    alignSelf: "center",
  },
  topView: {
    backgroundColor: COLORS.primary,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    padding: "2%",
    height: SIZES.width>400?"25%":"30%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomView: {
    backgroundColor: COLORS.white,
    padding: "2%",
    paddingTop: "5%",
    height: SIZES.width>400?"75%":"70%",
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
  headings: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "700",
    margin: "3%",
  },
  subHeadings: {
    color: COLORS.black,
    fontSize: 20,
  },
  label: {
    color: COLORS.black,
    fontSize: 16,
    marginLeft: 5,
    width: "40%",
  },
  text: {
    color: COLORS.black,
    fontSize: 16,
    width: "40%",
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: "2%",
    paddingHorizontal: "8%",
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "flex-end",
  },
  buttonText: {
    fontSize: SIZES.width > 400 ? 20 : 18,
    color: COLORS.white,
    position: "relative",
    textAlign: "center",
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
  input: {
    fontSize: SIZES.width > 400 ? 20 : 16,
    color: COLORS.primary,
    backgroundColor: "white",
    width: "50%",
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    textAlignVertical: "top",
  },
  editBtn: {
    position: "absolute",
    top: "5%",
    right: "2%",
  },
  content: {
    marginLeft: "5%",
    lineHeight: 20,
    fontSize: 16,
    margin: "2%",
    textAlign: "justify",
  },
  informationContainer: {
    marginVertical: "2%",
  },
  cellStyle:{
    textAlign:'center'
  }
});

export default BabySitterProfile;
