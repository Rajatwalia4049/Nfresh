import React from 'react';

import { View, Text, TextInput, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {AuthContext} from '../Autantication/Context'

const OtpScreen = ({ navigation }) => {


    const[data, setData] =React.useState({
        signIn:'',
        password:'',
        check_textInputChange:false,
        secureTextEntry:true
          
      });
      const { signIn } = React.useContext(AuthContext);
      const textInputChange =(val) =>{
        if(val.length != 0){
          setData({
            ...data,
            username:val,
            check_textInputChange:true
          });
        } else {
          setData({
            ...data,
            username:val,
            check_textInputChange:false
          })
        }
      }
    
       
      const handlePasswordChange =(val) => {
        setData({
          ...data,
          password:val
    
        })
      }
      const updateScureTextEntry = () => {
        setData({
          ...data,
          secureTextEntry:!data.secureTextEntry
        })
      }


    return (
        <View style={{ flex: 1 }}>

            <View style={{ justifyContent: "space-evenly", flexDirection: "row", marginTop: 50 }}>
                <TextInput

                    keyboardType="numeric"


                    maxLength={1}

                    style={{ backgroundColor: 'orange', color: "white", fontWeight: '600', alignSelf: "center", padding: 15, alignItems: 'center', fontSize: 20, height: 55, width: "13%", borderRadius: 10, borderWidth: 0.5, borderColor: 'gray' }}
                />

                <TextInput

                    keyboardType="numeric"

                    maxLength={1}

                    style={{ backgroundColor: 'orange', color: "white", fontWeight: '600', alignSelf: "center", padding: 15, alignItems: 'center', fontSize: 20, height: 55, width: "13%", borderRadius: 10, borderWidth: 0.5, borderColor: 'gray' }}
                />

                <TextInput

                    keyboardType="numeric"

                    maxLength={1}

                    style={{ backgroundColor: 'orange', fontWeight: '600', color: "white", alignSelf: "center", padding: 15, alignItems: 'center', fontSize: 20, height: 55, width: "13%", borderRadius: 10, borderWidth: 0.5, borderColor: 'gray' }}
                />

                <TextInput


                    keyboardType="numeric"
                    maxLength={1}

                    style={{ backgroundColor: 'orange', fontWeight: '600', color: "white", alignSelf: "center", padding: 15, alignItems: 'center', fontSize: 20, height: 55, width: "13%", borderRadius: 10, borderWidth: 0.5, borderColor: 'gray' }}
                />

            </View>
            <Text style={styles.text1}>Didn't you received any code?</Text>
            <Text style={styles.text3}>Resend a new code</Text>

            <TouchableOpacity style={styles.buttonStyle}
                //    onPress={() =>navigation.navigate('Phone Varification') }
                onPress={() => { signIn() }}
            >
                <Text style={styles.text2}>CONTINUE</Text>
            </TouchableOpacity>
        </View>
    )

}

export default OtpScreen



const styles = StyleSheet.create({



    text: {
        fontSize: 18,
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 20,
        color: 'black',
    },

    text1: {
        fontSize: 16,
        marginLeft: 20,

        marginTop: 30,
        color: 'black',
    },

    text3: {
        fontSize: 16,
        marginLeft: 20,

        marginTop: 10,
        color: 'orange',
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
})