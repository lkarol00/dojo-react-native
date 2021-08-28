import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HelloWorldScreen } from './src/screens/helloWorld';
import { BasicCounterScreen } from './src/screens/basicCounter';

export default function App() {
  return (
        // <HelloWorldScreen></HelloWorldScreen>
        <BasicCounterScreen></BasicCounterScreen>
  );
}
