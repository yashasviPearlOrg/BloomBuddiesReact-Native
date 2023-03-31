import React from 'react'
import {View , Text,StyleSheet, Image,Pressable} from 'react-native'
import { COLORS, SIZES } from '../../constants';

const BuddiesListItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rows}>
        <Text style={styles.subHeadings}>Bloom Buddy Name</Text>
        <Image
          source={require("../../assets/images/uk.jpg")}
          resizeMode="cover"
          style={{
            height: SIZES.width > 400 ? 30 : 20,
            width: SIZES.width > 400 ? 40 : 30,
            borderColor: COLORS.primary,
            borderWidth: 1,
            alignSelf: "center",
          }}
        />
      </View>
      <View style={styles.rows}>
        <View>
          <Image
            source={require("../../assets/account.png")}
            resizeMode="contain"
            style={styles.profileImage}
          />
        </View>
        <View style={[styles.column, { width: "22%", justifyContent:'space-evenly'}]}>
          <Pressable style={[styles.button,{width:'100%'}]}>
            <Text style={styles.buttonText}>Message</Text>
          </Pressable>

          <Pressable style={[styles.button,{width:'100%'}]}>
            <Text style={styles.buttonText}>Request Meeting</Text>
          </Pressable>

          <Pressable style={[styles.button,{width:'100%'}]}>
            <Text style={styles.buttonText}>Hire</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.rows, { justifyContent: "space-between" }]}>
        <View>
          <Text>Badges</Text>
        </View>
        <Pressable style={[styles.button, { width: "70%" }]}>
          <Text style={styles.buttonText}>Open Profile</Text>
        </Pressable>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      width: "100%",
      borderColor:'black',
      borderWidth:1,
      borderRadius:5,
      padding:'2%',
      marginVertical:'1%'
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
      alignItems: "center"
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
      color: COLORS.black,
      fontSize: 16,
      width: "40%",
    },
    button: {
      backgroundColor: COLORS.primary,
      paddingVertical: "1%",
      paddingHorizontal: "8%",
      display: "flex",
      alignItems: "center",
      borderRadius: 5,
      alignSelf: "flex-end",
      marginVertical:'5%'
    },
    buttonText: {
      fontSize: SIZES.width > 400 ? 18 : 15,
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
  });

export default BuddiesListItem