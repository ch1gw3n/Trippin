import * as React from 'react';
import { StyleSheet } from 'react-native';  
import MainContainer from './navigation/MainContainer';

function App() {
  return (
    <MainContainer/>
  );
}

export default App;

/*

import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer,useNavigation} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import IndexScreen from './navigation/screens/IndexScreen'
import {BlogProvider} from './navigation/context/BlogContext'
import MainContainer from './navigation/MainContainer';
import ShowScreen from './navigation/screens/ShowScreen'
import CreateScreen from './navigation/screens/CreateScreen'
import {Feather} from '@expo/vector-icons'
const Stack = createStackNavigator()
function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="index"
          component={IndexScreen} 
          options={{
            title:"blogs",
            headerTitleAlign:"center",
            headerRight:()=>{
               return <Feather 
               name="plus" 
               size={30} 
               style={{marginRight:5}}
               />
            }
            }} />
          <Stack.Screen name="show" component={ShowScreen} options={{title:"show blog",headerTitleAlign:"center"}} />
          <Stack.Screen name="create" component={CreateScreen} options={{title:"create",headerTitleAlign:"center"}} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

export default ()=>{
 return <BlogProvider>
     <App />
  </BlogProvider>
}*/