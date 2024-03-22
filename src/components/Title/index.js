import { View, Text } from "react-native";
import styles from "./styles";
import React, { useState, useEffect } from "react";

const Title = ({ text }) => {
  const [stateText, setStateText] = useState("Defualt State");

  useEffect(() => {
    console.log("Hello Useeffect");
    setStateText(text);
  }, [text]);

  const onChangeText = () => {
    setStateText("updated State");
  };

  return (
    <View>
      <Text onPress={onChangeText} style={styles.title}>
        {stateText}
      </Text>
    </View>
  );
};

Title.defaultProps = {
  text: "Default Text",
};

export default React.memo(Title);
