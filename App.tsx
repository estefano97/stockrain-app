import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
import MainPage from './Views/Main/MainPage';
import { useState } from 'react';
import InitalPage from './Views/InitalPage/InitalPage';

export default function App() {

  const [showLoginPage, setShowLoginPage] = useState(true);

  return (
    <View style={styles.container}>
      {showLoginPage
      ? <MainPage setLogin={(value: boolean) => setShowLoginPage(value)}/>
      : <InitalPage setLogin={setShowLoginPage} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight
  },
});
