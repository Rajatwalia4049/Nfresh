import * as React from 'react';
import {View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
 Text,
  TouchableRipple,
  Switch,
  Drawer,
  
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const DrawerContent = props => {
  return (
    <View style={{flex: 1,   backgroundColor:'#678E21', }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 45}}>
              <Avatar.Image source={require('../../assets/profile.jpeg')} size={70} />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Amit Patel</Title>
                <Caption style={styles.caption}>@amitpatel</Caption>
              </View>
            </View>
          </View>
           <Drawer.Section style={styles.drawerSection}>
           <DrawerItem
          icon={({color, size}) => (
            <Icon name="account" color={color} size={size} />
          )}   
   
          label="My Profile"
          activeTintColor='blue'
          inactiveTintColor="white"
          
          onPress={()=>{props.navigation.navigate
            ('User')
            
        }}
        />
           <DrawerItem
          icon={({color, size}) => (
            <Icon name="cart" color={color} size={size} />
          )}
          label="My Order"
          inactiveTintColor="white"
          onPress={()=>{props.navigation.navigate
            ('Order')
        }}
        />
           <DrawerItem
          icon={({color, size}) => (
            <Icon name="heart" color={color} size={size} />
          )}
          label="My Favourite"
          inactiveTintColor="white"
          onPress={()=>{props.navigation.navigate
            ('Favourite')
        }}
        />
           <DrawerItem
          icon={({color, size}) => (
            <Icon name="map-marker" color={color} size={size} />
          )}
          label="My Address"
          inactiveTintColor="white"
          onPress={()=>{props.navigation.navigate
            ('Address')
        }}
        />
           <DrawerItem
          icon={({color, size}) => (
            <Icon name="cog" color={color} size={size} />
          )}
          label="Setting"
          inactiveTintColor="white"
          onPress={()=>{props.navigation.navigate
            ('Setting')
        }}
        />
           <DrawerItem
          icon={({color, size}) => (
            <Icon name="account-child" color={color} size={size} />
          )}
          label="Support Center"
          inactiveTintColor="white"
          onPress={()=>{props.navigation.navigate
            ('Support')
        }}
        />
        
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="gift-outline" color={color} size={size} />
          )}
          label="Invite a Friend"
          inactiveTintColor="white"
        />
        
       
           </Drawer.Section>

        </View>
    
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={40}
                        />
                    )}
                    label="Sign Out"
                    inactiveTintColor="white"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
    </View>
  );
};
export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor:'#678E21'
    
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color:'#F4F5F9'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color:'#F4F5F9'
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
    color:'#F4F5F9'
  },
  drawerSection: {
    marginTop: 15,
    
    
  },
  bottomDrawerSection: {
   
    borderTopColor: '#f4f4f4',
    backgroundColor:'#678E21'
    
  },

});
