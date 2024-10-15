// src/App.tsx
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './src/Redux/Store/store';
import Navigation from './src/Navigation/Navigation/index';

const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar barStyle="light-content" />
          <Navigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#00000000', // Transparent background
  },
});

export default App;
