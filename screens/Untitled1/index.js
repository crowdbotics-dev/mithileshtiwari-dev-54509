import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  const Login = useSelector(state => state.Login);
  const Lo = useSelector(state => state.Lo);
  return <SafeAreaView style={styles.safeArea} onPress={() => navigation.navigation.navigate("undefined", {})}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => navigation.navigation.navigate("Untitled2", {
        "Login": Login
      })}><View style={styles.gqORoVNA}></View></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  gqORoVNA: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled1;