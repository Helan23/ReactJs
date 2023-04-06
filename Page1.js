import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TEMP1 from "./TEMP1";
import Page2 from "./Page2";

const stack  = createStackNavigator();

function MyStack() {
    return(
        <stack.Navigator>
        <stack.Screen name="Movie" component={TEMP1} />
        <stack.Screen name="Summary" component={Page2} />
    </stack.Navigator>
    )
}

export default function Page1(){
   return(
    <NavigationContainer>
    <MyStack></MyStack>
</NavigationContainer>
   )
}