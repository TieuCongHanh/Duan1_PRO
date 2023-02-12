import { Text, StyleSheet, View, TextInput, ScrollView, TouchableOpacity,FlatList,Image,ActivityIndicator } from 'react-native'
import React, { Component,useState } from 'react'

function DanhSachClass() {
  const [tenlop, settenlop] = useState('');
  const [tenSV, settenSV] = useState('');
  const [ngay, setngay] = useState('');


const [isLoading, setisLoading] = useState(true);
      const [dscl, setdsscl] = useState([]);

      // them sv
  const saveSV=()=>{
      // tạo obj
      let obSV = {
        tenClass: tenlop,
        datebd:ngay,
        namest:tenSV

      }
      // fetch:
      let url_api = "http://192.168.0.106:3000/danhsach";
      fetch(url_api, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify (obSV)
        })
        .then ((res)=>{
              if(res.status == 201)
                  alert('Thêm thành công');
        }).catch((err) =>{
          console.log(err);
        });

      }
  
      //viết hàm load cl
  
      const getList = async () => {
          let url_api = "http://192.168.0.106:3000/danhsach";
          try {
              const response = await fetch(
                  url_api
              );
              const json = await response.json();
              //đổ dữ liệu vào state
              setdsscl(json);
          } catch (error) {
              console.error(error);
          } finally {
              setisLoading(false);//trạng thái đã load xong
          }
      }
  
      const render = () => {
          // const xoaSp = () => {
          //     let url_api = "http://192.168.0.106:3000/danhsach/" + row.item.id;
                 
          //     fetch(url_api, {
          //         method: 'DELETE',
          //         headers: {
          //             Accept: 'application/json',
          //             'Content-Type': 'application/json',
          //         },
          //     })
          //         .then((res) => {
          //             if (res.status == 200){
          //                 alert('Xóa thành công');
          //                 getList();
          //             }
          //         }).catch((err) => {
          //             console.log(err);
          //         });
          // }
          // console.log(row);


          return (
              <View style={{borderWidth: 1, marginBottom: 20, backgroundColor: '#fff'}}>
                  {/* thông tin 1 */}
                     
                  <View style={{ width: 450, flexDirection:'row' , justifyContent:'center',alignItems:'center'}}>
                      <Text style={{ fontSize: 30 ,width:70, paddingLeft:10}}>{item.tenClass}</Text>
                          <Text style={{ fontSize: 30,width:120 }}> {item.namest}</Text>
                          <Text style={{ fontSize: 30,width:250 }}>{item.datebd}</Text>
                      </View>
      
    
                  </View>
                 
          )
      }
      //gọi hàm load dữ liệu
      // React.useEffect(() => {
      //     const unsubscribe = props.navigation.addListener('focus', () => {
      //         // do something
      //         getList();//gọi hàm load dữ liệu
      //     });
      //     return unsubscribe;
      // }, [props.navigation]);
  
    return (
      <View style={{ flex: 1,backgroundColor:'lightblue', alignItems:'center' }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 30, marginLeft: 20 }}>Lớp:</Text>
          <TouchableOpacity style={{ backgroundColor: 'red', fontSize: 30, marginRight: 20, width: 350, borderRadius: 5 }}><Text style={{ fontSize: 30, borderRadius: 5 }}>-           Alll               -</Text></TouchableOpacity>
        </View>

// Nhap ten sv
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <Text style={{ fontSize: 30, marginLeft: 20 }}>Tên Sinh Viên:</Text>
          <TextInput 
          value={tenSV}
          onChangeText={(txt) => {settenSV(txt)}}
           style={{ fontSize: 30, marginRight: 20, width: 350, marginLeft: 20, borderBottomWidth: 1 }} placeholder='Nhập vào tên sinh viên'></TextInput>
        </View>

// nhap ngay sinh
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <Text style={{ fontSize: 30, marginLeft: 20 }}>Ngày sinh:</Text>
          <TextInput 
          value={ngay}
          onChangeText={(txt) => {setngay(txt)}}
           style={{ fontSize: 30, marginRight: 20, width: 350, marginLeft: 20, borderBottomWidth: 1 }} placeholder='Nhập vào ngày sinh'></TextInput>
        </View>

        // chuc nang luu sinh vien
        <View style={{
          alignItems: 'center'
        }}>
          <TouchableOpacity onPress={saveSV} style={{ borderRadius: 5, borderWidth: 1, marginTop: 50, width: 300, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}>
          <Text style={{ fontSize: 25 }}>Thêm Sinh Viên</Text>
          </TouchableOpacity>
        </View>


        <Text style={{borderBottomWidth:1, marginTop:20}}></Text>



        <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
      <View style={{marginLeft:-50}}><Text style={{fontSize:20 , fontWeight:'bold'}}>STT</Text></View>
        <View style={{marginLeft:130,}}><Text style={{fontSize:20 , fontWeight:'bold'}}>Tên sinh viên</Text></View>
        <View style={{marginLeft:160}}><Text style={{fontSize:20 , fontWeight:'bold'}}>Năm sinh</Text></View>
        </View>

        {
          (isLoading) ? (
              <ActivityIndicator />
          ) : (
              <FlatList data={dscl}
                  keyExtractor={(item) => { return item.id }}
                  renderItem={render} />
          )
      }
        
      </View>
    )
  }


export default DanhSachClass;