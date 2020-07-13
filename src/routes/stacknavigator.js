import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryView from '../screens/galleryView';
import NextScreen from '../screens/imageDetails';
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Gallery" component={GalleryView} />
      <Stack.Screen name="Details" component={NextScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;