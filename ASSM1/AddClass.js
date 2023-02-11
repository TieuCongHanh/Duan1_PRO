import { Text, StyleSheet, View,TextInput,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class AddClass extends Component {
  render() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center' }}>
      <Text style={{fontSize:50,marginTop:-200,marginBottom:100}}>Thêm sinh viên </Text>
       <TextInput placeholder='nhập vào mã lớp ' style={{height:50,width:500,borderWidth:1,borderRadius:10,paddingLeft:20,fontSize:30}}></TextInput>
       <TextInput placeholder='nhập vào tên lớp ' style={{height:50,width:500,borderWidth:1,borderRadius:10,paddingLeft:20,fontSize:30,marginTop:50}}></TextInput>
<View style={{flexDirection:'row',marginTop:50}}>
<TouchableOpacity style={{marginRight:20,borderRadius:20,borderWidth:1,height:60,width:150,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>xóa trắng</Text></TouchableOpacity>
<TouchableOpacity style={{marginRight:20,borderRadius:20,borderWidth:1,height:60,width:150,backgroundColor:'lightblue',alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>Lưu lớp</Text></TouchableOpacity>

</View>

      </View>
    )
  }
}

const styles = StyleSheet.create({})