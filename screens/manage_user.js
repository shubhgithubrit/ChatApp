import React, { useState, useEffect } from 'react'
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { database } from '../configure'
import firebase from 'firebase'
import { FAB } from 'react-native-paper'

export default function ManageUsers({ user, navigation }) {
    
    const [users, setUsers] = useState(null)
    const getUsers = async () => {
        const querySanp = await firebase.firestore().collection('users')
            .get()
        const Users = querySanp.docs.map(docSnap => docSnap.data())
        setUsers(Users)
    }

    useEffect(() => {
        getUsers()
    }, [])

    const RenderCard = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('chat', {
                name: item.name, uid: item.uid,
                 })}>
                <View style={styles.mycard}>
                    <Image source={{ uri: item.image }} style={styles.img} />
                    <View>
                        <Text style={styles.text}>
                            {item.name}
                        </Text>
                        <Text style={styles.text}>
                            {item.email}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={users}
                renderItem={({ item }) => { return <RenderCard item={item} /> }}
                keyExtractor={(item) => item.uid}
            />
            <FAB
                style={styles.fab}
                icon="face-profile"
                color="black"
                onPress={() => navigation.navigate("userDetails")}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    img: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "white"
    },
    text: {
        fontSize: 18,
        marginLeft: 15,
    },
    mycard: {
        flexDirection: "row",
        margin: 1,
        padding: 4,
        backgroundColor: "#cc34eb",
        borderBottomWidth: 1,
        borderBottomColor: '#cc34eb'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: "grey"
    },
});