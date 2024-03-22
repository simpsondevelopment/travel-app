import { View, SafeAreaView } from "react-native";
import React from "react";
import Title from "../../components/Title";

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Title text="My Second Component" />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
