import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLinkProps } from '@react-navigation/native';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableWithoutFeedback,ImageBackground} from 'react-native'
import { Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

const BoxNonClick=(props)=>{
    return(
        <View style={{
            flexBasis:"25%",
            alignItems:"center",
            justifyContent:"center",
            paddingVertical:10
        }}>
            {props.children}
        </View>
    )
}


const HomeScreen=(props)=>{
    const [product,setProduct]=useState()
    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata= async ()=>{
        try {
            const res = await Axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating',{
                headers:{
                    "user-key":"a42504c5fb331bd194e7b1388479a507"
                }})
            setProduct(res.data.restaurants)
        } catch (error) {
            console.log(error)
        }
    }

    const onTodetailsPress=(item)=>{
       
        props.navigation.navigate('Details',{data:item})
    }

    const RenderProduct=({item})=>{ //item sama dengan val di map
        return(
            <TouchableWithoutFeedback onPress={()=>onTodetailsPress(item)}>
                <View>
                    <ImageBackground
                            source={{uri: item.restaurant.featured_image||"https://static.vecteezy.com/system/resources/thumbnails/000/463/798/original/Healthy-Food.jpg"}}
                            style={styles.containerimageBgstyle}
                            imageStyle={{borderRadius:5}}
                        >
                    </ImageBackground>
                    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0, 0, 0, 0.4)',flex:1}}>
                        <Text>
                            {item.restaurant.user_rating.aggregate_rating}
                        </Text>
                        <Text style={{color:'white',textTransform:'capitalize'}}>
                            {item.restaurant.name}
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    const Auth=useSelector(state=>state.Auth)
    return(
        <ScrollView>
            
            <View style={{
                // flex:1,
                // justifyContent:"center",
                // alignItems:"center"
            }}>
                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:"center",
                    paddingVertical:10,
                    paddingHorizontal:20,
                    backgroundColor:"#0095da"
                }}>
                    <Icon
                        type='antdesign'
                        name='profile'
                        color='white'
                        size={20}
                    />
                    <Text style={styles.text1}>
                        Hola, {Auth.username}
                    </Text>
                </View>
                <View style={{
                    paddingHorizontal:30,
                    paddingVertical:30,
                    flexDirection:"row",
                    flexWrap:"wrap"
                }}>
                    <BoxNonClick>
                        <Icon
                                type="antdesign"
                                name="creditcard"
                                color="#0095da"
                                size={40}
                            />
                        <Text>
                            Credit
                        </Text>
                    </BoxNonClick>
                    <BoxNonClick>
                        <Icon
                                type="antdesign"
                                name="creditcard"
                                color="#0095da"
                                size={40}
                            />
                        <Text>
                            Variant
                        </Text>
                    </BoxNonClick>
                    <BoxNonClick>
                        <Icon
                                type="antdesign"
                                name="creditcard"
                                color="#0095da"
                                size={40}
                            />
                        <Text>
                            Recipe
                        </Text>
                    </BoxNonClick>
                    <BoxNonClick>
                        <Icon
                                type="antdesign"
                                name="creditcard"
                                color="#0095da"
                                size={40}
                            />
                        <Text>
                            Location
                        </Text>
                    </BoxNonClick>
                    <BoxNonClick>
                        <Icon
                                type="antdesign"
                                name="creditcard"
                                color="#0095da"
                                size={40}
                            />
                        <Text>
                            Cart
                        </Text>
                    </BoxNonClick>
                    <BoxNonClick>
                        <Icon
                                type="antdesign"
                                name="creditcard"
                                color="#0095da"
                                size={40}
                            />
                        <Text>
                            Pizza
                        </Text>
                    </BoxNonClick>
                    <BoxNonClick>
                        <Icon
                                type="antdesign"
                                name="creditcard"
                                color="#0095da"
                                size={40}
                            />
                        <Text>
                            Burger
                        </Text>
                    </BoxNonClick>
                    <BoxNonClick>
                        <Icon
                                type="antdesign"
                                name="creditcard"
                                color="#0095da"
                                size={40}
                            />
                        <Text>
                            More
                        </Text>
                    </BoxNonClick>
                    
                    <View style={{marginVertical:10}}>
                        <FlatList
                            numColumns={2}
                            data={product}
                            keyExtractor={(item)=>`${item.restaurant.id}`}//harsu string biar nggak warning
                            renderItem={RenderProduct}
                            showsVerticalScrollIndicator={false}
                            // refreshControl={<RefreshControl colors={['#FE6B8B','#FF8E53']} progressBackgroundColor={'white'} onRefresh={OnRefreshFlatlist} refreshing={refresh} />}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    text1:{
        fontSize:20,
        textTransform:"capitalize",
        color:"white"
    },
    containerimageBgstyle:{
        height:200,
        width:'100%',
        marginVertical:5,
    }
})

export default HomeScreen