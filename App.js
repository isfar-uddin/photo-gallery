import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/store';
import { enableScreens } from 'react-native-screens';
import StackNavigator from './src/routes/stacknavigator';

enableScreens();


function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <StackNavigator/>
      </NavigationContainer>
    </Provider>
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
