import React from 'react'
import {View, TextInput,Text,StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'
import { Searchbar } from 'react-native-paper'

const SearchBar =()=>{
    return(
        <View style={styles.backgroundStyle}>
      <Feather name ="search" style={styles.iconStyle}/>
      <TextInput style={styles.textInput} placeholder="Search"/>
        </View>
    )
}
export default SearchBar;
const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop:10,
        backgroundColor: 'lightgrey',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        alignItems:'center'
    },
    textInput:{
       
        flex:1,
        fontSize:18

    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center'

    }

})

