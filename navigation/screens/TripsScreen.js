//https://github.com/ch1gw3n/Trippin
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TripsScreen({ navigation }) {
    return (
        <View style={styles.containerStyle}>
            <View style= {styles.infoWrapperStyle}>
                <Text style={styles.title}>See all</Text>
                <Text style={styles.name}>Trips</Text>
                <Text style={styles.description}>-enter stuff here-</Text>
                <Text style={styles.description}>-enter stuff here-</Text>
            </View>
        </View>
        
    );
}

let styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#DCCFEC",
  },
  infoWrapperStyle: {
    width: "80%",
    textAlign: "left",
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 5,
    paddingHorizontal: 30,
    marginBottom: 250,
    backgroundColor: "#ffffff",
  },
  title: {
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 5,
  },
  name: {
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 8,
    fontSize: 20,
  },
  description: {
    marginVertical: 2,
    textAlign: "left",
  },
});