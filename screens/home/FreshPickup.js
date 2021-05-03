import React,{useState} from 'react'
import {View ,Text,StyleSheet, Image,ImageBackground,ScrollView,TouchableOpacity,FlatList,TextInput} from 'react-native'





function FreshPickup(){

 const [gallery, setgallery] = useState([
        { image: {uri: 'https://zestyvibe.com/wp-content/uploads/2020/05/organic_vegetables_basket.jpg'}, title: 'Order Now',  key: '1' },
        { image:{uri:'https://zestyvibe.com/wp-content/uploads/2020/05/organic_vegetables_basket.jpg'}, title: 'Order Now',key: '2' },
        { image:{uri:'https://zestyvibe.com/wp-content/uploads/2020/05/organic_vegetables_basket.jpg'}, title: 'Order Now',key: '3' },
        { image:{uri:'https://zestyvibe.com/wp-content/uploads/2020/05/organic_vegetables_basket.jpg'}, title: 'Order Now', key: '4' },
      ]);

    return(
        <View>
         <ScrollView>
             <View style={{padding:16 ,flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontSize:22,fontWeight:'bold'}}>Fresh Pickups </Text>
                 <TouchableOpacity>
                 <Text style={{fontSize:14,fontWeight:'bold'}}>View all</Text>
                 </TouchableOpacity>
             </View>
             <View>
                 <FlatList
                 horizontal={true}
                 data ={gallery}
                 renderItem={({item})=>{
                     return(
                         <View style={{paddingLeft:16}}>
                             <TouchableOpacity >
                          <Image source={item.image} style={{width:150,height:200,borderRadius:10,marginRight:8}}/>
                          <Text style={styles.ImageText}>{item.title}</Text>
                             </TouchableOpacity>
                            
                         </View>
                     )
                 }}
                 
                 
                 />
             </View>
         </ScrollView>
     

        </View>
    )
}
export default FreshPickup;





const styles = StyleSheet.create({

    ImageText:{
        position:'absolute',
        color:'white',
        marginTop:4,
        fontSize:14,
        left:5,
        bottom:10,
        padding:5,
        backgroundColor:'black',
        // borderWidth:2,
        borderRadius:5,
        


    }
})