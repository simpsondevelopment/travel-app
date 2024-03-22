import { View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Title from "../../components/Title";
import styles from "./styles";
import Categories from "../../components/Categories";
import AttractionCard from "../../components/AttractionCard";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{ fontWeight: "normal" }} />
        <Title text="you want to go?" />
        <Title text="Explore Attractions" style={styles.subtitle} />

        <Categories
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
          categories={[
            "All",
            "Popular",
            "Historical",
            "Random",
            "Something",
            "Anything",
            "Different",
            "Home",
            "Test",
          ]}
        />
        <View style={styles.row}>
          <AttractionCard
            title="Entertainement Park"
            subtitle="Pic 1"
            imageSrc="https://img2.10bestmedia.com/Images/Photos/393302/SkyFly-Soar-America_55_660x440.jpg"
          />
          <AttractionCard
            title="Entertainement Park"
            subtitle="Pic 2"
            imageSrc="https://img2.10bestmedia.com/Images/Photos/393302/SkyFly-Soar-America_55_660x440.jpg"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
