import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'

export default class LoginSreen extends Component {
  state = {
    userName: '',
    passWord: '',
    isShow: true,
    brg:'lightblue',
    showtext:false,
  }

  render() {
    return (
      <View 
      style={{ 
        flex: 1
         }}>
        <View 
        style={{
          flex: 1,
          backgroundColor: 'blue',
          justifyContent: 'center'
        }}>
          <Image 
          style={{
            height: 100,
            width: 130,
            marginLeft: 30,
            marginBottom: 20
          }} source={require('../images/tim.jpg')} ></Image>
          <Text 
          style={{
            color: 'white',
            fontSize: 40,
            fontWeight: 'bold',
            marginLeft: 70
          }}>Sing in</Text>
        </View>

        <View 
        style={{
          flex: 3,
          backgroundColor: 'white',
          borderRadius: 10
        }}>
          <Text 
          style={{
            fontWeight: 'bold',
            fontSize: 50,
            marginLeft: 30,
            marginTop: 30
          }}>
            Welcome Back
          </Text>
          <Text
            style={{
              marginLeft: 30,
              color: 'lightgray',
              marginBottom: 30
              , fontSize: 20
            }}>
            Hello there. Sing in to continue.
          </Text>
          <Text
            style={{
              marginLeft: 30,
              color: 'lightgray',
              fontSize: 20
            }}>
            Username or email
          </Text>

          <TextInput
            placeholder='Enter your Username or email'
            style={{
              marginRight: 30,
              borderWidth: 1,
              marginLeft: 30,
              borderRadius: 10,
              height: 60,
              padding: 10,
              fontSize: 30,
              marginBottom: 50
            }}
            onChangeText={(user) => { this.setState({ userName: user }) }}></TextInput>


          <Text
            style={{
              marginLeft: 30,
              color: 'lightgray',
              fontSize: 20
            }}>Password</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 30,
              fontSize: 30,
              marginRight: 30,
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              height: 60,
              marginBottom: 50
            }}>
            <TextInput
              placeholder='Enter your Password'
              style={{
                fontSize: 30
              }}
              secureTextEntry={this.state.isShow}
              onChangeText={(pass) => {   this.setState({passWord: pass})
                if(this.state.passWord.length >= 4 ){
                  this.setState({brg:"blue"})
                }else{
                  this.setState({brg:"lightblue"})
                }
             
                }}
              ></TextInput>

              <TouchableOpacity onPress={() => {
              this.setState({isShow: !this.state.isShow})
              }}>
              {
                (this.state.isShow) ?   <Image 
            style={{
               height: 20,
                width: 45,
                 marginTop: 10
                  }} 
                  source={require('../images/a3.png')}  ></Image> :<Image 
            style={{
               height: 20,
                width: 45,
                 marginTop: 10
                  }} 
                  source={require('../images/a1.png')}  ></Image> 
              }
            
                  </TouchableOpacity>
            
          </View>
          {
            (this.state.showtext) ? <Text
            style={{
              marginLeft: 30,
              color: 'blue',
              fontSize: 20,
              fontWeight: 'bold'
            }} >Forgot Password ?</Text>:null
          }
          
          

          <TouchableOpacity
            style={{
              height: 70,
              marginLeft: 30,
              marginRight: 30,
              borderRadius: 25,
              justifyContent: 'center',
              backgroundColor: this.state.brg,
              alignItems: 'center',
              marginTop: 30
            }}
            onPress={ () => {
              if (this.state.userName == "tieu cong hanh") {
                Alert.alert("dung roi")
              } else {
                Alert.alert("sai con me may roi kia")
              }
            }}
            
          ><Text
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold'
            }}>Sing in</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}>Dont't have a account?</Text>
            <Text
              style={{
                fontSize: 20,
                color: 'blue',
                fontWeight: 'bold'
              }}>Sing up</Text></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({})