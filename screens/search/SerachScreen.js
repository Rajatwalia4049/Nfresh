import React from 'react'
import {View ,Text,Button} from 'react-native'

function SearchScreen({navigation}){
    return(
        <View>
            <Text>
                flabsdjkfhiau
            </Text>
            <Button 
            title ="go to detail screen"
            onPress={()=>navigation.navigate("Detail")}
            />

        </View>
    )
}
export default SearchScreen;