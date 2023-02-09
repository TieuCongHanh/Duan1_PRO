import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const Show5 = () => {

 const navigation = useNavigation();
 
 const float = () =>{
  navigation.navigate('Flatlist')
 }
 const dialog = () =>{
  navigation.navigate('Dialog')
 }
 const json = () =>{
  navigation.navigate('JsonServer')
 }
 const dropdown = () =>{
  navigation.navigate('Dropdown')
 }
 const moda = () =>{
  navigation.navigate('Modal')
 }
  return (
    <View style={{flex:1,backgroundColor:'white', alignItems:'center'}}>
     <TouchableOpacity onPress={float} style={{marginTop:50, alignItems:'center',justifyContent:'center',width:400,height:60,borderRadius:10,borderWidth:1}}><Text style={{fontSize:40}}>Floatlist</Text></TouchableOpacity>
     <TouchableOpacity onPress={dialog} style={{marginTop:50, alignItems:'center',justifyContent:'center',width:400,height:60,borderRadius:10,borderWidth:1}}><Text style={{fontSize:40}}>Dialog</Text></TouchableOpacity>
     <TouchableOpacity onPress={json} style={{marginTop:50, alignItems:'center',justifyContent:'center',width:400,height:60,borderRadius:10,borderWidth:1}}><Text style={{fontSize:40}}>JsonServer</Text></TouchableOpacity>
     <TouchableOpacity onPress={dropdown} style={{marginTop:50, alignItems:'center',justifyContent:'center',width:400,height:60,borderRadius:10,borderWidth:1}}><Text style={{fontSize:40}}>Dropdown</Text></TouchableOpacity>
     <TouchableOpacity onPress={moda} style={{marginTop:50, alignItems:'center',justifyContent:'center',width:400,height:60,borderRadius:10,borderWidth:1}}><Text style={{fontSize:40}}>Modal</Text></TouchableOpacity>
     </View>
  )
}

export default Show5