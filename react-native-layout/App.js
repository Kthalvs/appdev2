import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Todo from './screens/Todo';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');

  const navigation = {
    navigate: (screen) => setCurrentScreen(screen),
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'Login' && (<Login navigation={navigation} />)}
      {currentScreen === 'Signup' && (<Signup navigation={navigation} />)}
      {currentScreen === 'Todo' && (<Todo navigation={navigation} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});