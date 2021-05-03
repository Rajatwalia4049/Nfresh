import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
// import {AuthContext} from '../Autantication/Context'



const NumberScreen = ({ navigation }) => {




  return (


    <View style={{ flex: 1, }}>


      <Text style={styles.text1}>We have sent you on sms with a code{"\n"}
            to number +917988382769</Text>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <PhoneInput



        />
      </View>





      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => navigation.navigate('Phone Varification')}
      // onPress={() =>{si }  
      >
        <Text style={styles.text2}>CONTINUE</Text>
      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({



  text: {
    fontSize: 23,
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 20,
    color: 'black',
  },


  text1: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    color: 'black',
  },
  text2: {

    color: 'white',
  },


  buttonStyle: {
    backgroundColor: '#67BC45',

    marginTop: 210,
    borderRadius: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 330,
    height: 50,
    alignSelf: 'center',
    backgroundColor: "green",

  },

});
export default NumberScreen;