import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

const AttractionCard = ({ imageSrc, title, subtitle }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageSrc }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconSubContainer}>
        <Image
          style={styles.icon}
          source={require("../../assets/location.png")}
        />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default AttractionCard;
