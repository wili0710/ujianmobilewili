import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import SplashScreen from './src/screen/SplashScreen'
import AuthStackRoot from './src/navigation/AuthStackRoot'
import StackRoot from './src/navigation/StackRoot'
import TabRoot from './src/navigation/TabRoot';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppMain= () => {
    const Auth=useSelector(state=>state.Auth)
    const dispatch=useDispatch()
    const [loading,setLoading]=useState(false)
    const [datauser,setDataUser]=useState()
    useEffect(()=>{
        // AsyncStorage.getItem('iduser')
        // .then((value)=>{
        //     console.log(value)
        //     dispatch({type:"LOGIN",payload:datauser})
        // })
        // fetchdata()
    },[])

    // const fetchdata=async()=>{
    //     let getData=await AsyncStorage.getItem('iduser')
    //     setDataUser({username:getData})
    //     if(getData!==""){
    //         console.log(getData)
    //         dispatch({type:"LOGIN",payload:datauser})
    //     }
    // } 

    if(loading) {
        return(
            <SplashScreen/>
        )
    }

    return (
        <NavigationContainer>
            {
                Auth.isLogin?
                <TabRoot/>
                :
                <AuthStackRoot/>
            }
        </NavigationContainer>
    );
};



export default AppMain;
