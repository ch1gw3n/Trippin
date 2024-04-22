import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen({ navigation }) {
    return (
        <View style={styles.containerStyle}>
            <View style= {styles.infoWrapperStyle}>
                <Text style={styles.title}>Developed by</Text>
                <Text style={styles.name}>Chi Nguyen             Erika Roberts</Text>
                <Text style={styles.description}>Spring 2024</Text>
                <Text style={styles.description}>College of Charleston</Text>
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
    paddingHorizontal: 20,
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