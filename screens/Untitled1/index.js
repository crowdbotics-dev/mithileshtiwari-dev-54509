import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  const Password = useSelector(state => state.Password);
  const Passw = useSelector(state => state.Passw);
  const Pas = useSelector(state => state.Pas);
  const Pass = useSelector(state => state.Pass);
  const Pa = useSelector(state => state.Pa);
  const signup = useSelector(state => state.signup);
  const Login = useSelector(state => state.Login);
  const Lo = useSelector(state => state.Lo);
  return <SafeAreaView style={styles.safeArea} onPress={() => navigation.navigation.navigate("undefined", {})}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}></ScrollView>
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