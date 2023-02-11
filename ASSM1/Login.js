import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        userName: '',
        passWord: '',
        isShow: true,
        brg: 'lightgreen',
        showtext: false,
    }
    render() {

        return (


            <View style={{ flex: 1 }}>
                <View style={{ flex: 4 }}>
                    <View style={{ flex: 3, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View style={{ marginTop: 50, marginLeft: -20, flexDirection: 'row', height: 50, justifyContent: 'center', alignItems: 'center', width: 100 }}>
                                <Image style={{ height: 30, width: 30 }} source={require('../images/a4.png')} />
                                <Text>ENVATO</Text>
                            </View>

                            <View style={{ marginTop: 50, marginLeft: 200, flexDirection: 'row', height: 50, justifyContent: 'center', alignItems: 'center', width: 100 }}>
                                <Image style={{ height: 30, width: 30 }} source={require('../images/a4.png')} />
                                <Text>ENVATO</Text>
                            </View>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center' , marginTop:20}}><Text style={{ fontSize: 50, fontWeight: 'bold' }}>WELCOME</Text></View>

                        {/* gạch kẻ dưới */}
                        <Text style={{ borderBottomColor: 'black', borderRadius: 1, borderWidth: 1, height: 2, width: 90, marginTop: 30 }}></Text>
                    </View>

                    <View style={{ flex: 4, justifyContent: 'center', flexDirection: 'row', marginTop: 130 }}>

                        <View style={{ marginTop: 50, flexDirection: 'row', marginLeft: -20, height: 50, justifyContent: 'center', alignItems: 'center', width: 100 }}>
                            <Image style={{ height: 30, width: 30 }} source={require('../images/a4.png')} />
                            <Text>ENVATO</Text>
                        </View>

                        <View style={{ alignItems: 'center', marginTop: 10, marginLeft: 50 }}>
                            <TouchableOpacity style={{ alignItems: 'center', width: 120, height: 120, borderRadius: 75, backgroundColor: 'lightblue', padding: 25 }}><Image style={{ width: 50, height: 40 }} source={require('../images/a6.png')} />
                                <Text>Your Photo</Text></TouchableOpacity>

                        </View>

                        <View style={{ marginTop: 50, marginLeft: 30, flexDirection: 'row', height: 50, justifyContent: 'center', alignItems: 'center', width: 100 }}>
                            <Image style={{ height: 30, width: 30 }} source={require('../images/a4.png')} />
                            <Text>ENVATO</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 6, marginTop:40 }}>
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
                            alignItems: 'center',
                            marginBottom: 50
                        }}>

                        {/* E-mail */}
                        <TextInput
                            placeholder='E-mail address'
                            style={{
                                fontSize: 30
                            }}
                        ></TextInput>
                        <Image style={{ width: 50, height: 50 }} source={require('../images/email.png')} />

                    </View>
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

                        {/* password */}
                        <TextInput
                            placeholder='Enter your Password'
                            
                            
                            style={{
                                fontSize: 30
                            }}
                            secureTextEntry={this.state.isShow}
                            onChangeText={(pass) => {
                                this.setState({ passWord: pass })
                                if (this.state.passWord.length >= 4) {
                                    this.setState({ brg: "green" })
                                } else {
                                    this.setState({ brg: "lightgreen" })
                                }

                            }}
                        ></TextInput>

                        {/* mắt mở hoặc đóng */}
                        <TouchableOpacity onPress={() => {
                            this.setState({ isShow: !this.state.isShow })
                        }}>
                            {
                                (this.state.isShow) ? <Image
                                    style={{
                                        height: 20,
                                        width: 45,
                                        marginTop: 10
                                    }}
                                    source={require('../images/a3.png')}  ></Image> : <Image
                                        style={{
                                            height: 20,
                                            width: 45,
                                            marginTop: 10
                                        }}
                                        source={require('../images/a1.png')}  ></Image>
                            }

                        </TouchableOpacity>
                    </View>

                    {/* sing in */}
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{
                                height: 70,
                                marginLeft: 30,
                                marginRight: 30,
                                justifyContent: 'center',
                                backgroundColor: this.state.brg,
                                alignItems: 'center',
                                marginTop: 30,
                                width: 500
                            }}
                            onPress={() => {
                                if (this.state.passWord == "") {
                                    // Alert.alert("dung roi")
                                     Alert.alert("sai roi kia")
                                } else {
                                   const {navigation} =this.props
                                    navigation.navigate("Indexa")
                                }
                            }}

                        ><Text
                            style={{
                                color: 'white',
                                fontSize: 30,
                                fontWeight: 'bold'
                            }}>Sing in</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row',marginTop:50 }}>

                        <View style={{ marginTop: 50, marginLeft: 100, flexDirection: 'row', height: 50, justifyContent: 'center', alignItems: 'center', width: 100 }}>
                            <Image style={{ height: 30, width: 30 }} source={require('../images/a4.png')} />
                            <Text>ENVATO</Text>
                        </View>

                        <View style={{ marginTop: 50, marginLeft: 190, flexDirection: 'row', height: 50, justifyContent: 'center', alignItems: 'center', width: 100 }}>
                            <Image style={{ height: 30, width: 30 }} source={require('../images/a4.png')} />
                            <Text>ENVATO</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:75}}>
                        <Text style={{fontSize:25,marginRight:10}}>
                            Don't have an account?
                        </Text>
                        <Text style={{fontSize:25,color:'green'}}>
                            Sign up
                        </Text>
                    </View>

                </View>
            </View>
        )
    }
}


