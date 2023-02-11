import { Button, Text, TextInput, View } from "react-native"
import st from "./style";
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
        <View style={st.formAdd}>
            <Text>Update </Text>

            <TextInput placeholder="Tên SP"
                onChangeText={(txt) => { settenSP(txt) }} value={tenSP} />
            <TextInput placeholder="Tuoi"
                onChangeText={(txt) => { setTuoi(txt) }} value={Tuoi}
            />
           
            <Button title="Update" onPress={SaveProduct} />
        </View>
    )
    
}
export default UpdateProduct;