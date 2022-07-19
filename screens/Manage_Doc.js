import React, { useState } from "react";
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { TextInput, Button } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';
import { database } from "../configure";
import firebase from "firebase";


export default function ManageDocs({ navigation }) {
    const [title, setTitle] = useState('')
    const [file, setFile] = useState('')
    const [loading, setLoading] = useState(false)
    
    
    if (loading) {
        return <ActivityIndicator size="large" color="blue" />
    }

    const userDoc = async () => {
        setLoading(false);
        if (!title||!file) {
            alert('Please add all the fields');
            return 
        }
        
        firebase.firestore().collection('Doc').doc(`{${Date.now()}`).set({
            title:title,
            file:file,
            createdAt: firebase.firestore.Timestamp.now()
        }).then(Refresh());
        
        function Refresh() {
            setTitle('');
            setFile('');
              }
    }


   
    return (
        <ScrollView behavior="position" style={styles.container}>
            <View style={styles.box1}>
                <Image style={styles.img} source={require('../assets/icon.png')} />
            </View>
            <View style={styles.box2}>
                <TextInput
                    style={styles.TextInput}
                    label='File-Name'
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                    mode="outlined"
                />
                <TextInput
                     style={styles.TextInput}
                    label='File'
                    value={file}
                    onChangeText={(text) => setFile(text)}
                    mode="outlined"
                />
                <Button
                    style={styles.button}
                    mode="contained"
                    onPress={() => userDoc()}>Upload
                </Button>
  
                {/* <TouchableOpacity onPress={() => navigation.navigate('login')}><Text style={styles.text}>Already have an account ? Login</Text></TouchableOpacity> */}


            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: 'bold' ,
        textAlign: 'center',
        color: 'black',
        padding: 5,
        marginTop:20
        
    },
    container: {
        height: '100%',
        backgroundColor: 'white'
    },
    img: {
        margin: 0,
        padding: 0,
        width: 150,
        height: 150
    },
    box1: {
        alignItems: 'center'
    },
    box2: {
        flex:1,
        paddingHorizontal: 40,
        justifyContent: "space-evenly",
        height: '90%'
    },
    TextInput: {
        marginBottom:8,
        marginHorizontal:16
    },
    button: {
        margin:5,
        marginBottom:10,
        marginHorizontal:18
    }

  

});
