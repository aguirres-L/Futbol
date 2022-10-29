//   Navegador 

import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";


import Repository from "./ventanas/Repository";
import Fisturi from "./ventanas/Fisturi";
import Horarios from "./ventanas/HorarioArg";

import Gato from "./ventanas/Gatos";



// import tipo icono "fixturi"
import { FontAwesome5 } from '@expo/vector-icons'; 

//iporto el tipo icono "repo o info "
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
// creo una nuevo tab para poder renderizar un nuevo componente 








// Creo Tab

const Tab = createBottomTabNavigator();

function MyTab(){       // con initRouteName le idnico por donde debe de empezar 
          // con   tabBarActiveTintColor:'black', le indico el color 
          // 
          //    al colocar "optcion" en tab.Screen me da lugar a poder cambiar esos iconos
          //  tabBarLabel: cambiar el nombre del icono  
          // con tabBarIcon importo un diseño para el icono
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor:'black',
            tabBarInactiveTintColor:'grey'
        }}> 


        <Tab.Screen
             name=" Horarios" 
             component={Horarios}
             options={{
                tabBarLabel:'HORARIOS',
                tabBarIcon:({color,size})=>(
        <FontAwesome name="futbol-o" size={24} color="black" />

            ) ,
            headerShown:false
            }}
             
             />


            <Tab.Screen
             name=" Fixturi" 
             component={Fisturi}
             options={{
                tabBarLabel:'QATAR',
                tabBarIcon:({color,size})=>(
                    <FontAwesome5 name="calendar-alt" size={24} color="black" />
                ),
                headerShown:false
             }}
             />


            <Tab.Screen
             name=" InfoGupo" 
             component={Repository}
             options={{
                tabBarLabel:'JUGADORES',
                tabBarIcon:({color,size})=>(
                    <AntDesign name="team" size={24} color="black" />
            ) ,
            headerShown:false
            }}
             
             />

       


        </Tab.Navigator>
    );
}





export default function Navegadorrr(){
    return(

        <NavigationContainer>
            <MyTab></MyTab>
        </NavigationContainer>


    )
}




/* 
        <Tab.Screen
             name=" GAtos" 
             component={Gato}
             options={{
                tabBarLabel:'GATOS',
                //tabBarIcon:({color,size})=>(
        //<FontAwesome name="futbol-o" size={24} color="black" />
          //  ) ,
            headerShown:false
            }}
             
             />
*/