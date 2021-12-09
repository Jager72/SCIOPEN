import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { color } from "../../helpers/styles";
import Cheese from "../../assets/Cheese"
import Ham from "../../assets/Ham"
import Ketchup from "../../assets/Ketchup"
const images = {
  cheese: <Cheese width={50} height={50}/>,
  ham: <Ham width={50} height={50}/>,
  ketchup: <Ketchup width={50} height={50}/>,
  amount: <Text style={{fontSize: 45, paddingHorizontal:10}}>#</Text>
}
const TostElementInput = ({ itemType, eImage }) => {
  const [getValue, setValue] = useState(1);
  return (
    <View style={styles.TostElementInput}>
      {images[eImage]}
      <Text style={styles.typeText}>{itemType}</Text>
      <View style={styles.buttonWrapper}>
        <Button disabled={eImage=="amount"? getValue==1 : !getValue} onPress={() => {setValue(getValue-1)}} color="#ac0303" title="-" />
      </View>
      <Text style={styles.amountText}>{getValue}</Text>
      <View style={styles.buttonWrapper}>
        <Button onPress={() => {setValue(getValue+1)}} color={color.highlightColor} title="+"  />
      </View>
    </View>
  );
};

export default TostElementInput;

const styles = StyleSheet.create({
  TostElementInput: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: color.secondaryColor,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 10,
    padding: 10,
    borderRadius: 25,
  },

  buttonWrapper: {
    flex: 1,
  },
  typeText: {
    flex: 3,
    color:"white",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 25,
    paddingLeft: "4%",
  },
  amountText: {
    flex: 1,
    color:"white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
  },
});
