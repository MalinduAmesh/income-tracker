import React from 'react'
import {View, Text,Button,TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
function Async() {

     storeData = async (value) => {
        try {
          await AsyncStorage.setItem('name', "Malindu")
          console.log("Data Saved")
        } catch (e) {
          // saving error
        }
      }
       getData = async () => {
        try {
          const value = await AsyncStorage.getItem('name')
          if(value !== null) {
              console.log("Values is"+ value)
            // value previously stored
          }
        } catch(e) {
          // error reading value
        }
      }
      removeValue = async () => {
        try {
          await AsyncStorage.removeItem('name')
          console.log("Data Removed")
        } catch(e) {
          // remove error
        }
      
        console.log('Done.')
      }

    return (

        <View>
            <Button title='Save Data' onPress={storeData} ></Button>
            <Button title='Load Data' onPress ={getData} ></Button>
            <Button title='Remove Data' onPress ={removeValue} ></Button>


        </View>
    )
}

export default Async
