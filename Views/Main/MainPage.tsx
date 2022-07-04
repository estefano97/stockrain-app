import { Image, ScrollView, StyleSheet,  Text,  TouchableOpacity,  View } from 'react-native';
import MainColors from '../../constants/MainColors';
import Login from './Login';
const MainPage = () => {
  
  return (
    <ScrollView style={{width: '100%'}}>
        <View style={styles.imageContainer}>
            <Image
            style={{resizeMode: 'contain', width: '80%'}}
            source={require("../../assets/stockrain-logo.png")} />
        </View>
        <Login/>
        <View style={styles.registerContainer}>
          <Text style={{fontSize: 16}}>Si no tienes cuenta puedes</Text>
          <TouchableOpacity><Text style={{color: MainColors.primary, fontWeight: 'bold', fontSize: 16}}> Registrarte Aquí!</Text></TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
   imageContainer: {
    width: '100%',
    height: 300,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center'
   },
   registerContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});

export default MainPage;