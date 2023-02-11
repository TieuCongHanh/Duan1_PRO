import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {  useNavigation } from '@react-navigation/native';
const Top1 = () => {
    const navigation = useNavigation();
    const aa =() =>{
          navigation.navigate("Top2")
    }
  return (
    <View style={{flex:1,alignItems:'center', marginTop:100}}>
    <TouchableOpacity onPress={aa}>
      <Text style={{fontSize:20, color:'red'}}>Sang man moi</Text></TouchableOpacity>
    </View>
  )
}

export default Top1