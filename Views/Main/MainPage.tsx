import { Image, StyleSheet,  Text,  View } from 'react-native';
import MainColors from '../../constants/MainColors';
import MainModal from './MainModal';

const MainPage = () => {
  
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
            style={{resizeMode: 'contain', width: '80%'}}
            source={require("../../assets/stockrain-logo.png")}
            />
        </View>
        <Text style={styles.registerText}>Si ya tienes cuenta, inicia sesión, si no, registrate!</Text>
        <MainModal/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
   },
   imageContainer: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center'
   },
   registerText: {
    height: '10%',
    width: '80%',
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: 16,
    color: MainColors.subTitle
   }
});

export default MainPage;