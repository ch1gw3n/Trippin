import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { BlogContext } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState("");
    const [fooddrink, setFoodDrink] = useState("");
    const [attractions, setAttractions] = useState("");
    const [accomodations, setAccommodations] = useState("");
    const [notes, setNotes] = useState("");
    const { state, dispatch } = useContext(BlogContext);

    return (
        <View style={styles.containerStyle}>
            <View style={styles.infoWrapperStyle}>
                <Text style={styles.title}>Add Trip</Text>
                <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} placeholder="Trip Name" />
                <TextInput style={styles.input} value={fooddrink} onChangeText={(text) => setFoodDrink(text)} placeholder="Food & Drink" />
                <TextInput style={styles.input} value={attractions} onChangeText={(text) => setAttractions(text)} placeholder="Attractions" />
                <TextInput style={styles.input} value={accomodations} onChangeText={(text) => setAccommodations(text)} placeholder="Accommodations" />
                <TextInput style={styles.input} value={notes} onChangeText={(text) => setNotes(text)} placeholder="Notes" />
                <Button
                    title="Add Trip"
                    onPress={() => {
                        dispatch({ type: "ADD_POST", payload: { title, fooddrink, attractions, accomodations, notes } });
                        navigation.goBack();
                    }}
                />
            </View>
        </View>
    );
};

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
        paddingHorizontal: 30,
        marginBottom: 200,
        backgroundColor: "#ffffff",
    },
    title: {
        fontWeight: "bold",
        textAlign: "left",
        marginVertical: 5,
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 8,
        marginBottom: 16,
    },
});

export default CreateScreen;