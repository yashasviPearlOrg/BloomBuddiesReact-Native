import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { COLORS, SIZES } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Documents = () => {
  const [selectedView, setSelectedView] = useState<any>("Government");
  const [gvtIdStatus, setGvtIdStatus] = useState<any>("success");
  const [securityStatus, setSecurityStatus] = useState<any>("pending");
  const [criminalStatus, setCriminalStatus] = useState<any>("pending");
  const [bankStatus, setBankStatus] = useState<any>("pending");

  return (
    <View style={styles.container}>
      <View style={styles.rows}>
        <View style={[styles.column, { width: "40%" }]}>
          <Pressable
            style={styles.button}
            onPress={() => setSelectedView("Government")}
          >
            <View style={[styles.rows, { justifyContent: "space-between" }]}>
              {gvtIdStatus === "pending" ? (
                <>
                  <MaterialCommunityIcons
                    name="timer-sand"
                    size={24}
                    color="black"
                    style={{
                      borderRadius: 30,
                      backgroundColor: "white",
                      padding: 5,
                    }}
                  />
                </>
              ) : (
                <>
                  <MaterialIcons
                    name="file-download-done"
                    size={24}
                    color="black"
                    style={{
                      borderRadius: 30,
                      backgroundColor: "white",
                      padding: 5,
                    }}
                  />
                </>
              )}
              <Text style={styles.buttonText}>
                {"Government \nValid ID\n"}
                {gvtIdStatus}
              </Text>
            </View>
          </Pressable>
          <View style={styles.column}>
            {selectedView === "Government" && (
              <View style={styles.subSectionView}>
                <View style={[styles.rows, { justifyContent: "space-around" }]}>
                  <View
                    style={[
                      styles.column,
                      { width: "40%", alignItems: "center" },
                    ]}
                  >
                    <Pressable style={[styles.imageBtn, styles.column]}>
                      <Ionicons
                        name="md-add-circle-outline"
                        size={24}
                        color="black"
                        style={{ alignSelf: "center" }}
                      />
                    </Pressable>
                    <Text>Front Side</Text>
                  </View>

                  <View
                    style={[
                      styles.column,
                      { width: "40%", alignItems: "center" },
                    ]}
                  >
                    <Pressable style={[styles.imageBtn, styles.column]}>
                      <Ionicons
                        name="md-add-circle-outline"
                        size={24}
                        color="black"
                        style={{ alignSelf: "center" }}
                      />
                    </Pressable>
                    <Text>Back Side</Text>
                  </View>
                </View>

                <View>
                {gvtIdStatus === "pending" ? (
                    <>
                      <Pressable
                        style={[
                          styles.button,
                          { width: "60%", backgroundColor: COLORS.warning },
                        ]}
                      >
                        <Text style={styles.buttonText}>Verify</Text>
                      </Pressable>
                    </>
                  ) : (
                    <><Pressable
                    style={[
                      styles.button,
                      { width: "60%", backgroundColor: COLORS.success },
                    ]}
                  >
                    <Text style={styles.buttonText}>Successfull</Text>
                  </Pressable></>
                  )}
                </View>

                <View style={styles.rows}>
                  <Text style={{fontWeight:'600'}}>
                    {
                      "* Accepted ID's :-\n   1. European ID\n   2.Residence Permit\n   3.Student Visa"
                    }
                  </Text>
                </View>
              </View>
            )}
          </View>
          <Pressable
            style={styles.button}
            onPress={() => setSelectedView("Security")}
          >
            <View style={[styles.rows, { justifyContent: "space-between" }]}>
              {securityStatus === "pending" ? (
                <>
                  <MaterialCommunityIcons
                    name="timer-sand"
                    size={24}
                    color="black"
                    style={{
                      borderRadius: 30,
                      backgroundColor: "white",
                      padding: 5,
                    }}
                  />
                </>
              ) : (
                <>
                  <MaterialIcons
                    name="file-download-done"
                    size={24}
                    color="black"
                    style={{
                      borderRadius: 30,
                      backgroundColor: "white",
                      padding: 5,
                    }}
                  />
                </>
              )}

              <Text style={styles.buttonText}>
                {"Security \nCertificate\n"}
                {securityStatus}
              </Text>
            </View>
          </Pressable>
          <View style={styles.column}>
            {selectedView === "Security" && (
              <View style={styles.subSectionView}>
              <View style={[styles.rows, { justifyContent: "space-around" }]}>
                <View
                  style={[
                    styles.column,
                    { width: "40%", alignItems: "center" },
                  ]}
                >
                  <Pressable style={[styles.imageBtn, styles.column]}>
                    <Ionicons
                      name="md-add-circle-outline"
                      size={24}
                      color="black"
                      style={{ alignSelf: "center" }}
                    />
                  </Pressable>
                  <Text>Front Side</Text>
                </View>

                <View
                  style={[
                    styles.column,
                    { width: "40%", alignItems: "center" },
                  ]}
                >
                  <Pressable style={[styles.imageBtn, styles.column]}>
                    <Ionicons
                      name="md-add-circle-outline"
                      size={24}
                      color="black"
                      style={{ alignSelf: "center" }}
                    />
                  </Pressable>
                  <Text>Back Side</Text>
                </View>
              </View>

              <View>
                
                <Pressable style={[styles.button,{width:'60%', backgroundColor:COLORS.warning}]} >
                  <Text  style={styles.buttonText}>
                    Verify
                  </Text>
                </Pressable>
              </View>

              <View style={styles.rows}>
                <Text style={{fontWeight:'600'}}>
                  {
                    "* Accepted ID's :-\n   1. European ID\n   2.Residence Permit\n   3.Student Visa"
                  }
                </Text>
              </View>
            </View>
            )}
          </View>
          <Pressable
            style={styles.button}
            onPress={() => setSelectedView("Criminal")}
          >
            <View style={[styles.rows, { justifyContent: "space-between" }]}>
              {criminalStatus === "pending" ? (
                <>
                  <MaterialCommunityIcons
                    name="timer-sand"
                    size={24}
                    color="black"
                    style={{
                      borderRadius: 30,
                      backgroundColor: "white",
                      padding: 5,
                    }}
                  />
                </>
              ) : (
                <>
                  <MaterialIcons
                    name="file-download-done"
                    size={24}
                    color="black"
                    style={{
                      borderRadius: 30,
                      backgroundColor: "white",
                      padding: 5,
                    }}
                  />
                </>
              )}
              <Text style={styles.buttonText}>
                {"Criminal \nRecord\n"}
                {criminalStatus}
              </Text>
            </View>
          </Pressable>
          <View style={styles.column}>
            {selectedView === "Criminal" && (
              <View style={styles.subSectionView}>
              <View style={[styles.rows, { justifyContent: "space-around" }]}>
                <View
                  style={[
                    styles.column,
                    { width: "40%", alignItems: "center" },
                  ]}
                >
                  <Pressable style={[styles.imageBtn, styles.column]}>
                    <Ionicons
                      name="md-add-circle-outline"
                      size={24}
                      color="black"
                      style={{ alignSelf: "center" }}
                    />
                  </Pressable>
                  <Text>Front Side</Text>
                </View>

                <View
                  style={[
                    styles.column,
                    { width: "40%", alignItems: "center" },
                  ]}
                >
                  <Pressable style={[styles.imageBtn, styles.column]}>
                    <Ionicons
                      name="md-add-circle-outline"
                      size={24}
                      color="black"
                      style={{ alignSelf: "center" }}
                    />
                  </Pressable>
                  <Text>Back Side</Text>
                </View>
              </View>

              <View>
                <Pressable style={[styles.button,{width:'60%', backgroundColor:COLORS.warning}]}>
                  <Text  style={styles.buttonText}>
                    Verify
                  </Text>
                </Pressable>
              </View>

              <View style={styles.rows}>
                <Text style={{fontWeight:'600'}}>
                  {
                    "* Accepted ID's :-\n   1. European ID\n   2.Residence Permit\n   3.Student Visa"
                  }
                </Text>
              </View>
            </View>
            )}
          </View>
          <Pressable
            style={styles.button}
            onPress={() => setSelectedView("Bank")}
          >
            <View
              style={[
                styles.rows,
                { justifyContent: "space-between", alignItems: "center" },
              ]}
            >
              {bankStatus === "pending" ? (
                <>
                  <MaterialCommunityIcons
                    name="timer-sand"
                    size={24}
                    color="black"
                    style={{
                      borderRadius: 30,
                      backgroundColor: "white",
                      padding: 5,
                    }}
                  />
                </>
              ) : (
                <>
                  <MaterialIcons
                    name="file-download-done"
                    size={24}
                    color="black"
                    style={{
                      borderRadius: 30,
                      backgroundColor: "white",
                      padding: 5,
                    }}
                  />
                </>
              )}
              <Text style={styles.buttonText}>
                {"Bank \nDetails\n"}
                {bankStatus}
              </Text>
            </View>
          </Pressable>
          <View style={styles.column}>
            {selectedView === "Bank" && (
              <View style={styles.subSectionView}>
              <View style={[styles.rows, { justifyContent: "space-around" }]}>
                <View
                  style={[
                    styles.column,
                    { width: "40%", alignItems: "center" },
                  ]}
                >
                  <Pressable style={[styles.imageBtn, styles.column]}>
                    <Ionicons
                      name="md-add-circle-outline"
                      size={24}
                      color="black"
                      style={{ alignSelf: "center" }}
                    />
                  </Pressable>
                  <Text>Front Side</Text>
                </View>

                <View
                  style={[
                    styles.column,
                    { width: "40%", alignItems: "center" },
                  ]}
                >
                  <Pressable style={[styles.imageBtn, styles.column]}>
                    <Ionicons
                      name="md-add-circle-outline"
                      size={24}
                      color="black"
                      style={{ alignSelf: "center" }}
                    />
                  </Pressable>
                  <Text>Back Side</Text>
                </View>
              </View>

              <View>
                <Pressable style={[styles.button,{width:'60%', backgroundColor:COLORS.warning}]}>
                  <Text  style={styles.buttonText}>
                    Verify
                  </Text>
                </Pressable>
              </View>

              <View style={styles.rows}>
                <Text style={{fontWeight:'600'}}>
                  {
                    "* Accepted ID's :-\n   1. European ID\n   2.Residence Permit\n   3.Student Visa"
                  }
                </Text>
              </View>
            </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.white,
    padding: "1%",
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
    justifyContent: "space-between",
    marginVertical: "1%",
    width: "100%",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
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
    marginVertical: "2%",
    width: "100%",
  },
  buttonText: {
    fontSize: SIZES.width > 400 ? 18 : 16,
    color: COLORS.white,
    textAlign: "center",
    width: "80%",
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
  imageBtn: {
    height: SIZES.height * 0.1,
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
  },
  subSectionView: {
    height: SIZES.height * 0.35,
    width: SIZES.width * 0.98,
    padding:'2%',
    borderRadius:5,
    borderWidth:2,
    borderColor:COLORS.primary
  },
  warning:{
    backgroundColor:COLORS.warning
  },
  success:{
    backgroundColor:COLORS.success
  },
  error:{
    backgroundColor:COLORS.error
  }
});

export default Documents;
