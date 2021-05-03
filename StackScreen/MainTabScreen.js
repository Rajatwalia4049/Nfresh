

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';




const HomeStack = createStackNavigator();
const OrderStack = createStackNavigator();
const SearchStack = createStackNavigator();
const FavouriteStack = createStackNavigator();
const UserStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();





import HomeScreen from '../screens/home/HomeScreen'
import FavouriteScreen from '../screens/favourite/FavouriteScreen'
import SearchScreen from '../screens/search/SerachScreen';
import  OrderScreen  from "../screens/order/OrderScreen";
import UserScreen from '../screens/user/UserScreen'


// all Tab navigator with calling of stack navigator 



const MainTabScreen=()=>(
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#F4A921"
    barStyle={{ backgroundColor: '#F4F5F9' }}
    headerTitleStyle={
      fontWeight='bold'
    }
    
  >
    <Tab.Screen
      name="Search"
      component={SearchStackScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => (
          <Ionicons name="search-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Favourite"
      component={FavouriteStackScreen}
      options={{
        
        tabBarLabel: 'Favourite',
        tabBarIcon: ({ color }) => (
          <Ionicons name="heart-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Ionicons name="home-outline" color={color} size={26} />
        ),
      }}
    />
       <Tab.Screen
      name="Order"
      component={OrderStackScreen}
      options={{
        tabBarLabel: 'order',
        tabBarIcon: ({ color }) => (
          <Ionicons name="gift-outline" color={color} size={26} />
        ),
      }}
    />
        <Tab.Screen
      name="User"
      component={UserStackScreen}
      options={{
        tabBarLabel: 'user',
        tabBarIcon: ({ color }) => (
          <Ionicons name="person-outline" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
)
export default MainTabScreen;



     // all stack navigator 


const SearchStackScreen =({navigation})=>(
   
    <SearchStack.Navigator screenOptions={{
           headerStyle:{
             backgroundColor:'#F4F5F9',
            
           },
           headerTintColor:'black',
           headerTitleStyle:{
             fontWeight:'bold'
           }
         }}>
         <SearchStack.Screen name="Home" component={SearchScreen} options={{
           title:'Search',
           color:'black',
           headerLeft:()=> (
             <Ionicons.Button name = 'menu' size ={25}
             backgroundColor="#009837"  onPress={()=>navigation.openDrawer()}></Ionicons.Button>
             
           )
         }} />
        
         </SearchStack.Navigator> 
   )


   
   const FavouriteStackScreen =({navigation})=>(
      
     <FavouriteStack.Navigator screenOptions={{
            headerStyle:{
              backgroundColor:'#F4F5F9'
            },
            headerTintColor:'black',
            headerTitleStyle:{
              fontWeight:'bold'
            }
            
          }}>
       
          <FavouriteStack.Screen name="Detail" component={FavouriteScreen} 
            
            options={{
             title:'Favourite',
             headerLeft:()=> (
               <Ionicons.Button name = 'menu' size ={25}
               backgroundColor="#009837" onPress={()=>navigation.openDrawer()}></Ionicons.Button>
               
             )
           }}
   
   
   
          />
          </FavouriteStack.Navigator> 
    )

    const HomeStackScreen =({navigation})=>(
      
        <HomeStack.Navigator screenOptions={{
               headerStyle:{
                 backgroundColor:'#F4F5F9'
               },
               headerTintColor:'black',
               headerTitleStyle:{
                 fontWeight:'bold'
               }
               
             }}>
          
             <HomeStack.Screen name="Setting" component={HomeScreen} 
               
               options={{
                title:'Home',
                headerLeft:()=> (
                  <Ionicons.Button name = 'menu' size ={25}
                  backgroundColor="#009837" onPress={()=>navigation.openDrawer()}></Ionicons.Button>
                  
                )
              }}
      
      
      
             />
             </HomeStack.Navigator> 
       )



       const OrderStackScreen =({navigation})=>(
      
        <OrderStack.Navigator screenOptions={{
               headerStyle:{
                 backgroundColor:'#F4F5F9'
               },
               headerTintColor:'black',
               headerTitleStyle:{
                 fontWeight:'bold'
               }
               
             }}>
          
             <OrderStack.Screen name="Search" component={OrderScreen} 
               
               options={{
                title:'Order',
                headerLeft:()=> (
                  <Ionicons.Button name = 'menu' size ={25}
                  backgroundColor="#009837" onPress={()=>navigation.openDrawer()}></Ionicons.Button>
                  
                )
              }}
             />
             </OrderStack.Navigator> 
       )



       const UserStackScreen =({navigation})=>(
      
        <UserStack.Navigator screenOptions={{
               headerStyle:{
                 backgroundColor:'#F4F5F9'
               },
               headerTintColor:'black',
               headerTitleStyle:{
                 fontWeight:'bold'
               }
               
             }}>
          
             <UserStack.Screen name="Search" component={UserScreen} 
               
               options={{
                title:'User',
                headerLeft:()=> (
                  <Ionicons.Button name = 'menu' size ={25}
                  backgroundColor="#009837" onPress={()=>navigation.openDrawer()}></Ionicons.Button>
                  
                )
              }}
             />
             </UserStack.Navigator> 
       )