import * as React from 'react';
import { View, Text } from 'react-native';

export default function SettingsScreen({ navigation }) {
    return (
        <View style={styles.containerStyle}>
            <View style= {styles.infoWrapperStyle}>
                <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen</Text>
                <Text style={styles.title}>Developed by:</Text>
                <Text style={styles.name}>Chi Nguyen & Erika Roberts</Text>
                <Text style={styles.description}>Sprinh 2024</Text>
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
    backgroundColor: "#eeeeee",
  },
  infoWrapperStyle: {
    width: "70%",
    textAlign: "left",
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 5,
    paddingHorizontal: 30,
    marginBottom: 50,
    backgroundColor: "#ffffff",
  },
  title: {
    fontWeight: "bold",
    textAlign: "right",
    fontFamily: "serif",
    marginVertical: 5,
  },
  name: {
    fontWeight: "bold",
    textAlign: "right",
    marginVertical: 8,
    fontFamily: "serif",
    fontSize: 20,
  },
  description: {
    marginVertical: 2,
    textAlign: "right",
  },
  iconsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    alignItems: "center",
    marginBottom: 40,
  }
});