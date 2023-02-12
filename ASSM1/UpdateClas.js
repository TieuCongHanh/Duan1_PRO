import { Button, Text, TextInput, View ,TouchableOpacity} from "react-native"
import { useState } from "react";
const UpdateClas = (props) =>{
    const [malop, setmalop] = useState(props.route.params.item_sp.maClass);
    const [tenlop, settenlop] = useState(props.route.params.item_sp.tenClass);
    const UpdateLop=()=>{
        // tạo obj
        let obSP = {
            maClass: malop,
            tenClass: tenlop,
        }
        let _id = props.route.params.item_sp.id;
        // fetch:
        let url_api = "http://192.168.0.106:3000/class/" + _id;
        
        fetch(url_api, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify (obSP)
          })
          .then ((res)=>{
                if(res.status == 200)
                    alert('Sửa thành công');

          }).catch((err) =>{
            console.log(err);
          });
        }
        const reload =() =>{
            setmalop('' )
            settenlop('')
        }
    return(
        <View style={{flex:1,alignItems:'center', backgroundColor:'lightblue'}}>

            <Text style={{fontSize:40 , marginTop:200, fontWeight:'bold', color:'#FF69B4'}}>Update </Text>

            <TextInput style={{backgroundColor:'white',borderRadius:30,paddingLeft:20,width:500,borderWidth:1,height:70,fontSize:35,marginTop:50}} placeholder="ma lop"
                onChangeText={(txt) => { setmalop(txt) }} value={malop} />
            <TextInput style={{backgroundColor:'white',borderRadius:30,paddingLeft:20,width:500,borderWidth:1,height:70,fontSize:34,marginTop:50,marginBottom:50}} placeholder="ten lop"
                onChangeText={(txt) => { settenlop(txt) }} value={tenlop}
            />
           
            <TouchableOpacity onPress={UpdateLop} style={{borderRadius:50,backgroundColor:'#D8BFD8',width:160,height:60,borderWidth:1,alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:30,color:'white'}}>Update</Text></TouchableOpacity>      
            </View>
    )
    
}
export default UpdateClas;