import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import MyInput from "../../components/MyInput";
import MainColors from "../../constants/MainColors";
import { Login } from "../../Apis/IAuth";
import { useState } from "react";
import { loginUser } from "../../Apis/AuthApi";

const LoginForm = () => {

  const [userInfo, setUserInfo] = useState<Login>({email: '', pass: ''});

  const handleLogin = () => {
    loginUser(userInfo);
  }
  
  return (
    <>
      <View style={styles.formContainer}>
        <MyInput
          type="email"
          iconSelect={faEnvelope}
          beforeText="Ingrese su email"
          value={userInfo.email}
          onChange={(value) => setUserInfo({...userInfo, email: value})}
        />
        <MyInput
          type="password"
          iconSelect={faLock}
          beforeText="Ingrese su contraseña"
          value={userInfo.pass}
          onChange={(value) => setUserInfo({...userInfo, pass: value})}
        />
      </View>
      <Text
        style={{
          width: "80%",
          textAlign: "right",
          marginTop: 10,
          color: MainColors.primary,
          fontWeight: "bold"
        }}
      >
        Olvido su contraseña?
      </Text>
      <TouchableOpacity onPress={handleLogin} style={styles.submitStyle}>
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
