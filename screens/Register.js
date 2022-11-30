import {View, Text, Button, Image} from  "react-native";
import { collection, getDocs, getFirestore, addDoc, setDoc, Firestore } from "firebase/firestore";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function Register({ navigation }) { 
  const [fn, setFN] = useState("")
  const [age, setAge] = useState("")
  const [ava, setAva] = useState("")
    
  //add user
  const AddUser = async () =>{
    const db = getFirestore()
    const docRef = await addDoc(collection(db, "users"), {
        fullname: fn,
        age: age,
        avatar: ava
      });
      console.log("Document written with ID: ", docRef.id);

  }
  
    return(
        <View>
            <TextInput placeholder="fullname" onChangeText={(txt)=>setFN(txt)}/>
            <TextInput placeholder="age" onChangeText={(txt)=>setAge(txt)}/>
            <TextInput placeholder="avatar" onChangeText={(txt)=>setAva(txt)}/>
            <Button title="add user" onPress={()=>AddUser()}></Button>
        </View>
    )};