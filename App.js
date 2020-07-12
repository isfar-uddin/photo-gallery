import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import GalleryScreen from './src/components/galleryView';

enableScreens();
const Stack = createNativeStackNavigator();


function HomeScreen({navigation}) {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Button title="Next Screen" onPress={() => navigation.navigate('Next')} />
    </View>
  );
}

function NextScreen({navigation}) {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function App() {
  return (
    <View style={styles.container}>
      <GalleryScreen/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
