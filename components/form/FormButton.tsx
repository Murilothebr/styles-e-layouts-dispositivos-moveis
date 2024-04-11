import { Colors } from "@/consts/colors";
import { Spacing } from "@/consts/spacing";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type FormInput = {
  title: string;
} & TouchableOpacityProps;

export default function FormButton({ title, ...rest }: FormInput) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: Colors.primary,
    borderRadius: 2,
    padding: 16,
    width: "85%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "white",
    textAlign: "center",
  },
});
