import React from "react"
import {View,Text,StyleSheet,Image} from 'react-native'

const InfoPlayer= (data)=>{
    return(
        <View  style={{paddingRight:2,flexDirection:'row',marginBottom:20}}>
                <View>
                    <Image style={style.img} source={{uri:data.img}} />
                </View>
                <View>
                <Text style={style.text}>Nombre : {data.nombre}  "{data.apodo}"</Text>
                <Text style={style.text}>Apellido : {data.apellido}</Text>
                <Text style={style.text}>Edad : {data.edad}</Text>
                <Text style={style.text}>Fecha : {data.fecha}</Text>
                <Text style={style.text}>Club: {data.club} </Text>

                </View>
            </View>
    )
}


const style = StyleSheet.create({
   img:{
        height:120,
        width:75,
        borderRadius:4,
        marginRight:20,
        borderColor:'white',
        borderWidth:1,
    },
    text:{
     color:'white'
    }
 })

export default InfoPlayer