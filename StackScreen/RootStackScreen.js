

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import OnboardingScreen from '../bordingscreen/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NumberScreen from '../bordingscreen/NumberScreen';
import OtpScreen from '../bordingscreen/OtpScreen';


const AppStack = createStackNavigator();

const RootStackScreen = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(Value => {
      if (Value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);

      } else {
        setIsFirstLaunch(false);
      }
    })
  }, []
  );

  if (isFirstLaunch === null) {
    return null;
  }
  else if (isFirstLaunch === true) {
    return (
    //   <NavigationContainer>
        <AppStack.Navigator
          headerMode="none"
        >
          <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
          <AppStack.Screen name="Verify Phone Number" component={NumberScreen} />
         
        </AppStack.Navigator>
    //   </NavigationContainer>

    );
  }
  else {
    return (
    //   <NavigationContainer> 
      <AppStack.Navigator
               
     
      >
        
        <AppStack.Screen name="Verify Phone Number" component={NumberScreen}  options={{ headerTitleStyle: {textAlign: "center"}}} />
        <AppStack.Screen name="Phone Varification" component={OtpScreen} options={{ headerTitleStyle: {marginLeft: 55}}} />
       
      </AppStack.Navigator>
    // </NavigationContainer>
    )

  }
  
}


export default RootStackScreen;