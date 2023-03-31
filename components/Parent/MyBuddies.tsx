import React from 'react'
import { View, Text,ScrollView,StyleSheet} from "react-native";
import BuddiesListItem from './BuddiesListItem';


const MyBuddies = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>My Bloom Buddies</Text>
        <BuddiesListItem/>
        <BuddiesListItem/>
        <BuddiesListItem/>
        <BuddiesListItem/>
        <BuddiesListItem/>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    padding:'2%'
  }
})
export default MyBuddies