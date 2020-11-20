import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import LogoutScreen from '../screen/LogoutScreen';
import StackRoot from './StackRoot';
import {Icon} from 'react-native-elements'

const Tab=createBottomTabNavigator()

const TabRoot=()=>{
    
    
    return(
        <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;
                let type;
                if (route.name === 'Home') {
                    iconName = focused? 'home': 'home';
                    type='feather'
                } else if (route.name === 'Logout') {
                    iconName = focused ? 'logout' : 'logout';
                    type='materialicons'
                }
                return <Icon name={iconName} type={type} size={size}  color={color} />;
            },
            tabBarLabel:({focused,color})=>{
                // You can return any component that you like here!
                return null
            }
            })}
        >
            <Tab.Screen name='Home' component={StackRoot}/>
            <Tab.Screen name='Logout' component={LogoutScreen}/>
        </Tab.Navigator>
    )
}

export default TabRoot