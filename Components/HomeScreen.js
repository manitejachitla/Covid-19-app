import React,{useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import image1 from '../assets/images/character.png'
import image2 from '../assets/images/character2.png'
import {
    SafeAreaView,
    StyleSheet,
    Button,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native'
import {LineChart} from 'react-native-svg-charts'
const HomeScreen = ({navitagtion}) => {
    const data = [0, 12, 26, 30, 40, 55, 65, 60, 70, 80, 77, 87, 90]

    return (
        <View style={styles.con}>
            <View style={styles.toolbar}>
                <Icon name="bars" size={25} color="white" />
                <Text style={styles.maintext} onPress={()=>navitagtion.navigate('Home')}>Covid19 India Tracker</Text>
            </View>
            <View style={styles.checkup}>
                <Image source={image1} style={{marginRight:'auto',flex: 1}}/>
                <View style={{width:'70%'}}>
                    <Text style={{fontSize: 20,color: 'white'}}>Take the Self Checkup!</Text>
                    <Text style={{fontSize: 16,color: 'white',textAlign:'left'}}>contains several checklist question to check your physical condition</Text>
                </View>
            </View>
            <View style={styles.update}>
                <View style={{marginRight: 'auto'}}>
                    <Text style={[{marginTop: 0,padding: 0,color: 'white',fontSize: 25}]}>Transmission Update</Text>
                    <Text style={{fontSize: 16,color: 'white'}}>Last update:14 March 20</Text>
                </View>
                <View style={{marginLeft: 'auto'}}>
                    <Icon name="redo-alt" size={15} color="white" />
                </View>
            </View>
            <View style={styles.cards}>
                <View style={styles.card}>
                    <View style={{backgroundColor:"#6c624f",padding:10,borderRadius: 40,borderWidth:1,borderColor:'#fcc666',marginTop:5,marginBottom:5}}>
                        <Icon name="redo-alt" size={15} color="#FCC666" />
                    </View>
                    <Text style={{color: '#ffb531',margin:8}}>[+25]</Text>
                    <Text style={{color: '#ffb330',fontSize: 20}}>7987</Text>
                    <Text style={{color: '#FCC666',margin:8}}>Active</Text>
                </View>
                <View style={styles.card}>
                    <View style={{backgroundColor:"#67906c",padding:10,borderRadius: 40,borderWidth:1,borderColor:'#77FF89',marginTop:5,marginBottom:5}}>
                        <Icon name="heart" size={15} color="#77FF89" />
                    </View>
                    <Text style={{color: '#77FF89',margin:8}}>[+5]</Text>
                    <Text style={{color: '#77FF89',fontSize: 20}}>1,109</Text>
                    <Text style={{color: '#77FF89',margin:8}}>Recovered</Text>
                </View>
                <View style={styles.card}>
                    <View style={{backgroundColor:"#6a4545",padding:10,borderRadius: 40,borderWidth:1,borderColor:'#FF5050',marginTop:5,marginBottom:5}}>
                        <Icon name="times" size={15} color="#FF5050" />
                    </View>
                    <Text style={{color: '#FF5050',margin:8}}>[+25]</Text>
                    <Text style={{color: '#FF5050',fontSize: 20}}>335</Text>
                    <Text style={{color: '#FF5050',margin:8}}>Deceased</Text>
                </View>
            </View>
            <View style={[styles.update,{marginRight: 'auto'}]}>
                <Text style={[{marginTop: 0,padding: 0,color: 'white',fontSize: 20}]}>Spread Trends</Text>
            </View>
            <View style={[styles.update,{marginRight:'auto',flexDirection:'column',backgroundColor:'#314a6c',borderRadius: 15}]}>
                <View style={[{width:'100%',
                    padding:5,flexDirection:'row',alignItems:'center'}]}>
                    <Text style={{color: '#FCC666',fontSize:20}}>ActiveCases</Text>
                    <Text style={{color: '#ffb330',fontSize: 14,marginLeft:'auto'}}>7987[+25 cases]</Text>
                </View>
                <View style={[{width:'100%', padding:5,flexDirection:'row',alignItems:'center',borderBottomColor:'#ffffff',borderBottomWidth:1}]}>
                    <Text style={{color: '#47ff25',fontSize:14,marginRight:20}}>Monthly</Text>
                    <Text style={{color: '#ffffff',fontSize: 14}}>Weekly</Text>
                </View>
                <View style={[{width:'100%',
                    marginBottom:10,height:180}]}>
                    <LineChart
                        style={{ height: 180 }}
                        data={data}
                        svg={{ stroke: 'rgb(255,255,255)' }}
                        contentInset={{ top: 20, bottom: 20 }}
                    >
                    </LineChart>
                </View>
            </View>




        </View>
    );
};

const styles = StyleSheet.create(
    {
        con:{
            flex:1,
            backgroundColor:'#0E3360',
            // alignItems: 'center'
        },
        toolbar:{
            flexDirection:'row',
            alignItems:'center',
            padding:5,
            margin:5
        },
        maintext:{
            padding: 10,
            margin:5,
            color:'white',
            fontSize:30,
            fontFamily:'Gilroy-Bold'
        },
        checkup:
            {
                flexDirection:'row',
                backgroundColor: '#ff4b63',
                padding:20,
                width:'90%',
                borderRadius:15,
                marginLeft:'auto',
                marginRight:'auto',
                alignItems:'center'
            },
        update:
            {
                flexDirection:'row',
                marginTop:20,
                width:'90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                alignItems:'center'
            },
        cards:{
            flexDirection:'row',
            width:'90%',
            marginLeft:'auto',
            marginRight:'auto',
            marginTop: 20,
            justifyContent:'space-between'
            // alignItems:'center'
        },
        card:
            {
                backgroundColor:'#314a6c',
                width:'30%',
                alignItems:'center',
                borderRadius: 15,
                padding:5
            }
    }
)
export default HomeScreen;
