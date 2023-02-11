import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native'
import React from 'react'
// import LinearGradient from '@react-native-linear-gradient';

const DiaLogDelete = ({ visible, onHide }) => {
const Delete =()=>{
  Alert.alert('da co cais qq gif dau')
}

  return (
    <Modal visible={visible} transparent={true}>
      <View style={{
        flex: 1,
        backgroundColor: 'rgba(00,00,00,.5)',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          backgroundColor: '#CC3366',
          height: 350,
          width: 550,
          alignItems: 'center'
        }}>
        <Text style={{
          fontSize: 35,
          fontWeight: 'bold',
          marginTop: 50,
          color: 'white'
        }}>Bạn có muốn xóa không?</Text>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 480,
            marginTop: 130
          }}>

            <TouchableOpacity onPress={Delete} style={{
              height: 60,
              width: 200,
              borderWidth: 1,
              backgroundColor: '#3366CC',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text style={{
              fontSize: 30,
              color: 'white'
            }}>OK</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onHide} style={{
              height: 60,
              width: 200,
              borderWidth: 1,
              backgroundColor: '#3366CC',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}> 
            <Text style={{
              fontSize: 30,
              color: 'white'
            }}>Cancle</Text>
            </TouchableOpacity>


          </View>
        </View>
      </View>
    </Modal>
  )
}

export default DiaLogDelete