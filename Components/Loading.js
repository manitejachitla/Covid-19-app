import React from 'react';
import LottieView from 'lottie-react-native'
import {Text, View} from 'react-native';
const Loading= ()=>
{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{
                color:'#0E3360',
                fontSize:30,
                textAlign:'center',
                fontFamily:'Gilroy-Bold'}}>Covid19 India Tracker</Text>
            {/*<Text style={{padding: 5,*/}
            {/*    margin:5,*/}
            {/*    color:'#0E3360',*/}
            {/*    fontSize:15,*/}
            {/*    textAlign:'center',*/}
            {/*    fontFamily:'Gilroy-Bold'}}>loading please wait.....</Text>*/}
            <View style={{width:250,height:250}}>
                <LottieView source={require('../anim/main.json')} autoPlay loop />
            </View>
        </View>
    )

}
export default Loading;
