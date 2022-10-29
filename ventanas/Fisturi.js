import React from "react";
import { View,Text,ImageBackground ,StyleSheet,FlatList,Image} from "react-native";

import dataQatar from "../dataQatar";

export default function Fisturi(){
    return(
      <ImageBackground  
      source={require('../ventanas/img/dos.jpg')}
      style={style.conteiner}>

        <FlatList
        data={dataQatar}
        ItemSeparatorComponent={()=> <Text></Text>}
        renderItem={({item : qatar })=>(
            <View  key={qatar.grupo}>
                 <View style={style.grupo} >
                    <Text style={style.text}>Grupo {qatar.grupo} </Text>
                 </View>
                 <View>
                    <Image style={style.img}  source={{uri:qatar.img}}/>
                 </View>
                <Text></Text>

            </View>
        )}
        />
      </ImageBackground>
    )
}

const style = StyleSheet.create({
    conteiner:{
        marginTop:20
    },text:{
        color:'white'
    },
    img:{
        height:200,
        width:420 ,
         marginTop:10,
         alignSelf:'center',
         borderWidth:2,
         borderColor:'white'
      
    
    },
   grupo:{
    alignSelf:'center',
    marginBottom:1,
    backgroundColor:'grey',
    width:200,
    alignItems:'center',
    borderColor:'white',
    borderWidth:2,
    marginTop:20,
    borderRadius:4

   }

})