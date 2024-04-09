import * as React from 'react';
import { StyleSheet } from 'react-native'; // Import StyleSheet from react-native
import MainContainer from './navigation/MainContainer';

export default function App() {
  return (
     <MainContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: { 
    backgroundColor: '#333333' 
  },
});