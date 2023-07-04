/**
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import LottieSplashScreen from 'react-native-lottie-splash-screen';
import Section from './components/section';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    LottieSplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Section title="Development">The app is undergoing development</Section>
    </SafeAreaView>
  );
};

export default App;
