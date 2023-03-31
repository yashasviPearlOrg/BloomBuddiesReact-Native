import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { COLORS, SIZES } from "../../constants";

const PopupModal = ({ visibility, msg1, msg2, header, confirmAction }: any) => {

  const [modalVisible,setModalVisible] = useState(visibility)

  

  return (
    <View>
      <Modal visible={modalVisible} animationType={"fade"} transparent={true} onDismiss={()=>setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(52, 52, 52, 0.5)",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom:0,
          }}
        >
          <View
            style={{
              alignItems: "center",
              backgroundColor: "white",
              height: "70%",
              width: "90%",
              borderRadius: 7,
              elevation: 10,
            }}
          >
            <View style={{ alignItems: "center", margin: 5 }}>
              <Text
                style={{
                  fontSize: SIZES.width > 400 ? 44 : 38,
                  marginTop: "2%",
                }}
              >
                {header}
              </Text>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: COLORS.primary,
                width: "95%",
                marginVertical: "2%",
              }}
            />
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
                height:'80%',
                width:'auto'
              }}
            >
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => confirmAction("French")}
                style={{
                  alignItems: "center",
                  width:
                    SIZES.width > 400 ? SIZES.width * 0.4 : SIZES.width * 0.8,
                  height: "35%",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: COLORS.primary,
                    textDecorationLine: "underline",
                    fontSize: SIZES.width > 400 ? 24 : 18,
                    marginVertical: "5%",
                  }}
                >
                  {msg1}
                </Text>

                <Image
                  source={require("../../assets/images/french.jpg")}
                  resizeMode="cover"
                  style={{
                    height: SIZES.width>400?200:100,
                    width: SIZES.width>400?300:200,
                    borderColor: COLORS.primary,
                    borderWidth: 1,
                    alignSelf: "center",
                  }}
                />
                {/* {showLoader && (
                <ActivityIndicator
                  size={SIZES.width > 400 ? 30 : 20}
                  color="white"
                />
              )} */}
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => confirmAction("English")}
                style={{
                  alignItems: "center",
                  width:
                    SIZES.width > 400 ? SIZES.width * 0.4 : SIZES.width * 0.8,
                  height: "35%",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: COLORS.primary,
                    textDecorationLine: "underline",
                    fontSize: SIZES.width > 400 ? 24 : 18,
                    marginVertical: "5%",
                  }}
                >
                  {msg2}
                </Text>

                <Image
                  source={require("../../assets/images/uk.jpg")}
                  resizeMode="cover"
                  style={{
                    height: SIZES.width>400?200:100,
                    width: SIZES.width>400?300:200,
                    borderColor: COLORS.primary,
                    borderWidth: 1,
                    alignSelf: "center",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PopupModal;
