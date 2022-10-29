import React from 'react'
import {View,Text,StyleSheet} from 'react-native'


const InfoSecond=(data)=>{
    return(
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View>
                <Text style={style.text}>Posicion : {data.posicion}</Text>
                <Text style={style.text}>Altura : {data.altura}</Text>
                <Text style={style.text}>Pie : {data.pieHabil}</Text>
                <Text style={style.text}>Titulo : {data.titulos}</Text>
                <Text style={style.text}>Titulo Seleccion : {data.titulosSeleccion}</Text>
            
            </View>
            <View>
                <Text  style={style.text}>Goles: {data.goles} </Text>
                <Text  style={style.text} >Goles Seleccion : {data.golesSeleccion}</Text>
                <Text  style={style.text}>Asistencias: {data.asistencias} </Text>
                <Text  style={style.text}>Tarjeta Amarillas:  {data.amarillas}</Text>
                <Text  style={style.text}>Tarjeta Roja : {data.roja} </Text>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
     backgroundColor:'black',
     opacity:0.9,
     marginTop:20,
     borderRadius:100/2,
     borderWidth:2,
     borderColor:'gold'
    },
    container2:{
     alignSelf:'center',
    },
    text:{
     color:'white'
    }
})

export default InfoSecond;