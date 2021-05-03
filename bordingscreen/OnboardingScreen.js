import React from 'react';
import { View, Text, Button, StyleSheet,Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Ionicons } from '@expo/vector-icons';

const Skip = ({...props}) => (
 <TouchableOpacity
 {...props}
 >
   <Text  style = {{marginLeft: 15, fontSize: 15}}>
     Skip
   </Text>
 </TouchableOpacity>
)

const Next = ({...props}) => (
  <TouchableOpacity
   {...props}
   >
    <Text style = {{marginRight: 10}}>
    <Ionicons name="arrow-forward-circle-sharp" size={40} color="black" />
   
    </Text>
  </TouchableOpacity>
 )

 const Done = ({...props}) => (
  <TouchableOpacity
   {...props}
   >
    <Text style = {{marginRight: 15, fontSize: 15}}>
    Done
   
    </Text>
  </TouchableOpacity>
 )

const OnboardingScreen = ({ navigation }) => {

   
    return (
        <Onboarding
        SkipButtonComponent = {Skip}
        NextButtonComponent = {Next}
        DoneButtonComponent = {Done}
        onSkip = {() => navigation.navigate("Login")}
        onDone = {() => navigation.navigate("Login")}
         
        pages={[
          {
            backgroundColor: 'white',
            image: <Image source={require('../assets/intro1.png')} style = {{height: 280, width: 370,marginTop: -50}} />,
            title: 'Find Your Nearby\nGrocery Store',
            subtitle: 'Find the favourite stores you want by\nyour locations or neighbordhood',
            titleStyles: { color: 'orange'}, // overwrite default color,
         
            
           
          },
          
          {
            backgroundColor: 'white',
            image: <Image source={require('../assets/intro2.png')} style = {{height: 350, width: 390,marginTop: -100}} />,
            title: 'Offers Fresh & Quality\nGroceries For You',
            subtitle: 'All items have real freshness and are\nintended for your needs',
            titleStyles: { color: '#99FF33',}, // overwrite default color
   
          },

          {
            backgroundColor: 'white',
            image: <Image source={require('../assets/intro4.png')} style = {{height: 350, width: 400,marginTop: -100}} />,
            title: 'Quick Deliver At\nYour Dootstep',
            subtitle: 'Choose to be delivery or pickup according\nto when you need',
            titleStyles: { color: '#606060'}, // overwrite default color
            
          },

          
        ]}
      />
    )
};
export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       

    },
    

  
})