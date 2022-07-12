import { View, Text, StyleSheet, TextInput } from 'react-native'
import MainColors from '../constants/MainColors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface propsMyInput {
  beforeText: string | undefined,
  iconSelect: IconProp | undefined,
  type: string,
  value: string,
  onChange: (value: string) => void
}

const  MyInput = (props: propsMyInput) => {
  return (
      <View style={styles.inputContainer}>
        {props.iconSelect 
        ? <FontAwesomeIcon size={24} color={MainColors.secondary} icon={props.iconSelect} /> : null}
        {props.type === "password"
        ? <TextInput onChangeText={props.onChange} secureTextEntry={true} placeholder={props.beforeText} style={styles.inputStyle} />
        : <TextInput onChangeText={props.onChange} placeholder={props.beforeText} style={styles.inputStyle} />}
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        width: '100%',
        borderColor: MainColors.gray,
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    inputStyle: {
        width: '85%',
        fontSize: 16,
        marginLeft: 15
    }
})

export default MyInput