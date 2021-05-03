import React,{useState} from 'react'
import {View ,Text,StyleSheet, Image,ImageBackground,ScrollView,TouchableOpacity,FlatList,TextInput} from 'react-native'





function Category(){

 const [gallery, setgallery] = useState([
        { image: {uri: 'https://cdn2.vectorstock.com/i/1000x1000/63/96/fresh-fruits-product-poster-design-vector-11586396.jpg'}, title: 'Order Now',  key: '1' },
        { image:{uri:'https://st.depositphotos.com/1541480/4980/v/950/depositphotos_49803039-stock-illustration-vintage-cupcake-poster-set-design.jpg'}, title: 'Order Now',key: '2' },
        { image:{uri:'https://cdn-thumbs.barewalls.com/rice-the-staple-food-of-asians_bwc41501410.jpg'}, title: 'Order Now',key: '3' },
        { image:{uri:'https://zestyvibe.com/wp-content/uploads/2020/05/organic_vegetables_basket.jpg'}, title: 'Order Now', key: '4' },
      ]);

    return(
        <View>
         <ScrollView>
             <View style={{padding:16, flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontSize:22,fontWeight:'bold'}}>Category</Text>
                 <TouchableOpacity>
                 <Text style={{fontSize:14,fontWeight:'bold'}}>View all</Text>
                 </TouchableOpacity>
                  
             </View>
             <View>
                 <FlatList
                 horizontal={true}
                 showsHorizontalScrollIndicator={false}

                 data ={gallery}
                 renderItem={({item})=>{
                     return(
                         <View style={{paddingLeft:16}}>
                             <TouchableOpacity >
                          <Image source={item.image} style={{width:140,height:180,borderRadius:10,marginRight:8}}/>
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
export default Category;





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