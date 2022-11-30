import {View, Text, Button, Image} from  "react-native";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState } from "react";

export default function Home() { 
  const [users, setUsers] = useState([])
    const GetData = async ()=>{
      const db = getFirestore() 

      const querySnapshot = await getDocs(collection(db, "users"));
      const dbusers = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        dbusers.push({
          ...doc.data(),
          id:doc.id
        })
      });
      setUsers([
        ...dbusers
      ])
    }
    return(
        <View>
          <Button title="get data" onPress={()=>GetData()}></Button>
          {users.map(o=><View>
          <Image source={{uri:o.avatar}} style={{width:100,height:100}}></Image>
          <Text>{o.id} - {o.fullname}</Text>
          </View>)
          
          }
        </View>
    )};