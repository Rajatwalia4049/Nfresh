
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './StackScreen/MainTabScreen';
import DrawerContent from './screens/drawerScreen/DrawerContent'
import SupportScreen from './screens/drawerScreen/SupportScreen'
import SettingScreen from './screens/drawerScreen/SettingScreen'
import AddressScreen from './screens/drawerScreen/AddressScreen'
import RootStackScreen from './StackScreen/RootStackScreen';
import { ActivityIndicator, View } from 'react-native';
import {AuthContext} from './Autantication/Context'





const Drawer = createDrawerNavigator();





// drawer navigator connected to mainTab and inside drawer item



 

function App() {
  const [isLoading,setIsLoading] =React.useState(true);
  const [userToken,setUserToken] = React.useState(null);

  const authContext = React.useMemo(()=>({
    signIn:()=>{
      setUserToken('fcgh');
      setIsLoading(false);
    },
    signOut:()=>{
      setUserToken('null');
      setIsLoading(false);
    },
    signUp:()=>{
      setUserToken('skdfjsk');
      setIsLoading(false);
    },
  }));


  React.useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },1000);
  },[]);

  if(isLoading){
    return(
      <View style ={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {userToken != null ? (
      
       <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={MainTabScreen} />
      <Drawer.Screen name="Support" component={SupportScreen} options={{headerShown:true}} />
      <Drawer.Screen name="Setting" component={SettingScreen}  options={{headerShown:true}}/>
      <Drawer.Screen name="Address" component={AddressScreen}  options={{headerShown:true}}/>
    </Drawer.Navigator> 
    )
    :
    <RootStackScreen/>
  }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;



