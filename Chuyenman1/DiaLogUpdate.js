import { Button, Text, TextInput, View } from "react-native"
import { useState } from "react";
const UpdateProduct = (props) =>{
    const [tenSP, settenSP] = useState(props.route.params.item_sp.name);
    const [Tuoi, setTuoi] = useState(props.route.params.item_sp.old);
    const SaveProduct=()=>{
        // tạo obj
        let obSP = {
            name: tenSP,
            old: Tuoi,
           
        }
        let _id = props.route.params.item_sp.id;
        // fetch:
        let url_api = "http://10.24.4.91:3000/posts/" + _id;
        
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
    return(
        <View style={{flex:1,alignItems:'center'}}>

            <Text style={{fontSize:30 , marginTop:50}}>Update </Text>

            <TextInput style={{borderRadius:10,paddingLeft:20,width:400,borderWidth:1,height:60,fontSize:20,marginTop:50}} placeholder="Tên SP"
                onChangeText={(txt) => { settenSP(txt) }} value={tenSP} />
            <TextInput style={{borderRadius:10,paddingLeft:20,width:400,borderWidth:1,height:60,fontSize:20,marginTop:50,marginBottom:30}} placeholder="Tuoi"
                onChangeText={(txt) => { setTuoi(txt) }} value={Tuoi}
            />
           
            <Button title="Update" onPress={SaveProduct} />
        </View>
    )
    
}
export default UpdateProduct;