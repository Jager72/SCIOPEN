import React, { useState } from "react";
import {StyleSheet, Text, View, Button } from "react-native";
import { color } from "../../helpers/styles";

const NotAvailableClass = ({ classNumber, description }) => {
  return (
    <View style={styles.NotAvailableClass }>

      <Text style={styles.typeText}>{classNumber}</Text>

      <View style={styles.Description}>
          <Text style={styles.descriptionText} >{description}</Text>
      </View>

      <View style={styles.NotAvailable}>
          <Text style={styles.descriptionText} >W użyciu</Text>
      </View>
     
    </View>
  );
};

export default NotAvailableClass ;

const styles = StyleSheet.create({
  NotAvailableClass : {
    height: 90,
    flexDirection: "row",
    backgroundColor: "#376382",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 8,
    padding: 8,
    borderRadius: 25,
  },

  typeText: {
    flex: 1,
    color:"white",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: "3%",
  },
  Description: {
    flex: 3,
    backgroundColor: "#064c7d",
    height: "90%",
    borderRadius: 5,
    color: 'white',
    justifyContent: 'center'
  },
  descriptionText: {
    color: 'white',
    textAlign: "center",
    fontSize: 15,
    padding: 5

  },
  NotAvailable: {
    flex: 1.2,
    backgroundColor: "#bd6a17",
    height: "70%",
    borderRadius: 5,
    color: 'white',
    justifyContent: 'center',
    marginRight: "2%",
    marginLeft: "2%"

  }

});
