import { Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
  return (
    <FlatList
      style={{ marginRight: -32 }}
      keyExtractor={(item) => String(item)}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={categories}
      renderItem={({ item, index }) => {
        const selected = selectedCategory === item;

        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
              index === 0 ? { marginLeft: 32 } : {},
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
