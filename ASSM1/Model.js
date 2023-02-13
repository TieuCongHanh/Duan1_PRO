import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Title } from "react-native-paper";

const ModalView = ({ children, onSubmit,title, cancelable, visible = false, onDismiss, onDelete }) => {
    return (
        <Modal
            transparent={true}
            visible={visible}
            onDismiss={onDismiss}
        >
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems:'center',
                backgroundColor: 'rgba(0,0,0,0.6)'
            }}>
                <View style={{
                    margin: 30,
                    backgroundColor: "white",
                    borderRadius: 25,
                   paddingTop:20,
                    width:500,
                    height:300,
                    alignItems:'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5
                }}>
                    <Title style={{
                        height:50,
                        fontSize:30
                    }}>
                        {title}</Title>

                    {children}

                    <View style={{ justifyContent: "space-around", alignItems: 'center', flexDirection: 'row', }}>
                        {
                            onDelete && (<TouchableOpacity style={{
                                borderRadius: 10,
                                padding: 10,
                                paddingHorizontal: 20,
                                marginTop: 20,
                                backgroundColor: '#333542',
                            }}
                                onPress={onDelete}>
                                <Text style={{
                                    color: "white",
                                    fontWeight: "bold",
                                    textAlign: "center"
                                }}>Xóa Trắng</Text>
                            </TouchableOpacity>)
                        }
                        {
                            cancelable &&
                            (<TouchableOpacity style={{
                                borderRadius: 10,
                                padding: 10,
                                paddingHorizontal: 20,
                                marginTop: 20,
                                marginLeft: 10,
                                backgroundColor: '#333542'
                            }}
                                onPress={onDismiss}
                            >
                                <Text style={{
                                    color: '#f44', color: "white",
                                    fontWeight: "bold",
                                    textAlign: "center"
                                }}>Trở Lại</Text>
                            </TouchableOpacity>)
                        }
{
                            onSubmit && (<TouchableOpacity style={{
                                borderRadius: 10,
                                padding: 10,
                                paddingHorizontal: 20,
                                marginTop: 20,
                                backgroundColor: '#f44',
                                marginLeft: 10
                            }}
                                onPress={onSubmit}>
                                <Text style={{
                                    color: "white",
                                    fontWeight: "bold",
                                    textAlign: "center"
                                }}>Update</Text>
                            </TouchableOpacity>)}
                    </View>
                </View>
            </View>
        </Modal>
    );
};


export default ModalView