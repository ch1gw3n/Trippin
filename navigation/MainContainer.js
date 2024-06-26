import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import TripsScreen from './screens/TripsScreen';
import AboutScreen from './screens/AboutScreen';

//Screen names
const homeName = "Home";
const tripsName = "Trips";
const aboutName = "About";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions ={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === tripsName) {
              iconName = focused ? 'location' : 'location-outline';

            } else if (rn === aboutName) {
              iconName = focused ? 'information-circle' : 'information-circle-outline'; //add ?
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10
          },
          tabBarStyle: {
            display: 'flex',
            padding: 10,
            height: 100,
            backgroundColor: '#4F517D', // Added backgroundColor for color
            color: 'white' // Assuming this is the color for the text in the tab bar
          }
        })}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={tripsName} component={TripsScreen} />
        <Tab.Screen name={aboutName} component={AboutScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
//ahfajdkfnkahsjdfhaskdjfha