import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Indexa extends Component {
  render() {
    return (
      <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={() => {
          const {navigation} = this.props
          navigation.navigate("AddClass")
        }} style={{backgroundColor:'red',width:200,height:50,borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:100}}><Text style={{fontSize:30}}>Thêm lớp</Text></TouchableOpacity>
        <TouchableOpacity
        onPress={() => {
          const {navigation} = this.props
          navigation.navigate("ShowClass")
        }} 
         style={{backgroundColor:'red',width:200,height:70,borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:100}}><Text style={{fontSize:30}}>Xem danh sách lớp</Text></TouchableOpacity>
        <TouchableOpacity
        onPress={() => {
          const {navigation} = this.props
          navigation.navigate("DanhSachClass")
        }} style={{backgroundColor:'red',width:200,height:70,borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:100}}><Text style={{fontSize:30}}>Quản lý sinh viên</Text></TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({})