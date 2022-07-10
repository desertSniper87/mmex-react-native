import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { StatusBar } from "expo-status-bar";

export default function AccountSummary() {
  return (
    <View style={styles.container}>
      This is account summary
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

