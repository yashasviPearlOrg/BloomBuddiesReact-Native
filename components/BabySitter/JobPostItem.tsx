import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { COLORS, SIZES } from "../../constants";

const JobPostItem = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderColor: COLORS.white,
          borderWidth: 1,
          borderRadius: 2,
          paddingVertical: 2,
          paddingHorizontal: '2%',
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/account.png")}
          resizeMode="contain"
          style={{ height: 24, width: 24, borderRadius: 20, marginHorizontal:'3%', marginVertical:'1%' }}
        />
        <Text style={[styles.subHeadings, { color: "white" }]}>
          Parent Name
        </Text>
      </View>
      <View style={styles.rows}>
        <View>
          <Image
            source={require("../../assets/account.png")}
            resizeMode="contain"
            style={styles.profileImage}
          />
        </View>
        <View style={styles.column}>
          <View style={styles.box}>
            <Text>dummy</Text>
          </View>
          <View style={styles.box}>
            <Text>dummy</Text>
          </View>
          <View style={styles.box}>
            <Text>dummy</Text>
          </View>
        </View>
      </View>
      <View style={styles.rows}>
        <Text style={styles.buttonText}>+1926438038</Text>
        <Pressable style={styles.warnBtn}><Text style={{color:'white'}}>Details</Text></Pressable>
        <Pressable style={styles.successBtn}><Text style={{color:'white'}}>Apply</Text></Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    borderRadius: 5,
    padding: "2%",
    marginVertical: "1%",
    backgroundColor: COLORS.primary,
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
    borderRadius: 10,
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
    color: COLORS.white,
    fontSize: 16,
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
  box: {
    paddingHorizontal: "20%",
    paddingVertical: "2%",
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: "2%",
  },
  successBtn:{
    backgroundColor:COLORS.success,
    paddingVertical: "1%",
    paddingHorizontal: "8%",
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
  },
  warnBtn:{
    backgroundColor:COLORS.warning,
    paddingVertical: "1%",
    paddingHorizontal: "8%",
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
  }
});

export default JobPostItem;
