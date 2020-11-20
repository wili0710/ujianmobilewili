import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react';
import {Keyboard, StatusBar, Text, TouchableWithoutFeedback, View} from 'react-native'
import { Button, Icon, Input } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from 'react-redux';

const LoginScreen=()=>{

    useEffect(() => {
        console.log(Auth)
        
    }, []);
       
    const Auth=useSelector(state=>state.Auth)
    const dispatch=useDispatch()
    
    const [datauser,setDataUser]=useState()

    const onInputChangeText=(text)=>{
        setDataUser({username:text})
    }

    const onEnterPress=()=>{

        dispatch({type:"LOADING"})
        console.log(datauser)
        AsyncStorage.setItem('iduser',`${datauser}`)
        dispatch({type:"LOGIN",payload:datauser})
    }


    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center",
            }}>
                <StatusBar backgroundColor={'#0095da'} barStyle={'light-content'}/>
                <Text style={{
                    fontSize:40,
                    fontWeight:"bold",
                    color:"#0095da",
                    paddingVertical:20
                }}>
                    Bluecato
                </Text>
                <Icon
                    type='ionicon'
                    name='fast-food-outline'
                    color='#0095da'
                    size={100}
                    style={{paddingVertical:20}}
                />
                <Input
                    placeholder={"Username"}
                    leftIcon={{type:'font-awesome', name:'user-o', color:'#0095da', style:{paddingLeft:20,paddingRight:5}}}
                    containerStyle={{paddingHorizontal:40,paddingVertical:10}}
                    onChangeText={onInputChangeText}
                />
                <Button
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                        useAngle:true,
                        angle:90,
                        location:[0.4,0.9],
                        colors:['#0095da','#85bffa']
                    }}
                    title="Enter"
                    containerStyle={{width:"70%",paddingVertical:20}}
                    loading={Auth.isLoading}
                    onPress={onEnterPress}
                />
                {/* <Button title="cek" onPress={async()=>console.log(await AsyncStorage.getAllKeys())}/> */}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default LoginScreen