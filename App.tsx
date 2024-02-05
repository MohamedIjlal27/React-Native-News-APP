// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import GetNews from './Screens/GetNews';
import WebViewComponent from './Components/WebView';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trending" component={HomeScreen} />
        <Stack.Screen name='GetNews' component={GetNews} />
        <Stack.Screen name='WebView' component={WebViewComponent} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;