import React, { useState } from "react";
import { Switch, StyleSheet, Text, View } from "react-native";
import { color } from "../helpers/styles";
import Ketchup from "../assets/Ketchup"
const images = {
  ketchup: <Ketchup width={50} height={50}/>,
}
const TostElementInput = ({ itemType, eImage }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.TostElementInput}>
      {images[eImage]}
      <Text style={styles.typeText}>{itemType}</Text>
      <Switch
        style={styles.switch}
        trackColor={{ false: "#3e3e3e" , true: color.brightColor  }}
        thumbColor={isEnabled ?  color.highlightColor : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
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
  typeText: {
    flex: 3,
    color:"white",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 25,
    paddingLeft: "4%",
  },
  switch:
  {
     transform: [{ scaleX: 1.6 }, { scaleY: 1.6 }],
     flex:2,
     marginRight:"18%",
  }
});
