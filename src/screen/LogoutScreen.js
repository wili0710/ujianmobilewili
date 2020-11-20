import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {View} from 'react-native'
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

const Logout=()=>{
    const Auth=useSelector(state=>state.Auth)
    const dispatch=useDispatch()

    const onLogoutpress=async()=>{
        let keys = await AsyncStorage.getAllKeys()
        console.log(keys)
        dispatch({type:"LOADING"})
        await AsyncStorage.removeItem('iduser')
        dispatch({type:"LOGOUT"})
    }

    return(
        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Button
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                        useAngle:true,
                        angle:90,
                        location:[0.4,0.9],
                        colors:['#0095da','#85bffa']
                    }}
                    title="Logout"
                    containerStyle={{width:"70%",paddingVertical:20}}
                    loading={Auth.isLoading}
                    onPress={onLogoutpress}
                />
        </View>
    )
}

export default Logout