import React,{useState} from 'react'
import {View ,Text,StyleSheet, Image,ImageBackground,ScrollView,TouchableOpacity,FlatList,TextInput} from 'react-native'





function GrabOrGone(){

    const [gallery, setgallery] = useState([
        { image: {uri: 'https://c8.alamy.com/comp/2B7TMCD/healthy-food-poster-with-broccoli-and-vegetables-2B7TMCD.jpg'}, title: 'Order Now',  key: '1' },
        { image:{uri:'https://cdn-thumbs.barewalls.com/healthy-meal-with-bread-cereals_bwc13302743.jpg'}, title: 'Order Now',key: '2' },
        { image:{uri:'https://pro2-bar-s3-cdn-cf.myportfolio.com/8baf9aec-110d-4a6a-806f-974ede8c7535/bc5a9565-59a2-4cbf-99cf-b72ed694da91_rw_1920.jpg?h=da1c4d7f7049a7c543e4a680b941b312'}, title: 'Order Now',key: '3' },
        { image:{uri:'https://zestyvibe.com/wp-content/uploads/2020/05/organic_vegetables_basket.jpg'}, title: 'Order Now', key: '4' },
        { image:{uri:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/flyer-iced-latte-template-design-cb0dd42f05cd318da4329d00e5de3d2f.jpg?ts=1597054402'}, title: 'Order Now', key: '5' },
        { image:{uri:'https://zestyvibe.com/wp-content/uploads/2020/05/organic_vegetables_basket.jpg'}, title: 'Order Now', key: '6' },
      ]);

    return(
        <View>
         <ScrollView>
             <View style={{padding:16, flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontSize:22,fontWeight:'bold'}}>Grab Or Gone</Text>
                 <TouchableOpacity>
                 <Text style={{fontSize:14,fontWeight:'bold'}}>View all</Text>
                 </TouchableOpacity>
             </View>
             <View>
                 <FlatList
                //  horizontal={true}
                numColumns={3}
                 data ={gallery}
                 renderItem={({item})=>{
                     return(
                         <View style={{paddingLeft:16}}>
                             <TouchableOpacity >
                          <Image source={item.image} style={{width:110,height:180,borderRadius:10,marginRight:8,marginTop:18}}/>
                          {/* <Text style={styles.ImageText}>{item.title}</Text> */}
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
export default GrabOrGone;





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