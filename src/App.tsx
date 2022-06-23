import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { QueryClientProvider } from 'react-query';
import Navigation from './navigation/Navigation';
import { queryClient } from './services/api/api';
import theme from './theme/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { t } = useTranslation();

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(theme.colors.background);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar barStyle={'light-content'} />
        <Navigation />
      </SafeAreaProvider>
      <Toast />
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
