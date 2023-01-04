import { RadioGroup } from "react-native-radio-buttons-group";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><RadioGroup style={styles.OozpLjep} radioButtons={[{
        id: "0",
        value: "0",
        label: "Option 1"
      }, {
        id: "1",
        value: "1",
        label: "Option 2"
      }, {
        id: "2",
        value: "2",
        label: "Option 3"
      }]} layout="row" selectedOption="ROW"></RadioGroup></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  OozpLjep: {
    width: 308,
    height: 103,
    top: 60,
    left: 22,
    position: "absolute"
  }
});
export default Untitled2;