import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import MyInput from "../../components/MyInput";
import MainColors from "../../constants/MainColors";

const LoginForm = () => {
  return (
    <>
      <View style={styles.formContainer}>
        <MyInput
          type="email"
          iconSelect={faEnvelope}
          beforeText="Ingrese su email"
        />
        <MyInput
          type="password"
          iconSelect={faLock}
          beforeText="Ingrese su contraseña"
        />
      </View>
      <Text
        style={{
          width: "80%",
          textAlign: "right",
          marginTop: 10,
          color: MainColors.primary,
          fontWeight: "bold",
        }}
      >
        Olvido su contraseña?
      </Text>
      <TouchableOpacity style={styles.submitStyle}>
        <Text
          style={{ color: MainColors.white, textAlign: "center", fontSize: 16 }}
        >
          LOGIN
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: "80%",
    height: 150,
    alignItems: "center",
    justifyContent: "space-between",
  },
  submitStyle: {
    backgroundColor: MainColors.primary,
    width: "80%",
    paddingVertical: 15,
    marginTop: 40,
    borderRadius: 7,
  }
});

export default LoginForm;
