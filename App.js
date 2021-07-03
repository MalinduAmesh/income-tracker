import React from 'react';
import Flex from './components/Flex'
import StateHook from './components/StateHook';
import List from './components/List';
import CardComponent from './components/Nativebase'
import ScreenTwo  from './components/ScreenTwo';
import ScreenOne from './components/ScreenOne';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Async from './components/Async'

const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (

  <NavigationContainer>

    {/* <Stack.Navigator>
    <Stack.Screen name="ScreenOne" component={ScreenOne} />
    <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
    </Stack.Navigator> */}
    {/* <Tab.Navigator>
      <Tab.Screen name="ScreenOne" component={ScreenOne} />
      <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
    </Tab.Navigator> */}
    <Tab.Navigator>
    <Tab.Screen name="Async" component={Async} />
      <Tab.Screen name="ScreenOne" component={ScreenOne} />
      <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
    </Tab.Navigator>
  
  </NavigationContainer>

  // <ScreenOne></ScreenOne>
    // <ScreenTwo></ScreenTwo>
    // <CardComponent></CardComponent>
    // <List></List>
    // <StateHook></StateHook>
    // <Flex></Flex>
  );
};



export default App;