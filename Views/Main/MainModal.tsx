import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import MainColors from "../../constants/MainColors";

const MainModal = () => {
  
  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <TouchableHighlight style={styles.loginButton}>
          <Text style={{ fontSize: 25 }}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.loginButton}>
          <Text style={{ fontSize: 25 }}>Register</Text>
        </TouchableHighlight>
      <Text style={{color: MainColors.white, textAlign: 'center', fontStyle: 'italic', width: '80%'}}>Si tienes problemas para inciar sesión, puedes comunicarte con nostros</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "50%",
    backgroundColor: MainColors.primary,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  loginButton: {
    width: 250,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
  }
});

export default MainModal;
