import React, { Component, useState } from 'react';
import {View,Text,Button,StyleSheet, RefreshControlComponent} from 'react-native'


const List = () =>{ 

    const [Item,setItem] = useState([
        {key:1,item:'Item 1'},
        {key:2,item:'Item 2'},
        {key:3,item:'Item 3'},
        {key:4,item:'Item 4'},
        {key:5,item:'Item 5'},
        {key:6,item:'Item 6'},
        {key:7,item:'Item 7'},
        {key:8,item:'Item 8'},


    ])

    const [Refrehing,setRefresing] = useState(false);

    const onRefresh = () =>{

        setRefresing(true);
        setItem([...Item,{key:69,item:'Item 88'}]);
        setRefresing(false)
    }
    return(

        
        <View style={styles.body}>
        refreshController ={
            <RefreshControl></RefreshControl>
        }
        {
            Item.map((item) =>{
                return(
        <View key ={item.key} >
        <Text  style = {styles.item}>{item.item} </Text>
        </View>
                )
            })
        }

        </View>

    );
}
const styles = StyleSheet.create({

    body:{
        flex: 1,
        flexDirection:'column'
    },
    item:{
        backgroundColor:'yellow',
        margin:10,
    }
})
export default List 