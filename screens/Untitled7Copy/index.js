import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
const customBackground = "#DEEDD5";

const ExampleInline = () => {
  return <Text style={styles.baseText}>
    <View style={styles.container}>
      <Text style={{
        padding: 10,
        backgroundColor: customBackground
      }}>
        Codegen should ignore my inline. style
      </Text>
      </View>
    </Text>;
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  baseText: {
    fontFamily: 'Cochin'
  }
});
export default ExampleInline;