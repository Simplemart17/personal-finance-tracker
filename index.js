/**
 * @format
 */
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import App from './src/App';
import { name as appName } from './app.json';

const TrackerApp = () => (
  <SafeAreaProvider>
    <PaperProvider>
      <App />
    </PaperProvider>
  </SafeAreaProvider>
);

AppRegistry.registerComponent(appName, () => TrackerApp);
