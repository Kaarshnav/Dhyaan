import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Focus from "./src/features/Focus";
import { colors } from "./src/utils/colors/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Focus />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mahroon,
  },
});
