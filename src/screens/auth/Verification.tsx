import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../../assets/colors/Colors'
import { FONTFAMILY } from '../../../assets/fonts'

const Verification = () => {
  return (
    <View>
      <Text>Verification</Text>
    </View>
  )
}

export default Verification

const styles = StyleSheet.create({
    input: {
        height: 55,
        width: 55,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.HEX_LIGHT_GREY,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontFamily: FONTFAMILY.poppins_bold,
        textAlign: 'center',
        color: COLORS.BLACK,
    },
});