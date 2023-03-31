import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { COLORS } from "../constants";
import TypeFive from "./NotificationModals/Babysitter/TypeFive";
import TypeFour from "./NotificationModals/Babysitter/TypeFour";
import TypeOne from "./NotificationModals/Babysitter/TypeOne";
import TypeSix from "./NotificationModals/Babysitter/TypeSix";
import TypeThree from "./NotificationModals/Babysitter/TypeThree";
import TypeTwo from "./NotificationModals/Babysitter/TypeTwo";

const Notifications = () => {
  const data = {
    day: "dd/mm/yyyy",
    familyName: "Family 1",
    startTime: "hh:mm AM",
    endTime: "hh:mm PM",
  };
  return (
    <ScrollView style={styles.parent}>
      <View style={styles.container}>
        <TypeOne
          heading="Meeting"
          subHeading="Parent Name would like to meet you during this schedule"
          details="(Meeting Details)"
          date="dd mmm"
          time="hh:mm AM"
        />
        <TypeOne
          heading="Hire Request"
          subHeading="Parent Name would like to hire you"
          details="(Details)"
          date="dd mmm"
          time="hh:mm AM"
        />
        <TypeOne
          heading="New Matching Job"
          subHeading="Dear Bloom-buddy, a job matching your schedule is available. kindly find details below."
          details="(Job Details)"
          date="dd mmm"
          time="hh:mm AM"
        />
        <TypeTwo
          heading="New Message"
          subHeading="Dear Bloom-Buddy, you recieved a new message from a parent, reply now to keep your response rate high."
          btnText="View Message"
          date="dd mmm"
          time="hh:mm AM"
        />
        <TypeTwo
          heading="Account Activated"
          subHeading="Dear Bloom-Buddy, congratulations!, your account has been activated, you may now begin to apply for jobs, to increast your booking rate, activate instant booking on calendar page."
          btnText="View Calendar"
          date="dd mmm"
          time="hh:mm AM"
        />
        <TypeTwo
          heading="New Group Message"
          subHeading="Dear Bloom-Buddy, you recieved a new message from a Team-Bloom, reply now to keep your response rate high"
          btnText="View Message"
          date="dd mmm"
          time="hh:mm AM"
        />
        <TypeThree
          heading={"Extra Hours Added"}
          subHeading="Dear Bloom-Buddy, one of your families have added some extra hours on your calendar. you have 48 hrs  to approve or reject. After 48 hrs the request will be automatically approved."
          details={data}
          date="dd mmm"
          time="hh:mm AM"
        />
        <TypeThree
          heading={"Absence Notification"}
          subHeading="Dear Bloom-Buddy, one of your families has indicated that you were absent. you have 48 hrs  to approve or reject. After 48 hrs the request will be automatically approved."
          details={data}
          date="dd mmm"
          time="hh:mm AM"
        />
        <TypeFour
          heading={"Government ID \nApproved"}
          subHeading="Dear Bloom-Buddy, your government-ID has been approved."
          date="dd mmm"
          time="hh:mm AM"
        />
        <TypeFour
          heading={"Government ID \nRejected"}
          subHeading="Dear Bloom-Buddy, your government-ID has been rejected."
          date="dd mmm"
          time="hh:mm AM"
        />
        <TypeFour
          heading={"Security Cretificate \nApproved"}
          subHeading="Dear Bloom-Buddy, your Security Cretificate has been approved."
          date="dd mmm"
          time="hh:mm AM"
        />
        <TypeFour
          heading={"Security Cretificate \nRejected"}
          subHeading="Dear Bloom-Buddy, your Security Cretificate has been rejected."
          date="dd mmm"
          time="hh:mm AM"
        />
        <TypeFour
          heading={"Criminal Record \nApproved"}
          subHeading="Dear Bloom-Buddy, your Criminal Record has been approved."
          date="dd mmm"
          time="hh:mm AM"
        />
        <TypeFour
          heading={"Criminal Record \nRejected"}
          subHeading="Dear Bloom-Buddy, your Criminal Record has been rejected."
          date="dd mmm"
          time="hh:mm AM"
        />
        <TypeFour
          heading={"Bank Details \nApproved"}
          subHeading="Dear Bloom-Buddy, your Bank Details has been approved."
          date="dd mmm"
          time="hh:mm AM"
        />
        <TypeFour
          heading={"Bank Details \nRejected"}
          subHeading="Dear Bloom-Buddy, your Bank Details has been rejected."
          date="dd mmm"
          time="hh:mm AM"
        />
        <TypeFive
          heading="Instant Reservation"
          subHeading="Dear Bloom-Buddy, congratulations!, you have been hired by a Bloom parent. Kindly find details below."
          details="(Full Job Details)"
          date="dd mmm"
          time="hh:mm AM"
        />
        <TypeSix
          heading={"Extra Hours Approved"}
          subHeading="Dear Bloom-Buddy, one of your families has approved your request of some extra hours. Kindly find the details below."
          details={data}
          date="dd mmm"
          time="hh:mm AM"
          btnText="View Calendar"
        />
        <TypeSix
          heading={"Extra Hours Rejected"}
          subHeading="Dear Bloom-Buddy, one of your families has rejected your request of some extra hours. Kindly find the details below."
          details={data}
          date="dd mmm"
          time="hh:mm AM"
          btnText="Contact Team Bloom"
        />
        <TypeSix
          heading={"Absence Approved"}
          subHeading="Dear Bloom-Buddy, one of your families has approved your request of absence.Kindly find the details below."
          details={data}
          date="dd mmm"
          time="hh:mm AM"
          btnText="View Calendar"
        />
        <TypeSix
          heading={"Absence Rejected"}
          subHeading="Dear Bloom-Buddy, one of your families has rejected your request of absence.Kindly find the details below."
          details={data}
          date="dd mmm"
          time="hh:mm AM"
          btnText="Contact Team Bloom"
        />
      </View>
    </ScrollView>
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
  parent: {
    backgroundColor: COLORS.white,
    padding: "2%",
  },
});

export default Notifications;
