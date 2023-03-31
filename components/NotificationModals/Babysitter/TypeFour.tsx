import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const TypeFour = ({heading, subHeading, date, time}:any) => {
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

});

export default TypeFour;
