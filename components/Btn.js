import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    btn: {
        height: 42,
        width: "100%",
        borderRadius: 50,
        marginTop: 20,
        backgroundColor:'red',
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        fontSize: 20,
        fontWeight: "600",
        color: "blue"
    }

})

export default function Btn(props){
    return <TouchableOpacity onPress={props.onClick}  style={{...styles.btn, ...props.style}}>
        <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
}