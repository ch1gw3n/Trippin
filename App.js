import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// components
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// screen parts
import trippinFooter from './components/trippinFooter';
import trippinHeader from './components/trippinHeader';

// screens ?

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <trippinHeader />
          <Drawer.Navigator useLegacyImplementation initialRouteName="Welcome">
            <Drawer.Screen name="Welcome" component={WelcomeScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} /> 
            // we have some other screen
          </Drawer.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <trippinFooter />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: { backgroundColor: '#333333' },
});
