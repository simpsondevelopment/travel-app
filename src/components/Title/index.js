import { View, Text } from "react-native";
import styles from "./styles";
import React from "react";

const Title = ({ text, style }) => {
  return (
    <View>
      <Text style={[styles.title, style]}>{text}</Text>
    </View>
  );
};

Title.defaultProps = {
  text: "Default Text",
};

export default React.memo(Title);
