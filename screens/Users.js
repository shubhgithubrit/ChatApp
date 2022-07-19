// import React from 'react'
// import { Text, View ,Button, SafeAreaView} from 'react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { TextInput } from 'react-native-gesture-handler';

// export default function User(){
//     const[text,setText]=React.useState('');

// //   chat=()=>async {
// //     //chat function
// //         let getChatDataFromLocalStorage = JSON.parse(AsyncStorage.getItem("chatlist")),//get item from local storage
// //     let usersChats = getChatDataFromLocalStorage ? getChatDataFromLocalStorage : [],
    
    
// //     let logedInUser = JSON.parse(AsyncStorage.getItem('currentUser'));//get the current user information form CurrentUser local storage
    
// //         debugger;
// //         let userMessage = document.getElementById("usermessage").value;//users input box
// //         let send = document.getElementById("submitmessage").value;//send button
    
// //         let today = new Date();
// //         let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
// //         let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// //         let dateTime = date + ' ' + time;
// //         if (userMessage == "") {
// //             alert("Empty message could not send");
// //             return false;
// //         }
// //         var dataObj1 = {
// //             id: Number(new Date()),
// //             date: dateTime,
// //             usermessage: userMessage,
// //             name: logedInUser.name,
    
// //         }
    
// //         usersChats.push(dataObj1);
// //         AsyncStorage.setItem("chatlist", JSON.stringify(usersChats));
    
// //         return true;
    
// //     }
    
//     const saveName=async()=>{
//         try{

//             AsyncStorage.setItem('user',text);
//         }catch(e)
//         {
//             console.log(e)
//         }
//     };
//     const getName=async()=>{
//         try{

//            const name=await AsyncStorage.getItem('user');
//            setText(name);
//         }catch(e)
//         {
//             console.log(e)
//         }  
//     };
//     React.useEffect(()=>{
//         getName();
//     },[])
//     return(
//         <SafeAreaView>
//             <View style={{paddingTop:100,paddingHorizontal:20}}>
//                 <View style={{
//                     height:50,
//                     borderColor:'blue',
//                     borderWidth:1,
//                     justifyContent:'center',
                
//                 }}>
//                      <Text
//                         style={{

//                             textAlign:'center',
//                             fontSize:20,
//                             marginVertical:20,
//                             fontWeight:'bold'
//                         }}>
//                             Name:{text}
//                         </Text>
                       
//                     <TextInput
//                     placeholder='ENter text'
//                     onChangeText={value=>setText(value)}>

//                     </TextInput>
//                     <View>
//                         <Button title='Save' onPress={saveName}/>

//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     )

// }

import React from 'react'
import { Text, View, StyleSheet } from "react-native"
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default function Loginscreen({navigation}) {
    return <View style={styles.view}>
        <Text style={{fontSize: 34, fontWeight: "800", marginBottom: 20}}>Well-done</Text>
        <Btn title="Log Out" onClick={() => firebase.auth().signOut()} />
    </View>
}