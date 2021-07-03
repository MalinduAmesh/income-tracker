import React, {component} from 'react';
import {View, Text,Button,TextInput} from 'react-native'

const ScreenOne = (props) =>{ 
    return(

    // const [name ,setName] = useState
    <View>

            {/* <Button></Button> */}
        <Text>Hellow Screen One</Text>
      <TextInput>
      </TextInput>
      <Button title ='Screen One' onPress ={() =>{
            navigate('ScreenTwo')
      }}></Button>

    </View>
    );
}

export default ScreenOne