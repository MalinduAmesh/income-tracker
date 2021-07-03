import React, { Component } from 'react';
import { View, Text,FlatList,ActivityIndicator,StyleSheet } from 'react-native';


export default class Flex extends Component {


    render() {
        return (
    <View style ={styles.body}> 
    <View style ={styles.view1}>
      <Text style ={styles.text}>1</Text>
    </View>
    <View style ={styles.view2}>
      <Text style ={styles.text}>2</Text>
    </View>
    <View style ={styles.view3}>
      <Text style ={styles.text}>3</Text>
    </View>
    </View>

        );
    }
}

const styles = StyleSheet.create({
    body:{
      flex:1,
      flexDirection:'row',
      backgroundColor:'black',
      alignItems:'center',
      justifyContent:'center',
    },
    view1:{
  width:100,
  height:100,
      backgroundColor:'red',
      alignItems:'center',
      justifyContent:'center'
    },
    view2:{
      width:100,
      height:100,
      backgroundColor:'blue',
      alignItems:'center',
      justifyContent:'center'
    },
    view3:{
      width:100,
      height:100,
      backgroundColor:'pink',
      alignItems:'center',
      justifyContent:'center'
    }
  })
