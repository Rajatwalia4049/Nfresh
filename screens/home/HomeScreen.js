import React from 'react'
import {View ,Text,Button} from 'react-native'
import SearchBar from '../components/SearchBar'
import Category from './Category'
import BestValue from './BestValue'
import BestSeller from './BestSeller'
import { ScrollView } from 'react-native-gesture-handler'
import ShopOffer from './ShopOffer'
import FreshPickup from './FreshPickup'
import GrabOrGone from './GrabOrGone'

function HomeScreen({navigation}){
    return(
        <View>
           
            <ScrollView>

            <SearchBar/>
            <BestValue/>
            <Category/>
            <BestSeller/>
            <ShopOffer/>
            <FreshPickup/>
            <GrabOrGone/>

            </ScrollView>
           
        </View>
    )
}
export default HomeScreen;