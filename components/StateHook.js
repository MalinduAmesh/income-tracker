import React, { Component, useState } from 'react';
import {View,Text,Button} from 'react-native'


const StateHook = () =>{ 

        const [name,setName] = useState('Malindu')
        const [session,setSession] = useState({number:1,title:'Singing'})
        const [current ,setCurrent] = useState(false)

        const [topNo,setTopNo] = useState(0)
        const [downNo,setDownNo] = useState(0)

        const onClickHandler =() =>{
            // setName('Prgramming with Malindu')
            // setSession({number:2,title:'gaming'})
            // setCurrent(true)
            setTopNo(topNo+1)
        }

        return(
            <View>
            {/* <Text>{name}</Text>
            <Text>My Session number is {session.number} and My Favorite  {session.title}</Text>
            <Text>{current ? 'Current Session' : ' NExt Session'}</Text> */}
            <Text>{topNo*5}</Text>
            <Button title ='Update The State' onPress ={onClickHandler}></Button>
            <Text>{topNo}</Text>
            </View>

        );
}

export default StateHook