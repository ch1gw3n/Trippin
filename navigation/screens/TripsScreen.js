import * as React from 'react';
import { View, Text } from 'react-native';

export default function TripsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#DCCFEC' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Trips Screen</Text>
        </View>
    );
}