import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Scrollable from "@/components/containers/Scrollable";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import HeaderWithSearchBar from "@/components/headers/HeaderWithSearchBar";
import AddressBar from "@/components/ui/AddressBar";
import { Link } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Spacing } from "@/consts/spacing";

export default function home() {
  return (
    <View style={styles.footer}>
      <HeaderWithSearchBar headerBackVisible={true} />

      <Link style={styles.changePassword} href="/changePassword">
        mudar a senha
      </Link>
    </ View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  changePassword: {
    color: "red",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  registerLink: {
    marginTop: Spacing.md,
    fontSize: 12,
    textAlign: "center"
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
  },
});
