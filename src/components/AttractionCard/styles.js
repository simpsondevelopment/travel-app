import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
    padding: 4,
    borderWidth: 4,
    borderColor: "#E2E2E2",
    borderRadius: 15,
  },
  image: {
    width: (width - 96) / 2,
    height: 100,
    borderRadius: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: "500",
    marginTop: 12,
    marginLeft: 6,
  },
  subtitle: {
    fontSize: 8,
    fontWeight: "300",

    color: "rgba(0,0,0,0.5)",
  },
  icon: {
    width: 8,
    height: 8,
    marginRight: 4,
  },
  iconSubContainer: {
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 6,
    marginBottom: 12,

    alignItems: "center",
  },
});

export default styles;
