import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MainColors from "../../constants/MainColors";
import LoginForm from "./LoginForm";

interface loginProps {
  changePage: (arg0: string) => void;
  setLogin: (arg0: boolean) => void;
}

const Login = (props: loginProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={{ resizeMode: "contain", width: "80%" }}
          source={require("../../assets/stockrain-logo.png")}
        />
      </View>
      <LoginForm setLogin={(value: boolean) => props.setLogin(value)}/>
      <View style={styles.registerContainer}>
        <Text style={{ fontSize: 16 }}>Si no tienes cuenta puedes</Text>
        <TouchableOpacity onPress={() => props.changePage("register")}>
          <Text
            style={{
              color: MainColors.primary,
              fontWeight: "bold",
              fontSize: 16,
            }}> Registrarte Aquí!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 650,
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: 300,
    paddingBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  registerContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 35,
  },
});

export default Login;
