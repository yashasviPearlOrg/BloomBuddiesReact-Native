import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import { COLORS, SIZES } from "../../constants";
import { TextInput as Input } from "react-native";
import { TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import CalendarPicker from "react-native-calendar-picker";
import AddExtraHrsPopup from "../Popups/AddExtraHrsPopup";
import DeleteExtraHrsPopup from "../Popups/DeleteExtraHrsPopup";
import AddAbsencePopup from "../Popups/AddAbsencePopup";
import DeleteAbsencePopup from "../Popups/DeleteAbsencePopup";

const MyCalendar = () => {
  const [instantReservation, setInstantReservation] = useState<any>();
  const [addHrsModalVisibility, setAddHrsModalVisibility] =
    useState<any>(false);
  const [deleteHrsModalVisibility, setDeleteHrsModalVisibility] =
    useState<any>(false);
  const [addAbsenceModalVisibility, setAddAbsenceModalVisibility] =
    useState<any>(false);
  const [deleteAbsenceModalVisibility, setDeleteAbsenceModalVisibility] =
    useState<any>(false);

  const [updateAvailability, setUpdateAvailibility] = useState(false);

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

  const expData = [
    { key: "1", value: "0 - 2 yrs" },
    { key: "2", value: "2 - 4 yrs" },
    { key: "3", value: "4 - 6 yrs" },
    { key: "4", value: "6 - 8 yrs" },
  ];

  return (
    <View style={styles.container}>
      {addHrsModalVisibility && (
        <AddExtraHrsPopup
          visibility={addHrsModalVisibility}
          updateModalVisibility={(data: string) => {
            data === "close" && setAddHrsModalVisibility(false);
          }}
        />
      )}

      {deleteHrsModalVisibility && (
        <DeleteExtraHrsPopup
          visibility={deleteHrsModalVisibility}
          updateModalVisibility={(data: string) => {
            data === "close" && setDeleteHrsModalVisibility(false);
          }}
        />
      )}
      {addAbsenceModalVisibility && (
        <AddAbsencePopup
          visibility={addAbsenceModalVisibility}
          updateModalVisibility={(data: string) => {
            data === "close" && setAddAbsenceModalVisibility(false);
          }}
        />
      )}
      {deleteAbsenceModalVisibility && (
        <DeleteAbsencePopup
          visibility={deleteAbsenceModalVisibility}
          updateModalVisibility={(data: string) => {
            data === "close" && setDeleteAbsenceModalVisibility(false);
          }}
        />
      )}
      <ScrollView>
        <View style={styles.rows}>
          <View style={[styles.column, { width: "60%" }]}>
            <View
              style={[
                styles.rows,
                { justifyContent: "space-around", width: "100%" },
              ]}
            >
              <View>
                <ToggleSwitch
                  isOn={instantReservation}
                  onColor={COLORS.primary}
                  offColor="rgba(52,52,52,0.2)"
                  size={SIZES.width > 400 ? "medium" : "small"}
                  onToggle={() => setInstantReservation(!instantReservation)}
                />
              </View>

              <View>
                {instantReservation ? (
                  <>
                    <MaterialCommunityIcons
                      name="lightning-bolt"
                      size={24}
                      color={COLORS.warning}
                    />
                  </>
                ) : (
                  <>
                    <MaterialCommunityIcons
                      name="lightning-bolt"
                      size={24}
                      color={"grey"}
                    />
                  </>
                )}
              </View>
            </View>
            <View style={styles.rows}>
              <Text style={{ marginLeft: "2%" }}>
                {instantReservation
                  ? "Instant Reservation Enabled"
                  : "Instant Reservation Disabled"}
              </Text>
            </View>
          </View>
          {updateAvailability ? (
            <>
              <Pressable
                style={[
                  styles.button,
                  { paddingHorizontal: "2%", width: "35%" },
                ]}
                onPress={() => setUpdateAvailibility(false)}
              >
                <View
                  style={[
                    styles.rows,
                    { justifyContent: "center", width: "100%" },
                  ]}
                >
                  <Text style={{ color: COLORS.white, alignSelf: "center" }}>
                    {"Done"}
                  </Text>
                </View>
              </Pressable>
            </>
          ) : (
            <>
              <Pressable
                style={[
                  styles.button,
                  { paddingHorizontal: "2%", width: "35%" },
                ]}
                onPress={() => setUpdateAvailibility(true)}
              >
                <View
                  style={[
                    styles.rows,
                    { justifyContent: "space-between", width: "100%" },
                  ]}
                >
                  <Text style={{ color: COLORS.white }}>
                    {"Update \nAvailability"}
                  </Text>
                  <MaterialIcons name="edit" size={24} color="white" />
                </View>
              </Pressable>
            </>
          )}
        </View>
        <View style={styles.line} />

        <View style={{ padding: "5%" }}>
          <Text style={styles.subHeadings}>Availability -</Text>
          <View style={{ margin: "1%", marginVertical: "5%" }}>
            <Table borderStyle={{ borderColor: "black", borderWidth: 1 }}>
              <Row
                data={head}
                style={{ height: 30 }}
                textStyle={styles.cellStyle}
                flexArr={[1.5, 1, 1, 1, 1, 1, 1, 1]}
              />
              <Rows
                data={data}
                style={{
                  height: SIZES.width > 400 ? 30 : 40,
                  alignContent: "center",
                  justifyContent: "center",
                }}
                textStyle={styles.cellStyle}
                flexArr={[1.5, 1, 1, 1, 1, 1, 1, 1]}
              />
            </Table>
          </View>
        </View>
        <View style={styles.line} />
        <View>
          <CalendarPicker
            onDateChange={(date: any) => console.log("Date:: ", date)}
            onMonthChange={(month: any) =>
              console.log("Month:: ", new Date(month).getMonth())
            }
            selectedDayStyle={{ backgroundColor: COLORS.primary }}
            selectedDayTextStyle={{ color: COLORS.white }}
          />

          {/* <View style={styles.line} /> */}

          <View style={styles.rows}>
            <Text>Current total hours in march: </Text>
            <TextInput
              mode="outlined"
              outlineColor={COLORS.primary}
              activeOutlineColor={COLORS.primary}
              editable={false}
              style={{
                height: 30,
                paddingTop: 0,
                paddingBottom: 0,
                textAlign: "center",
                textAlignVertical: "center",
                backgroundColor: COLORS.white,
              }}
            >
              20
            </TextInput>
          </View>
        </View>
        <View style={styles.line} />
        {updateAvailability && (
          <>
            <View>
              <View style={styles.rows}>
                <View style={[styles.column, { width: "45%" }]}>
                  <Pressable
                    style={styles.button}
                    onPress={() => {
                      setAddHrsModalVisibility(true);
                    }}
                  >
                    <Text style={styles.buttonText}>Add Extra hours</Text>
                  </Pressable>

                  <Pressable
                    style={styles.button}
                    onPress={() => {
                      // console.log("Delete Extra Hrs :: ", deleteHrsModalVisibility);
                      setDeleteHrsModalVisibility(true);
                    }}
                  >
                    <Text style={styles.buttonText}>Delete Extra hours</Text>
                  </Pressable>
                </View>
                <View style={styles.column}>
                  <Pressable
                    style={styles.button}
                    onPress={() => setAddAbsenceModalVisibility(true)}
                  >
                    <Text style={styles.buttonText}>Add absence</Text>
                  </Pressable>
                  <Pressable
                    style={styles.button}
                    onPress={() => setDeleteAbsenceModalVisibility(true)}
                  >
                    <Text style={styles.buttonText}>Delete absence</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <View style={styles.line} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.white,
    padding: "2%",
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
    height: SIZES.width > 400 ? "25%" : "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomView: {
    backgroundColor: COLORS.white,
    padding: "2%",
    paddingTop: "5%",
    height: SIZES.width > 400 ? "75%" : "70%",
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
    paddingHorizontal: "2%",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: "5%",
    width: "100%",
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
  cellStyle: {
    textAlign: "center",
  },
});

export default MyCalendar;
