import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native'
import { Icon } from 'react-native-elements';

const DetailScreen=(props)=>{

    const {name,featured_image,cuisines,timings}=props.route.params.data.restaurant
    const {aggregate_rating}=props.route.params.data.restaurant.user_rating
    const {address}=props.route.params.data.restaurant.location

    return(
        <View style={{
            // flex:1,
            // justifyContent:"center",
            // alignItems:"center"
        }}>
            <View style={{
                flexDirection:"row",
                justifyContent:"flex-start",
                alignItems:"center",
                paddingVertical:10,
                paddingHorizontal:20,
                backgroundColor:"#0095da"
            }}>
                <Icon
                    type='ionicons'
                    name='arrow-back'
                    color='white'
                    size={20}
                    onPress={()=>props.navigation.goBack()}
                />
                <Text style={{marginHorizontal:20,color:"white"}}>
                    {name}
                </Text>
            </View>
            <View>
                <ImageBackground
                                source={{uri: featured_image||"https://static.vecteezy.com/system/resources/thumbnails/000/463/798/original/Healthy-Food.jpg"}}
                                style={styles.containerimageBgstyle}
                                imageStyle={{borderRadius:5}}
                    />
                    <Text>
                        Rating : {aggregate_rating}
                    </Text>
                    <Text>
                        Address : {address}
                    </Text>
                    <Text>
                        Cuisines : {cuisines}
                    </Text>
                    <Text>
                        Open : {timings}
                    </Text>
                    <Text>
                        Open : {timings}
                    </Text>
                    <Text>
                        Cost for 2: {props.route.params.data.restaurant.currency} {props.route.params.data.restaurant.average_cost_for_two}
                    </Text>
            </View>
        </View>
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
export default DetailScreen