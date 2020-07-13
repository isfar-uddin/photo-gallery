import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryView from '../screens/galleryView';
import ImageDetails from '../screens/imageDetails';
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={()=>({
      headerShown: false
    })}>
      <Stack.Screen name="Gallery" component={GalleryView} />
      <Stack.Screen name="ImageDetails" component={ImageDetails} />
    </Stack.Navigator>
  );
}

export default StackNavigator;