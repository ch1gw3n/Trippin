import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TripsScreen({ navigation }) {
    const [tripName, setTripName] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [accommodations, setAccommodations] = useState('');
    const [attractions, setAttractions] = useState('');
    const [foodAndDrink, setFoodAndDrink] = useState('');
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editModalVisible, setEditModalVisible] = useState(false);

    const handleSaveNote = () => {
        // Create a new note object with the entered data
        const newNoteData = {
            tripName,
            startDate: startDate.toDateString(), // Convert date object to string
            endDate: endDate.toDateString(), // Convert date object to string
            accommodations,
            attractions,
            foodAndDrink,
            note: newNote,
            timestamp: new Date().getTime(),
        };

        // If editing an existing note
        if (editIndex !== null) {
            const updatedNotes = [...notes];
            updatedNotes[editIndex] = newNoteData;
            setNotes(updatedNotes);
            setEditIndex(null);
        } else {
            // Add the new note to the notes array
            setNotes([...notes, newNoteData]);
        }

        // Clear input fields
        setTripName('');
        setStartDate(new Date());
        setEndDate(new Date());
        setAccommodations('');
        setAttractions('');
        setFoodAndDrink('');
        setNewNote('');
    };

    const handleDeleteNote = (index) => {
        Alert.alert(
            'Confirm Delete',
            'Are you sure you want to delete this note?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        const updatedNotes = [...notes];
                        updatedNotes.splice(index, 1);
                        setNotes(updatedNotes);
                    },
                    style: 'destructive',
                },
            ],
            { cancelable: true }
        );
    };

    const handleEditNote = (index) => {
        const selectedNote = notes[index];
        setTripName(selectedNote.tripName);
        setStartDate(new Date(selectedNote.startDate));
        setEndDate(new Date(selectedNote.endDate));
        setAccommodations(selectedNote.accommodations);
        setAttractions(selectedNote.attractions);
        setFoodAndDrink(selectedNote.foodAndDrink);
        setNewNote(selectedNote.note);
        setEditIndex(index);
        setEditModalVisible(true); // Show the edit modal
    };    

    // Sort notes by most recent
    const sortedNotes = notes.slice().sort((a, b) => b.timestamp - a.timestamp);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.sectionTitle}>Trip Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter trip name..."
                value={tripName}
                onChangeText={setTripName}
            />

            <Text style={styles.sectionTitle}>Start Date</Text>
            <TouchableOpacity style={styles.dateInput} onPress={() => setShowStartDatePicker(true)}>
                <Text>{startDate.toDateString()}</Text>
            </TouchableOpacity>
            {showStartDatePicker && (
                <DateTimePicker
                    value={startDate}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={(event, selectedDate) => {
                        setShowStartDatePicker(false);
                        if (selectedDate) {
                            setStartDate(selectedDate);
                        }
                    }}
                />
            )}

            <Text style={styles.sectionTitle}>End Date</Text>
            <TouchableOpacity style={styles.dateInput} onPress={() => setShowEndDatePicker(true)}>
                <Text>{endDate.toDateString()}</Text>
            </TouchableOpacity>
            {showEndDatePicker && (
                <DateTimePicker
                    value={endDate}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={(event, selectedDate) => {
                        setShowEndDatePicker(false);
                        if (selectedDate) {
                            setEndDate(selectedDate);
                        }
                    }}
                />
            )}

            <Text style={styles.sectionTitle}>Accomodations</Text>
            <TextInput
                style={[styles.input, styles.notesInput]}
                placeholder="Enter accommodations..."
                value={accommodations}
                onChangeText={setAccommodations}
                multiline
            />
            
            <Text style={styles.sectionTitle}>Attractions</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter attractions..."
                value={attractions}
                onChangeText={setAttractions}
                multiline
            />

            <Text style={styles.sectionTitle}>Food & Drink</Text>
            <TextInput
                style={[styles.input, styles.notesInput]}
                placeholder="Enter food & drink..."
                value={foodAndDrink}
                onChangeText={setFoodAndDrink}
                multiline
            />

            <Text style={styles.sectionTitle}>More Notes</Text>
            <TextInput
                style={[styles.input, styles.notesInput]}
                placeholder="More notes..."
                value={newNote}
                onChangeText={setNewNote}
                multiline
            />

            <TouchableOpacity style={styles.saveButton} onPress={handleSaveNote}>
                <Text style={styles.saveButtonText}>Save Note</Text>
            </TouchableOpacity>

            {/* Render saved notes */}
            {sortedNotes.map((savedNote, index) => (
                <View key={index} style={styles.savedNote}>
                    <Text style={styles.savedNoteText}>Trip Name: {savedNote.tripName}</Text>
                    <Text style={styles.savedNoteText}>Start Date: {savedNote.startDate}</Text>
                    <Text style={styles.savedNoteText}>End Date: {savedNote.endDate}</Text>
                    <Text style={styles.savedNoteText}>Accommodations: {savedNote.accommodations}</Text>
                    <Text style={styles.savedNoteText}>Attractions: {savedNote.attractions}</Text>
                    <Text style={styles.savedNoteText}>Food & Drink: {savedNote.foodAndDrink}</Text>
                    <Text style={styles.savedNoteText}>Note: {savedNote.note}</Text>
                    <View style={styles.noteActions}>
                        <TouchableOpacity style={styles.trashButton} onPress={() => handleDeleteNote(index)}>
                        <Ionicons name="trash-outline" size={20} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#DCCFEC",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderColor: '#4F517D',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
    },
    dateInput: {
        borderWidth: 1,
        borderColor: '#4F517D',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        backgroundColor: '#f9f9f9',
    },
    saveButton: {
        backgroundColor: '#4F517D',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    savedNote: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
    },
    savedNoteText: {
        fontSize: 16,
        marginBottom: 5,
    },
    trashButton: {
        padding: 5,
        alignSelf: 'flex-end', // Align to the right
    },
});
