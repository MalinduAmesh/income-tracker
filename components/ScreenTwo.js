import React, {component} from 'react';
import {View, Text,Button} from 'react-native'
// import component from 'native-base/lib/typescript/factory/component'

const ScreenTwo = (props) =>{ 
    return(

    // const [name ,setName] = useState
    <View>
        <Text>Hellow Screen Two</Text>
        <Button title ='Screen Two' onPress={() =>{
            props.navigation.navigate('ScreenOne')
        }}></Button>
    </View>
    );
}

export default ScreenTwo