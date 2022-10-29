import React from "react";
import { View,Text,ImageBackground,StyleSheet ,FlatList} from "react-native";
import dataAFA22 from "../dataAFA22";



// exporto elemtos 
import InfoPlayer from "./Datapresonal";
import InfoSecond from "./InfoSecundaria";


export default function Repository (){
    return (
        
        <ImageBackground
        source={require('./img/uno.jpg')}>

        <FlatList
        ItemSeparatorComponent={()=><Text></Text>}

        data={dataAFA22}
        
        renderItem={({item:data})=>(
            <View  style={style.container}>
               
        <View key={data.nombre} style={style.container2}>
             
            <InfoPlayer {... data} />
            <InfoSecond {...data}/>
         </View>
         <Text></Text>
            
            </View>
        )}

        
        />


        </ImageBackground>
        
    )
}

const style = StyleSheet.create({
   container:{
    backgroundColor:'black',
    opacity:0.9,
    marginTop:20,
    borderRadius:100/2,
    borderWidth:2,
    borderColor:'#E6D6A0',
    marginBottom:10
   },
   container2:{
    alignSelf:'center',
    marginTop:20
   },
   text:{
    color:'white'
   }
})