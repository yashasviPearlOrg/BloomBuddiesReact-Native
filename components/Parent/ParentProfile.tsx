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

const ParentProfile = () => {
  const [isNewChild, setIsNewChild] = useState<any>(false);

  const [datePickerVisibile, setDatePickerVisibile] = useState<any>(false);

  const [childsData, setChildsData] = useState<any>([]);

  const [date, setDate] = useState<any>("");

  const [childs, setChilds] = useState<any>(0);

  const [childsFormData, setChildsFormData] = useState<any>({
    name: "",
    age: "",
    dob: "",
  });

  const [editable, setEditable] = useState<any>(false);

  const [head, setHead] = useState<any>(["", "Start", "Finish"]);
  const [data, setData] = useState<any>([
    ["Monday", "--:--", "--:--"],
    ["Tuesday", "--:--", "--:--"],
    ["Wednesday", "--:--", "--:--"],
    ["Thursday", "--:--", "--:--"],
    ["Friday", "--:--", "--:--"],
    ["Saturday", "--:--", "--:--"],
  ]);

  useEffect(() => {
    console.log("childsData::: ", childsData);
    setChilds(childsData.length);
    // console.log("childs::", childs)
  }, [childsData]);

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

  const handleAddChild = () => {
    console.log("childsFormData::: ", childsFormData);
    const existingData = [...childsData, childsFormData];
    setChildsData(existingData);
    setIsNewChild(false);
  };

  const renderNewChildItem = () => {
    return (
      <View
        style={[
          styles.childListItem,
          styles.newChild,
          { marginVertical: "5%" },
        ]}
      >
        <View style={[styles.childItemContent, { paddingVertical: "2%" }]}>
          <View style={styles.rows}>
            <Text style={[styles.label, { width: "20%" }]}>Name :</Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => {
                if (val != null || val != "") {
                  setChildsFormData({ ...childsFormData, name: val });
                } else {
                  Alert.alert("all fields are mandatory");
                }
              }}
            />
          </View>
          <View style={styles.rows}>
            <Text style={[styles.label, { width: "20%" }]}>Age :</Text>
            <TextInput
              style={styles.input}
              inputMode={"numeric"}
              onChangeText={(val) => {
                if (val != null || val != "") {
                  setChildsFormData({ ...childsFormData, age: val });
                } else {
                  Alert.alert("all fields are mandatory");
                }
              }}
            />
          </View>
          <View style={styles.rows}>
            <Text style={[styles.label, { width: "20%" }]}>DOB :</Text>
            <Pressable
              style={[styles.input, { paddingHorizontal: 0, borderWidth: 0 }]}
              onPress={() => setDatePickerVisibile(true)}
            >
              <TextInput
                style={[styles.input, { width: "100%" }]}
                editable={false}
                placeholder="dd/mm/yyyy"
                inputMode={"text"}
                onChangeText={(val) => {
                  if (val != null || val != "") {
                    setChildsFormData({ ...childsFormData, dob: val });
                  } else {
                    Alert.alert("all fields are mandatory");
                  }
                }}
              >
                {date}
              </TextInput>
            </Pressable>

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
          <View style={[styles.rows, { marginTop: "2%" }]}>
            <Pressable
              style={[
                styles.button,
                { paddingVertical: "1%", backgroundColor: "#E10000" },
              ]}
              onPress={() => setIsNewChild(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
            <Pressable
              onPress={handleAddChild}
              style={[styles.button, { paddingVertical: "1%" }]}
            >
              <Text style={styles.buttonText}>Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  const renderChildItem = (ele: any) => {
    console.log("element:: ", ele);
    return (
      <View style={[styles.childListItem, styles.child]}>
        <View style={styles.childItemContent}>
          <View style={styles.rows}>
            <Text style={styles.label}>Name :</Text>
            <Text style={styles.text}>{ele.name}</Text>
          </View>
          <View style={styles.rows}>
            <Text style={styles.label}>Age :</Text>
            <Text style={styles.text}>{ele.age}</Text>
          </View>
          <View style={styles.rows}>
            <Text style={styles.label}>DOB :</Text>
            <Text style={styles.text}>{ele.dob}</Text>
          </View>
        </View>
      </View>
    );
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
                if (isNewChild) {
                  Alert.alert(
                    "Alert",
                    "You have some unsaved data!!\nPlease check",
                    [
                      {
                        text: "Confirm",
                        onPress: () => {
                          setIsNewChild(false);
                          setEditable(false);
                        },
                        style: "default",
                      },
                      {
                        text: "Cancel",
                      },
                    ]
                  );
                }
                else{
                  setEditable(false);
                }
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
              <TextInput style={styles.input} />
            )}
          </View>

          <View style={styles.rows}>
            <Text style={styles.label}>Address :</Text>
            {!editable ? (
              <Text style={styles.text}>123, abc street, UK</Text>
            ) : (
              <TextInput style={styles.input} />
            )}
          </View>

          <View style={styles.rows}>
            <Text style={styles.label}>Mobile No. :</Text>
            {!editable ? (
              <Text style={styles.text}>+01235678901</Text>
            ) : (
              <TextInput style={styles.input} />
            )}
          </View>
        </View>
        <View style={styles.line} />
        <View>
          <View>
            <Text style={styles.subHeadings}>My Children -</Text>
          </View>
          <View
            style={[
              styles.rows,
              { justifyContent: "space-around", alignItems: "center" },
            ]}
          >
            <View style={styles.rows}>
              <Text style={[styles.label, { width: "auto" }]}>
                {childs < 1 ? "No Child Added" : "Number of Children :"}
              </Text>
              {childs > 0 && (
                <Text style={[styles.text, { width: "10%" }]}>{childs}</Text>
              )}
            </View>
            {editable ? (
              <Pressable
                style={styles.button}
                onPress={() => setIsNewChild(true)}
              >
                <Text style={styles.buttonText}>Add</Text>
              </Pressable>
            ) : (
              <></>
            )}
          </View>
          <View style={styles.childListHolder}>
            {isNewChild && renderNewChildItem()}
            {childsData.length > 0 &&
              childsData.map((ele: any) => renderChildItem(ele))}
          </View>
        </View>
        <View style={styles.line} />
        <View>
          <View>
            <Text style={styles.subHeadings}>BabySitting Schedule -</Text>
          </View>
          <View>
            <Table style={{ marginVertical: "5%" }}>
              <Row
                data={head}
                textStyle={{ textAlign: "center" }}
                style={{ paddingVertical: "1%" }}
              />
              <TableWrapper>
                <Rows
                  data={data}
                  textStyle={{ textAlign: "center" }}
                  style={{ paddingVertical: "2%" }}
                />
              </TableWrapper>
            </Table>
          </View>
          <View
            style={[
              styles.rows,
              { justifyContent: "flex-end", paddingHorizontal: "5%" },
            ]}
          >
            <Text>Total Weekly Hours: </Text>
            <Text>0</Text>
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
    height: SIZES.height>400? 1.5:1,
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
    height: "70%",
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: "1%",
    width: "auto",
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
  },
  editBtn: {
    position: "absolute",
    top: "5%",
    right: "2%",
  },
});

export default ParentProfile;
