import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import MainColors from "../../constants/MainColors";
import RegisterForm from "./RegisterForm";

interface registerProps {
  changePage: (arg0: string) => void;
}

const Register = (props: registerProps) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={() => props.changePage("login")} style={{ marginLeft: 15}}>
        <FontAwesomeIcon style={{ color: MainColors.primary}} size={30} icon={faArrowLeftLong}  />
        </TouchableOpacity>
      </View>
      <RegisterForm/>
      <View style={styles.termsContainer}>
        <Text style={{ color: MainColors.gray, fontSize: 14, textAlign: 'center', marginTop: 20 }}>Al crear una cuenta aceptas nuestros <Text style={{fontWeight: 'bold', color: MainColors.primary}}>terminos y condiciones.</Text></Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  arrowContainer: {
    width: '100%',
    marginTop: 10,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  termsContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Register;
