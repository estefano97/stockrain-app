import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
import MainPage from './Views/Main/MainPage';

export default function App() {

  return (
    <View style={styles.container}>
      <MainPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight
  },
});
