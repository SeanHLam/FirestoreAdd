import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home.js';


import { getFirestore } from "firebase/firestore";


const Stack = createStackNavigator();

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMN4nbj-XJxnieUQv75mixT5iGVQ1fW_U",
  authDomain: "login-with-firebase-55b9b.firebaseapp.com",
  projectId: "login-with-firebase-55b9b",
  storageBucket: "login-with-firebase-55b9b.appspot.com",
  messagingSenderId: "442646657109",
  appId: "1:442646657109:web:5c32a798ab29a63631fcdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Home'
        screenOptions={{
          //headerShown: false
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


