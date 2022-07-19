import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { TextInput, Button } from "react-native-paper";
import firebase from "firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignupScreen from "./Signup";
import { database } from "../configure";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./Drawer";

export default function LogiScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [userlist, setUserlist] = useState([]);
    let currentUser;
    
    if(loading) {
        return <ActivityIndicator size="large" color="blue" />
    }

    const userLogin = () => {
        let apos = email.indexOf('@');
        let dotpos = email.lastIndexOf('.');
        setLoading(false);
            if(!email || !password) {
                alert("Please add all fields");
                return false;
            } else if (apos < 1 || dotpos - apos < 2) {
                alert("Please enter a valid email id");
                return false;
            } else if (userExist()) {   
            
            Refresh();
            try{
                navigation.navigate('Drawer')
                
            } catch(err) {
               alert(err);
            } 
            }
            
            function Refresh() {
                setEmail('');
                setPassword('');    
            } 

            function userExist()  {
                for (let i = 0; i < userlist.length; i++) {
                    if (email == userlist[i].email) {
                        if (password == userlist[i].password) {
                            currentUser = userlist[i];
                            const jsonValue = JSON.stringify(currentUser)
                            AsyncStorage.setItem('currentUser', jsonValue)
                            // console.log(currentUser);
                            // return false;
                            // AsyncStorage.getItem('currentUser', (err,result) => {console.log(result);});
                            return true;
                        }
                        else {
                            alert("wrong password");
                            // return true;
                            return false;
                        }
                    }
                }
                alert("User does not exist");
                // return true;
                return false;
        
            }
    }

    useEffect(() => {
    async function fetchUsers(){
      let users = [];
      await firebase.firestore().collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            users.push(doc.data());
        });
      })
      .catch((error) => {
          alert("Error getting documents",error);
      });

      setUserlist(users);
    //   console.log(userlist);
    }
    fetchUsers();
    });

    

    return (
        <ScrollView behavior="position" style={styles.container}>
            <View style={styles.box1}>
                {/* <Text style={styles.text}>Welcome to ChitChat</Text> */}
                <Image style={styles.img} source={require('../assets/o1.png')} />
            </View>
            <View style={styles.box2}>
                
                <TextInput 
                    style={{paddingBottom:3}}
                    label='Email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    mode="outlined"
                />
                <TextInput
                    style={{paddingBottom:3}}
                    label='Password'
                    mode="outlined"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />
               
                <Button
                    mode="contained"
                    onPress={() => userLogin()}>Login
                </Button>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}><Text style={styles.text}>Don't have an account ? Signup</Text></TouchableOpacity>
                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize:15,
        textAlign:'center',
        color:'black',
    },
    container: {
        height: '100%',
        backgroundColor: '#eb34e5'
    },
    img: {
        
        width: 150,
        height: 150
    },
    box1: {
        alignItems: 'center'
    },
    box2: {
        paddingHorizontal:40,
        justifyContent:"space-evenly",
        height:'80%'
    }
})

