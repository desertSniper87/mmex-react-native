import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Database from "./components/database/Database";


export default function App() {
  return (
    <Provider store={ store }>
      <Database />
      <View style={ styles.container }>
        <Text>This is a test!</Text>
        <StatusBar style="auto"/>
      </View>
    </Provider>
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
