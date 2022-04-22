import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import NextToGoScreen from './src/screens/NextToGoScreen';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <NextToGoScreen />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
