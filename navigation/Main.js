import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import HomeScreen from './screens/HomeScreen'
import AllTrips from './screens/AllTrips'
import Extra from './screens/Extra'

// Screen Names
const homeName = 'Home';
const allTripsName = 'All Trips';
const extraName = 'Extra';

const Tab = createBottomTabNavigator();

export default function Main(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let routeName = route.name;
            
                    if (routeName === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (routeName === allTripsName) {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (routeName === extraName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
            
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            
            tabBarOptions={{
                activeTintColor: 'tomato',
                inActiveTintColor: 'grey',
                labelStyle: {paddingBottom: 10, fontSize: 10},
                style: {padding: 10, height: 70}
            }}
            >

            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={allTripsName} component={AllTrips}/>
            <Tab.Screen name={extraName} component={Extra}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}