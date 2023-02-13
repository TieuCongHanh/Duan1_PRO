import { Text, View, TouchableOpacity, FlatList, Alert, ToastAndroid, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ModalView from './Model';

export default function DanhSachClass() {
  const [tenLop, setTenLop] = useState(null);
  const [data, setData] = useState([]);
  const [dataFilter, setFilterData] = useState([]);
  const [dataClass, setDataClass] = useState([]);
  const [tenSV, setTenSV] = useState('');
  const [ngaySinh, setNgaySinh] = useState('');
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState('')

  React.useEffect(() => {
    getQLSV();
    getClass();
  }, [])

  const url_QLSV = "http://192.168.0.106:3000/danhsach/"
  const url_Class = "http://192.168.0.106:3000/class/"

  const getQLSV = async () => {
    await fetch(url_QLSV)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setFilterData(res)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const getClass = async () => {
    await fetch(url_Class)
      .then((res) => res.json())
      .then((res) => {
        setDataClass(res);
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const addSinhVien = (tenLop, tenSV, ngaySinh) => {
    fetch(url_QLSV, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "tenClass": tenLop,
        "namest": tenSV,
        "datebd": ngaySinh
      })
    })
      .then((res) => {
        if (res.status == 201) {
          getQLSV()
        }
      })
      .catch(e => {
        console.log(e)
      })
  }

  const deleteSinhVien = (id) => {
    fetch(url_QLSV + id, {
      method: "DELETE",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((res) => {
        if (res.status == 200) {
          ToastAndroid.show('Đã Xóa!', ToastAndroid.SHORT);
          getQLSV();
        }
      })
      .catch((ex) => {
        console.log(ex);
      })
  }

  const edit = (id, tenLop, tenSV, ngaySinh) => {
    setVisible(true)
    setId(id)
    setTenLop(tenLop)
    setTenSV(tenSV)
    setNgaySinh(ngaySinh)
  }
  const editStudent = (id, tenLop, tenSV, ngaySinh) => {
    fetch(url_QLSV + id, {
      method: "PUT",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "tenClass": tenLop,
        "namest": tenSV,
        "datebd": ngaySinh
      })
    }).then((res) => {
      if (res.status == 200) {
        ToastAndroid.show('Sửa Thành Công!', ToastAndroid.SHORT);
        getClass();
        getQLSV();
      }
    })
      .catch((ex) => {
        console.log(ex);
      })
  }


  function Item({ name, date }) {
    return (
      <View style={{
        alignItems: 'center',
        height: 100,
        backgroundColor: '#E6E6FA',
        padding: 10,
        marginVertical: 3,
        marginHorizontal: 5,
        flexDirection: 'row',
        borderRadius: 10,
        marginTop:20
      }}>

        <View style={{
         
          margin: 5,
          marginLeft: 10
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 3
          }}>
            <Text style={{
              fontSize: 20,
              width:150,
              color: 'black',
            }}>
              Tên Sinh Viên:  </Text>
            <Text style={{
              fontSize: 33,
              color: '#38044B',

            }}>
              {name}</Text>
          </View>

          <View style={{
            alignItems: 'center',
            flexDirection: 'row'
          }}>
            <Text style={{
              fontSize: 20,
              width:150,
              color: 'black',
            }}>
              Ngày Sinh:  </Text>
            <Text style={{
              fontSize: 33,
              color: '#38044B',
            }}>
              {date}</Text>


          </View>
        </View>
      </View>
    );
  }


  return (
    <View style={{
      backgroundColor: '#333542',
      flex: 1
    }}>

      <View style={{
        borderRadius: 10,
        borderWidth: 1,
        marginLeft: 10,
        paddingLeft:10,
        marginRight: 10,
        marginBottom: 1,
        marginTop: 10,
        backgroundColor:'lightblue'
        , justifyContent:'center'
      }}>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
         
          marginRight: 20,
          justifyContent:'center'
          

        }}>
          <Text style={{
            paddingTop: 10,
            color: '#999999',
            fontWeight:'bold',
            fontSize:30,
            width:200
          }}>
            Lớp:
          </Text>

          <Dropdown style={{
            width: 300,
            height:45,
            backgroundColor:'#AF4A92',
            borderRadius:10,
            paddingLeft:20,
            
          }}
            data={dataClass}
            labelField="tenClass" // hien thị
            valueField='tenClass' // khóa chính
            placeholder="Chọn Lớp"
            onChange={item => {
              setTenLop(item.tenClass);
            }}
            value={tenLop}
            onChangeText={text => {
              setTenLop(text)
            }}
            renderItem={item =>
              <View style={{
                padding: 17,
                borderRadius:1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#3d3f4c',
              }}>
                <Text style={{
                  color: 'white',
                  flex: 1,
                  fontSize: 30,
                }}>
                  {item.tenClass}</Text>
                {item.tenClass === tenLop && (
                  <AntDesign
                    style={{
                      marginRight: 5,
                    }}
                    color="white"
                    name="Safety"
                    size={20}
                  />
                )}
              </View>
            }
          />
        </View>
        <View style={{
          flexDirection: 'row',
          marginLeft: 20,
          marginRight: 20,
        alignItems:'center',
          marginTop: 10
        }}>
          <Text style={{
            paddingTop: 10,
            color: '#999999',
            fontWeight:'bold',
            fontSize:30,
            width:200
          }}>
            Tên Sinh Viên:
          </Text>
          <TextInput style={{
            borderBottomWidth: 1,
            width: 300,
            height:45,
            fontSize:30,
            borderRadius:10,
            paddingLeft:20,
            color:'black'
          }}
            value={tenSV}
            onChangeText={(text) => setTenSV(text)}
            mode="outlined"
          >

          </TextInput>
        </View>
        <View style={{
          flexDirection: 'row',
          marginLeft: 20,
          marginRight: 20,
       
          marginTop: 10
        }}>
          <Text style={{
            paddingTop: 10,
            color: '#999999',
            fontWeight:'bold',
            fontSize:30,
            width:200
          }}>
            Ngày Sinh:
          </Text>
          <TextInput style={{
            borderBottomWidth: 1,
            width: 300,
            height:45,
            fontSize:30,
            borderRadius:10,
            paddingLeft:20,
            color:'black'
          }}
            value={ngaySinh}
            onChangeText={(text) => setNgaySinh(text)}
            mode="outlined"
          >

          </TextInput>
        </View>

        <View style={{
          alignItems: 'center'
        }}>
          <TouchableOpacity style={{
            height: 50,
            justifyContent: 'center',
            width: 200,
            backgroundColor: '#3d3f4c',
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 20,
            marginBottom: 10
          }}
            onPress={() => {
              if (tenLop == null) {
                Alert.alert("Lỗi!", "Vui lòng Chọn Lớp")
              } else if (tenSV.length <= 0 || ngaySinh.length <= 0) {
                Alert.alert("Lỗi!", "Vui lòng nhập đầy đủ thông tin")
              } else {
                addSinhVien(tenLop, tenSV, ngaySinh)
                setTenSV('')
                setNgaySinh('')
              }
            }
            }
          >
            <Text style={{
              fontWeight: 'bold',
              fontSize: 17,
              color: 'white'
            }}>
              Thêm Sinh Viên
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 1,
        backgroundColor:'green',
        marginLeft: 10,
        marginRight: 10,
      }}>

        <ModalView
          title={"Update"}
          visible={visible}
        
          onDismiss={() =>
            setVisible(false)
          }
          onSubmit={() => {
            if (tenSV && tenLop && ngaySinh) {
              editStudent(id, tenLop, tenSV, ngaySinh)
              setVisible(false)
            } else {
              Alert.alert("Lỗi!", "Không được để trống.")
            }
          }
          }
          onDelete={() => {
            setNgaySinh("")
            setTenSV("")
            setTenLop("")
          }}

          cancelable
        >
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 3
          }}>
            <Text style={{
              fontSize: 22,
              color: 'black',
              width:200
            }}>
              Lớp :  </Text>


            <Dropdown style={{
              width: 200,
              backgroundColor:'#D2A6C7',
              borderRadius:15,
              paddingLeft:10,
              color: 'white',
            }}
              data={dataClass}
              labelField="tenClass"
              valueField='tenClass'
              placeholder="Chọn Lớp"
              onChange={item => {
                setTenLop(item.tenClass);
              }}
              value={tenLop}
              onChangeText={(text) => setTenLop(text)}

              renderItem={item =>
                <View style={{
                  padding: 17,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#3d3f4c',
                }}>
                  <Text style={{
                    color: 'white',
                    flex: 1,
                    fontSize: 16,
                  }}>
                    {item.tenClass}</Text>

                  {item.tenClass === tenLop && (
                    <AntDesign
                      style={{
                        marginRight: 5,
                      }}
                      color="white"
                      name="Safety"
                      size={20}
                    />
                  )}
                </View>
              }
            />
          </View>
          <View style={{
            flexDirection: 'row',
            marginTop:20,
            alignItems: 'center',
            marginBottom: 3
          }}>
            <Text style={{
              fontSize: 22,
              color: 'black',
              width:200
            }}>
              Tên Sinh Viên:  </Text>
            <TextInput style={{
              width: 200,
             fontSize:20,
            
              borderBottomWidth:1,
              paddingLeft:10,
              color: 'black',
            }}
              label="Tên Sinh Viên"
              value={tenSV}
              onChangeText={(text) => setTenSV(text)}
              mode="outlined"
            />
          </View>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 3,
            marginTop:20
          }}>
            <Text style={{
                fontSize: 22,
                color: 'black',
                width:200
            }}>
              Ngày Sinh:  </Text>
            <TextInput style={{
              width: 200,
              fontSize:20,
             
               borderBottomWidth:1,
               paddingLeft:10,
               color: 'black',
            }}
              label="Ngày Sinh"
              value={ngaySinh}
              onChangeText={(text) => setNgaySinh(text)}
              mode="outlined"
            />
          </View>

        </ModalView>

        <FlatList
          data={data}
          renderItem={({ item }) =>
            <TouchableOpacity onLongPress={() => {
              Alert.alert('Cảnh Báo !', 'Bạn muốn xóa mục này.', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'OK', onPress: () => {
                    deleteSinhVien(item.id);
                  }
                },
              ]);
            }}
              onPress={() => {
                edit(item.id, item.tenClass, item.namest, item.datebd)
              }}
            >
              <Item name={item.namest} date={item.datebd} />

            </TouchableOpacity>}
          keyExtractor={(item) => item.id}
        />

      </View>

    </View>
  )
}