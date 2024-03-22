import { Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
  return (
    <FlatList
      style={{ marginRight: -32 }}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={categories}
      renderItem={({ item }) => {
        const selected = selectedCategory === item;

        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
            ]}
          >
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Categories;
