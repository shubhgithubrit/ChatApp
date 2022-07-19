import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'
import { StyleSheet } from 'react-native';

export default function Chats() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hiii',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: "https://wikibio.in/wp-content/uploads/2020/01/Riyaz-Aly.jpg",
                },
            },
            {
                _id: 2,
                text: 'Hello ',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLTA2DA-aXJLr-beyHj8aVUVEkC2Pg0Mo9wbBKXKLQ=s900-c-k-c0x00ffffff-no-rj',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);

    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: 'green',
                        padding: 5
                    },
                }}
                textStyle={{
                    right: {
                        color: '#fff',
                    },
                }}
            />
        );
    };
    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
            renderBubble={renderBubble}
            alwaysShowSend
        />
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})