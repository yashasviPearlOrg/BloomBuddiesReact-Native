import React from "react";
import { View, Text } from "react-native";
// import { TextInput } from "react-native/Libraries/Components/TextInput/TextInput";
import RNDateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";

const EditBabySitterProfilePageOne = ({ navigation }: any) => {
  return (
    <View>
      <View>
        <Text>Address:</Text>
        {/* <TextInput /> */}
      </View>
      <View>
        <Text>Contact Number:</Text>
        {/* <TextInput inputMode="tel" /> */}
      </View>
      <View>
        <Text>DOB:</Text>
        <RNDateTimePicker
          mode="date"
          maximumDate={new Date()}
          minimumDate={new Date("1930-01-01")}
          value={new Date()}
          positiveButton={{label: 'OK', textColor: 'green'}}
        />
      </View>
    </View>
  );
};

export default EditBabySitterProfilePageOne;
