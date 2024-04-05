import * as React from 'react';
import { View, Text } from 'react-native';

export default function trippinHeader() {
  return (
    <View style={{ backgroundColor: '#EE9972' }}>
      <Text style={{  padding: 40, fontSize: 30, color: 'black', textAlign: "center" }}>
        Trippin'
      </Text>
    </View>
  );
}