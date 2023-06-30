import React from 'react';
import type { PropsWithChildren } from 'react';
import { Text, useColorScheme, StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-paper';

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
      <View style={styles.img}>
        <Avatar.Icon size={70} icon="cogs" color="red" style={styles.icon} />
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
  img: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: 'white',
  },
});

export default Section;
