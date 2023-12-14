import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const AppPro = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello World
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  whiteText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  darkText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default AppPro;
