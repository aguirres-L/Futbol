import React, { useState } from "react";
import {FlatList,View,Image,ImageBackground,StyleSheet,TouchableOpacity,Text} from 'react-native'

import dataGAtos from "../dataGAtos";



export default function Gato (){

    const info = 'https://api.thecatapi.com/v1/images/search' 
    
    const [imgUrl,setUrl]= useState("") 


///   VER PARA QUE SIRVE FETCH 
    const callImg=()=>{  
       fetch(info).then(resp=> resp.json().then(data =>setUrl(data[0].url)))
    }



    return(

        <ImageBackground
        source={require('./img/mike.jpg')}style={style.container} >

                    
            
            <FlatList
             ItemSeparatorComponent={()=><Image></Image>}
             data={dataGAtos}
            renderItem={({item:data})=>(
                <View key={data.img}  style={style.container} >
                
                    <View>
                        <Text style={style.text}> Imagenes de Gatos Random </Text>
                    <Image style={style.img} source={{uri: imgUrl}} />
                    <View style={style.container1}>
                        <TouchableOpacity
                            onPress={()=>callImg()}
                        ><Text> Oprimir </Text></TouchableOpacity>
                    </View>
                    <Image style={style.img} source={{uri: imgUrl}} />
                    <Image style={style.img} source={{uri:imgUrl}} />
                    </View>
                
                </View>
            )}
            
            />

        </ImageBackground>


        )
}

const style = StyleSheet.create({
    container:{
        height:750,
        width:450,
        alignSelf:'center'
    }, container1:{
        marginTop:20,
        alignSelf:'center',
        backgroundColor:'gold'
    },img:{
        height:250,
        width:200,
        borderRadius:4,
        marginRight:20,
        borderColor:'white',
        borderWidth:1,
       alignSelf:'center',
       marginBottom:10,
       marginTop:50,
       opacity:0.9
       
    },text:{
        alignSelf:'center',
        marginBottom:15,
        marginTop:20,
        color:'white',
        backgroundColor:'grey'
    }
})
