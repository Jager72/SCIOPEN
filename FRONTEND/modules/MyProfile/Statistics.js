import React, { useState } from "react";
import {StyleSheet, Text, View,} from "react-native";
import { color } from "../../helpers/styles";

const Statistics= ({ Name, Value }) => {
  return (
    <View style={styles.Statistics }>

      <Text style={styles.nameText}>{Name}:</Text>

      <Text style={styles.valueText} >{Value}</Text>
      
    </View>
  );
};

export default Statistics ;

const styles = StyleSheet.create({
  Statistics : {
    minHeight: 60,
    flexDirection: "row",
    backgroundColor: "#064c7d",
    alignItems: "center",
    justifyContent: "space-around",
    margin: '4%',
    marginBottom: 0,
    padding: 10,
    borderRadius: 25,
  },

  nameText: {
    flex: 3,
    color:"white",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: "3%",
  },
  valueText: {
    flex: 1,
    color: 'white',
    textAlign: "center",
    fontSize: 17,
    padding: 5

  }
});
