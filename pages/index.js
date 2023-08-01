import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "../components/navigation";

export default function App() {

  return (
    <View>
      <Navigation />
      <Text style={styles.text}>Welcome to Expo & Next.js 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  text: {
    fontSize: 16,
  }
});
