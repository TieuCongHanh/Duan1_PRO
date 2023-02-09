import React, { useState } from "react";
import { Button, StyleSheet, View,Text } from "react-native";
import Dialog from "react-native-dialog";

export default function Ialog() {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    // delete khi user click 
    
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Show dialog" onPress={showDialog} />

      <Dialog.Container visible={visible}>
        <Dialog.Title style={{width:450,fontSize:30}}>Account delete</Dialog.Title>
        <Dialog.Description style={{fontSize:20}}>
          Do you want to delete this account?
        </Dialog.Description>
        <Dialog.Button style={{fontSize:20}} label="Cancel" onPress={handleCancel} />
        <Dialog.Button style={{fontSize:20}} label="Delete" onPress={handleDelete} />
      </Dialog.Container>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});