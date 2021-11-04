import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { color } from "../helpers/styles";

const images = {
  cheese: require("../assets/favicon.png"),
  ham: require("../assets/icon.png"),
  ketchup: require("../assets/splash.png"),
};

const TostElementInput = ({ itemType, eImage }) => {
  const [getValue, setValue] = useState(0);
  return (
    <View style={styles.TostElementInput}>
      <Image style={styles.tinyIcon} source={images[eImage]} />
      <Text style={styles.typeText}>{itemType}</Text>
      <View style={styles.buttonWrapper}>
        <Button disabled={!getValue} onPress={() => {setValue(getValue-1)}} color="#ac0303" title="-" />
      </View>
      <Text style={styles.amountText}>{getValue}</Text>
      <View style={styles.buttonWrapper}>
        <Button onPress={() => {setValue(getValue+1)}} color={color.highlightColor} title="+" />
      </View>
    </View>
  );
};

export default TostElementInput;

const styles = StyleSheet.create({
  TostElementInput: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: color.brightColor,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 10,
    padding: 10,
    borderRadius: 25,
  },
  tinyIcon: {
    width: 50,
    height: 50,
  },
  typeText: {
    flex: 3,
    textAlign: "left",
    fontSize: 24,
    paddingLeft: 10,
  },
  buttonWrapper: {
    flex: 1,
  },
  amountText: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
  },
});
