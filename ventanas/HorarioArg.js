import React from 'react'
import {View,Text,StyleSheet,Image,ImageBackground,FlatList} from 'react-native'


export default function Horarios(){

    return(
        <ImageBackground
        source={require('../ventanas/img/mara.jpg')}
        
        style={style.continer}
        >



  <View>
            <View>
                <Image
                 source={require('../ventanas/img/horarios.jpg')}
                 style={style.img}
                  />
                </View>
            <View>
                <Image 
                source={require('../ventanas/img/partidos.jpg')}
                style={style.img2}
                />
             </View>
        </View>
        
        </ImageBackground>


       
    )

}


const style = StyleSheet.create({
    img:{
        height:310,
        width:400 ,
    
         alignSelf:'center',
         borderWidth:2,
         borderColor:'black',
         opacity:0.8
         
    },img2:{
        height:410,
        width:400 ,
         marginTop:5,
         alignSelf:'center',
         borderWidth:2,
         borderColor:'black',
         marginBottom:20,
         opacity:0.9
         
    },continer:{
        padding:50
    }
    
})