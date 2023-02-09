import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { colors } from "../utils/colors/colors";
import { TextInput } from "react-native-paper";
import Button from "../components/Button";

const Focus = () => {
  const { height, width } = useWindowDimensions();
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={{ width: "70%" }}>
        <TextInput
          label="Focus Item"
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.textInp}
          placeholder={"Enter Your Focus Goal"}
        />
      </View>
      <View
        style={{
          height: "30%",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Button title={"Add"} style={{ height: "10%", marginTop: 100 }} />
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    marginTop: "50%",
    flexDirection: "row",
  },
  text: {
    color: colors.white,
  },
  textInp: {
    borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    margin: "10%",
    // marginTop: 0.2 * height,
    // marginLeft: 0.2 * width,
  },
});
