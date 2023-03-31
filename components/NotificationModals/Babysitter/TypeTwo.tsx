import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const TypeTwo = ({heading, subHeading, btnText , date, time}:any) => {
  return (
    <View style={styles.container}>
      <View style={styles.rows}>
        <View style={styles.rows}>
          <Image
            source={require("../../../assets/account.png")}
            resizeMode="contain"
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              marginHorizontal: "3%",
              marginVertical: "1%",
              borderColor: COLORS.primary,
              borderWidth: 1,
            }}
          />
          <Text
            style={[
              styles.subHeadings,
              { fontWeight: "600", color: COLORS.primary },
            ]}
          >
            {heading && heading}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={[styles.text, { color: COLORS.primary }]}>dd/mmm</Text>
          {/* notification date */}
          <Text style={[styles.text, { color: COLORS.primary }]}>hh:mm AM</Text>
          {/* notification time */}
        </View>
      </View>

      <Text style={styles.label}>
        {subHeading && subHeading}
      </Text>
      <View style={[styles.rows, { justifyContent: "space-evenly" }]}>
        <Pressable style={[styles.button]}>
          <Text style={styles.buttonText}>{btnText && btnText}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 5,
    padding: "2%",
    marginVertical: "1%",
    justifyContent: "space-evenly",
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginVertical: "1%",
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
    fontSize: 20,
    fontWeight: "700",
    margin: "3%",
  },
  subHeadings: {
    color: COLORS.black,
    fontSize: 18,
  },
  label: {
    color: COLORS.black,
    fontSize: 14,
    marginLeft: 5,
  },
  text: {
    color: COLORS.black,
    fontSize: 14,
    marginHorizontal: "1%",
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: "1%",
    paddingHorizontal: "2%",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: "2%",
    width: "50%",
  },
  buttonText: {
    fontSize: SIZES.width > 400 ? 18 : 16,
    color: COLORS.white,
    position: "relative",
    textAlign: "center",
  },
  detailsBox: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray,
    borderWidth: 1,
    height: 100,
  },
  warning: {
    backgroundColor: COLORS.warning,
  },
  success: {
    backgroundColor: COLORS.success,
  },
  error: {
    backgroundColor: COLORS.error,
  },
});

export default TypeTwo;
