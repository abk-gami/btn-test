import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LottieView from 'lottie-react-native'
import React, { useRef } from 'react'

export default function Oya() {
  return (
    <View style={styles.container}>
      <Text>oya</Text>
      <TouchableOpacity>
      <LottieView style={{flex:1, backgroundColor: 'white'}} ref={ref} source={json} loop={false} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})