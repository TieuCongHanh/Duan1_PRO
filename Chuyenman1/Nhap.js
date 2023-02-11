import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'

export default class Nhap extends Component {
state ={
    ten: "",
    tuoi: "",
};
input = (tuoi, value) =>{
    this.setState({...this.state, [tuoi] : value});
};
save = () =>{
    Alert.alert('Infor', '' + JSON.stringify(this.state), [test('ok')])
};
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 50, fontWeight: 'bold' }}>Nhập thông tin</Text>
                <TextInput value={this.state.ten} onChange={this.input.bind(this,"ten")} placeholder='Nhập tên đi bạn, ơ kìa' style={{
                    width: 500, height: 60, borderRadius: 5, borderWidth: 1, marginTop: 50, fontSize: 30, paddingLeft: 20
                }}></TextInput>

                <TextInput value={this.state.tuoi} onChange={this.input.bind(this,"tuoi")} placeholder='Nhập tuổi đi bạn, ơ kìa' style={{
                    width: 500, height: 60, borderRadius: 5, borderWidth: 1, marginTop: 30, fontSize: 30, paddingLeft: 20
                }}></TextInput>

                {/* code phần nút bấm */}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={this.save} style={{
                        backgroundColor: 'lightblue',
                        borderWidth: 1,
                        width: 170,
                        height: 60,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 50
                    }}><Text style={{
                        fontSize: 30,
                        color: 'white',
                        fontWeight: 'bold'
                    }}>Save</Text></TouchableOpacity>
                    
                    <TouchableOpacity style={{
                        backgroundColor: 'lightblue',
                        borderWidth: 1,
                        width: 170,
                        height: 60,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 50,
                        marginLeft: 70
                    }}
                        onPress={() => {
                            const { navigation } = this.props
                            navigation.navigate("Show")
                        }}
                    ><Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>Show</Text></TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})