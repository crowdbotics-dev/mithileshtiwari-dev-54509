import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled8 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.fYfukcIS}><View style={styles.ezxQClUb}></View></View><View style={styles.hTIqUsLB}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  fYfukcIS: {
    flex: 2,
    alignItems: "start",
    gap: 5,
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  hTIqUsLB: {
    flex: 1
  },
  ezxQClUb: {
    flex: 1
  }
});
export default Untitled8;