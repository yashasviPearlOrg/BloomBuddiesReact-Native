import { View, Text, ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import JobPostItem from "./JobPostItem";

const Posts = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <JobPostItem />
        <JobPostItem />
        <JobPostItem />
        <JobPostItem />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: "2%",
  },
});

export default Posts;
