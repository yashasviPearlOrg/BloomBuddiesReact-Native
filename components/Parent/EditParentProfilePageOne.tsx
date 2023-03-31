import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  SafeAreaView,
  Alert,
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

import { TextInput as Input } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { TextInput } from "react-native-paper";
import RNDateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";





const add_AMPM_With_Date = (date: any) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  // let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  // seconds = seconds < 10 ? "0" + seconds : seconds;

  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime.toString();
};

const TableCell = memo(({ senderInfo, sendTimeInfo }: any) => {
  const [time, setTime] = useState<any>("");
  const [startTime, setStartTime] = useState<any>();
  const [finishTime, setFinishTime] = useState<any>();

  const [datePickerVisibile, setDatePickerVisibile] = useState<any>(false);

  const handleDatePicker = (val: any) => {
    if (val.type === "set") {
      setDatePickerVisibile(false);
      const rawdate = new Date(val.nativeEvent.timestamp);
      setTime(add_AMPM_With_Date(rawdate));
      if (senderInfo[0] === "start") {
        setStartTime(add_AMPM_With_Date(rawdate));
        // sendTimeInfo({comingFrom: senderInfo[1], startTime});
      } else {
        setFinishTime(add_AMPM_With_Date(rawdate));
        // sendTimeInfo({comingFrom: senderInfo[1], finishTime});
      }
    }
  };

  useEffect(() => {
    if (startTime) {
      // console.log("start time :: ", startTime);
      sendTimeInfo({ comingFrom: senderInfo[1], startTime });
    }
    if (finishTime) {
      // console.log("finish time :: ", finishTime);
      sendTimeInfo({ comingFrom: senderInfo[1], finishTime });
    }
  }, [startTime, finishTime]);

  return (
    <View>
      <Pressable onPress={() => setDatePickerVisibile(true)}>
        <Text
          style={[
            styles.input2,
            { width: "80%", alignSelf: "center", textAlign: "center" },
          ]}
        >
          {time}
        </Text>
      </Pressable>
      {datePickerVisibile && (
        <RNDateTimePicker
          mode="time"
          display="spinner"
          maximumDate={new Date()}
          minimumDate={new Date("1930-01-01")}
          value={new Date()}
          positiveButton={{ label: "OK", textColor: "green" }}
          onChange={(val) => handleDatePicker(val)}
          onPointerDown = {()=>setDatePickerVisibile(false)}
        />
      )}
    </View>
  );
});

const EditParentProfilePageOne = ({ navigation }: any) => {
  const [date, setDate] = useState<any>("");
  const [totalHours, setTotalHours] = useState<any>();

  const getHours = (time1: any, time2: any) => {
    let hours = (time2.getTime() - time1.getTime()) / 1000;
    hours /= 60 * 60;
    return Math.abs(Math.round(hours));
  };

  const [head, setHead] = useState<any>(["", "Start", "Finish"]);
  const [data, setData] = useState<any>([]);

  const timeInfo = useRef<any>([
    {
      day: "mon",
      times: {
        startTime: "",
        endTime: "",
      },
    },
    {
      day: "tue",
      times: {
        startTime: "",
        endTime: "",
      },
    },
    {
      day: "wed",
      times: {
        startTime: "",
        endTime: "",
      },
    },
    {
      day: "thu",
      times: {
        startTime: "",
        endTime: "",
      },
    },
    {
      day: "fri",
      times: {
        startTime: "",
        endTime: "",
      },
    },
    {
      day: "sat",
      times: {
        startTime: "",
        endTime: "",
      },
    },
    {
      day: "sun",
      times: {
        startTime: "",
        endTime: "",
      },
    },
  ]);

  const receiveDataFromTableCell = useCallback(
    (timeInformation: any) => {
      if (
        timeInformation?.comingFrom &&
        (timeInformation?.startTime || timeInformation?.finishTime)
      ) {
        console.log("RAM::: ", timeInfo.current);
        const duplicateData = [...timeInfo?.current];
        console.log("duplicateData::: ", duplicateData);

        const index = duplicateData.findIndex(
          (ele: any) => ele.day === timeInformation?.comingFrom
        );

        console.log(
          "duplicateData[index]?.times?.startTime::: ",
          duplicateData[index]?.times?.startTime
        );
        console.log(
          "duplicateData[index]?.times?.endTime::: ",
          duplicateData[index]?.times?.endTime
        );

        const obj = {
          day: timeInformation?.comingFrom,
          times: {
            startTime: timeInformation?.startTime
              ? timeInformation?.startTime
              : duplicateData[index]?.times?.startTime,
            endTime: timeInformation?.finishTime
              ? timeInformation?.finishTime
              : duplicateData[index]?.times?.endTime,
          },
        };

        duplicateData.splice(index, 1, obj);
        console.log("DUPLICATE DATA::: ", duplicateData);
        timeInfo.current = duplicateData;
      }
    },
    [timeInfo]
  );

  useEffect(() => {
    if (timeInfo.current) {
      console.log("timeInfo::DIVYA: ", timeInfo);
    }
  }, [timeInfo]);

  useEffect(() => {
    setData([
      [
        "Monday",
        <TableCell
          senderInfo={["start", "mon"]}
          sendTimeInfo={receiveDataFromTableCell}
        />,
        <TableCell
          senderInfo={["finish", "mon"]}
          sendTimeInfo={receiveDataFromTableCell}
        />,
      ],
      [
        "Tuesday",
        <TableCell
          senderInfo={["start", "tue"]}
          sendTimeInfo={receiveDataFromTableCell}
        />,
        <TableCell
          senderInfo={["finish", "tue"]}
          sendTimeInfo={receiveDataFromTableCell}
        />,
      ],
      [
        "Wednesday",
        <TableCell
          senderInfo={["start", "wed"]}
          sendTimeInfo={receiveDataFromTableCell}
        />,
        <TableCell
          senderInfo={["start", "wed"]}
          sendTimeInfo={receiveDataFromTableCell}
        />,
      ],
      [
        "Thursday",
        <TableCell
          senderInfo={["start", "thu"]}
          sendTimeInfo={receiveDataFromTableCell}
        />,
        <TableCell
          senderInfo={["start", "thu"]}
          sendTimeInfo={receiveDataFromTableCell}
        />,
      ],
      [
        "Friday",
        <TableCell
          senderInfo={["start", "fri"]}
          sendTimeInfo={receiveDataFromTableCell}
        />,
        <TableCell
          senderInfo={["start", "fri"]}
          sendTimeInfo={receiveDataFromTableCell}
        />,
      ],
      [
        "Saturday",
        <TableCell
          senderInfo={["start", "sat"]}
          sendTimeInfo={receiveDataFromTableCell}
        />,
        <TableCell
          senderInfo={["start", "sat"]}
          sendTimeInfo={receiveDataFromTableCell}
        />,
      ],
      [
        "Sunday",
        <TableCell
          senderInfo={["start", "sun"]}
          sendTimeInfo={receiveDataFromTableCell}
        />,
        <TableCell
          senderInfo={["start", "sun"]}
          sendTimeInfo={receiveDataFromTableCell}
        />,
      ],
    ]);
  }, []);

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
            </View>

            <View style={styles.line} />

            <View style={styles.column}>
              <Text style={styles.subHeadings}>BabySitting Schedule -</Text>
              <View>
                <Table style={{ marginVertical: "1%" }}>
                  <Row
                    data={head}
                    textStyle={{ textAlign: "center" }}
                    style={{ paddingVertical: "2%" }}
                  />
                  <TableWrapper>
                    <Rows
                      data={data}
                      textStyle={{ textAlign: "center" }}
                      style={{ paddingVertical: "2%" }}
                    />
                  </TableWrapper>
                </Table>
                <View style={[styles.rows, { justifyContent: "flex-end" }]}>
                  <Text>Total hours per week: </Text>
                  <Text>20 hrs</Text>
                </View>
              </View>
            </View>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Finish</Text>
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
    height: "100%",
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
});

export default EditParentProfilePageOne;
