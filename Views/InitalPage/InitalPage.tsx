import { View, Text, TouchableOpacity } from 'react-native'
import MainColors from '../../constants/MainColors';

interface InitalPageProps{
    setLogin: (value: boolean) => void;
}

const InitalPage = (props:InitalPageProps) => {
  return (
    <View>
      <Text>Holaaa, pagina de inicio</Text>
      <TouchableOpacity style={{backgroundColor: MainColors.primary, width: '50%', borderRadius: 5}} onPress={() => props.setLogin(true)}>
        <Text style={{color: MainColors.white, fontSize: 24, textAlign: 'center'}}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  )
}

export default InitalPage;