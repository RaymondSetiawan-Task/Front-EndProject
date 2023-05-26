import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import changephoto from "../changeprofile/changeprofile";


const Stack = createStackNavigator();

const Router = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="changeprofile" component={changephoto}/>
        </Stack.Navigator>
    )
}