import { faEnvelope, faLock, faMobileAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MyInput from '../../components/MyInput';
import MainColors from '../../constants/MainColors';

const RegisterForm = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 36, fontWeight: 'bold', color: MainColors.primary}}>Crear Una Cuenta</Text>
        <Text style={{color: MainColors.gray}}>Llena el formulario para poder registrarte</Text>
      </View>
      <View style={styles.formContainer}>
        <MyInput
          type="text"
          iconSelect={faUser}
          beforeText="Ingrese su nombre de usuario"
        />
        <MyInput
          type="email"
          iconSelect={faEnvelope}
          beforeText="Ingrese su email"
        />
        <MyInput
          type="text"
          iconSelect={faMobileAlt}
          beforeText="Ingrese su teléfono"
        />
        <MyInput
          type="password"
          iconSelect={faLock}
          beforeText="Ingrese su contraseña"
        />
        <MyInput
          type="password"
          iconSelect={faLock}
          beforeText="Confirme su contraseña"
        />
      </View>
      <TouchableOpacity style={styles.submitStyle}>
        <Text
          style={{ color: MainColors.white, textAlign: "center", fontSize: 16 }}
        >
          CREAR CUENTA
        </Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({ 
  titleContainer: {
    paddingTop: 10,
    paddingBottom: 40,
    alignItems: 'center'
  },
  submitStyle: {
    backgroundColor: MainColors.primary,
    width: "80%",
    paddingVertical: 15,
    marginTop: 30,
    borderRadius: 7
  },
  formContainer: {
    width: "80%",
    height: 350,
    alignItems: "center",
    justifyContent: "space-between"
  }
})

export default RegisterForm;