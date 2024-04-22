import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.infoWrapperStyle}>
                <Text style={styles.name}>Let's Get Trippin</Text>
                <Text style={styles.description}>This app allows you to keep track of all past and future trips, with sections such as Accomodations and Attractions.</Text>
                <Text style={styles.title}>To Begin</Text>
                <Text style={styles.description}
                >Navigate to the Trips screen to begin adding all of your adventures!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#DCCFEC",
    },
    infoWrapperStyle: {
        width: "80%",
        textAlign: "center",
        borderRadius: 10,
        paddingVertical: 10,
        elevation: 5,
        paddingHorizontal: 20,
        marginBottom: 200,
        backgroundColor: "#ffffff",
    },
    title: {
        fontWeight: "bold",
        textAlign: "left",
        marginVertical: 5,
      },
    name: {
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 8,
        fontSize: 20,
    },
    description: {
        marginVertical: 2,
        textAlign: "left",
    },
});