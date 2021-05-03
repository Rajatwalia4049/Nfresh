import React from 'react'
import {View ,Text,Button} from 'react-native'

function UserScreen({navigation}){
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
export default UserScreen;