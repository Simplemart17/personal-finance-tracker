import React from 'react';
import type { PropsWithChildren } from 'react';
import { Text, useColorScheme, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Section = ({ children, title }: SectionProps): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
      <View style={styles.animatedImgWrapper}>
        <LottieView
          source={require('../assets/construction.json')}
          autoPlay
          loop
          style={styles.animatedImg}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionDescription: {
    marginVertical: 15,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  animatedImgWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  animatedImg: {
    width: 200,
  },
});

export default Section;
