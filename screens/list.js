import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Card,UserInfo,UserImgWrapper,UserImg,MessageText,UserInfoText,TextSection,UserName} from './style';
import Btn from '../components/Btn';
import "firebase/auth";
import firebase from 'firebase/app';




export default function List({ navigation }) {// functional component
    const [newsData, setData] = useState([]); // intial value is empty array
    /*
        newsData initial value is empty array
        setData we use to update data
    */
     useEffect(() => {
        fetch('https://randomuser.me/api/?page=1&results=20')
             .then((response) => response.json())
             .then((json) => setData(json.results)) // updating newsData
     }, []); // effect will run only once 
     
    
    const storyItem = ({ item }) => {
        return (
            
            

                <TouchableOpacity

                   >
                    <UserInfo>
                        <UserImgWrapper>
                            <UserImg source={{ uri: item.picture.medium }} />
                        </UserImgWrapper>
                        <TextSection>
                            <UserInfoText>
                                <UserName>                    
                              {item.name.first}
                                </UserName>
                            </UserInfoText>
                            <MessageText>
                                {item.email}
                            </MessageText>
                        </TextSection>
                    </UserInfo>

                </TouchableOpacity>


        )
    }

    return (
        
<Container>
        <FlatList
            data={newsData}
            renderItem={storyItem}>

        </FlatList>
        

<Btn title="Log Out" onClick={() => firebase.auth().signOut()} />
            
        </Container>

    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        flex: 1,
        margin: 50,
    },
    title1: {

        fontWeight: 'bold',
        alignItems: 'center',

    },
    textInput: {
        marginTop: 40,
        paddingHorizontal: 16,
        paddingVertical: 8,
      },
});