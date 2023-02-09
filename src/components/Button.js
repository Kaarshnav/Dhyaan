import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../utils/colors/colors";
const Button = (props, style) => {
  const { title } = props;
  return (
    <TouchableOpacity style={{ ...styles.btn, style }}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderRadius: 20,
    backgroundColor: colors.light_Red,

    // marginTop: 0.2 * height,
    // marginLeft: 0.2 * width,
  },
  text: {
    color: colors.white,
    padding: "10%",
  },
});
