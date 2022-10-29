import React from "react";
import {View,Text,ImageBackground } from "react-native";


export default function FixturiC(){
    return(
       
        <ImageBackground
        source={require('./img/horarios.jpg')}
        >
            <View>
        <Text>
            fix C
        </Text>
       </View>
        </ImageBackground>

    )
}