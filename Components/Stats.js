import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";
import {LineChart,BarChart} from "react-native-svg-charts";



const Stats= ({resdata})=>
{
    // const [data,setdata]=useState([40, 55, 60, 70, 80, 77, 87])
    const [timeseries,settimeseries]=useState([])
    const [statewise,setstatewise]=useState([])
    const [weekdata,setweekdata]=useState([])
    const [eightdata,seteightdata]=useState([])
    const [lastweekdata,setlastweekdata]=useState([])
    const [today,settoday]=useState([])
    const [tc,settc]=useState([])
    const [tr,settr]=useState([])
    const [td,settd]=useState([])
    const [dn,setdn]=useState([])
    const [cwnc,setcwnc]=useState(0)
    const [lwnc,setlwnc]=useState(0)
    const [id,setindex]=useState(6)
    const [tot,settot]=useState([])
    useEffect( ()=>
    {

                console.log(resdata)
                settimeseries(resdata.cases_time_series)
                setstatewise(resdata.statewise.filter((item)=>item.state!=='State Unassigned'))
                settoday(resdata.cases_time_series[resdata.cases_time_series.length-1])
                // setweekdata(timeseries.slice(timeseries.length-7,timeseries.length))
                // seteightdata(timeseries.slice(timeseries.length-8,timeseries.length))
                // console.log(today)
                // console.log(timeseries)
                // console.log(statewise)
                // console.log(eightdata)
                total_conf(resdata.cases_time_series)
                total_rec(resdata.cases_time_series)
                total_dead(resdata.cases_time_series)
                new_cas(resdata.cases_time_series)
                new_week(resdata.cases_time_series)
                last_week(resdata.cases_time_series)
                eightdays(resdata.cases_time_series)
                settot(resdata.statewise[0])
                // last_week(resdata.cases_time_series.slice(10,19))
    },[])
    const remove_red=(arr)=>
    {
        arr.filter((item)=>
        {
            item.state!=='State Unassigned'
        })
    }
    const new_week=(arr)=>
    {
        const smar=[]
        let sum=0
        arr.forEach((item,index)=>
        {
            if (index>arr.length-8)
            {
                smar.push(parseInt(item.dailyconfirmed))
                sum=sum+parseInt(item.dailyconfirmed)
            }
        })
        // console.log("this week")
        // console.log(smar)
        setweekdata(smar)
        // console.log(sum)
        setcwnc(sum)
        // console.log(arr)
    }
    const last_week=(arr)=>
    {
        const smar=[]
        let sum=0
        arr.forEach((item,index)=>
        {
            if (index>arr.length-15 && index<arr.length-7)
            {
                smar.push(parseInt(item.dailyconfirmed))
                sum=sum+parseInt(item.dailyconfirmed)
            }
        })
        // console.log("last week")
        // console.log(smar)
        setlastweekdata(smar)
        // console.log(sum)
        setlwnc(sum)
        // console.log(arr)
    }
    const eightdays=(arr)=>
    {
        const smar=[]
        arr.forEach((item,index)=>
        {
            if (index>arr.length-9)
            {
                smar.push(parseInt(item.dailyconfirmed))
            }
        })
        // console.log(smar)
        seteightdata(smar)
        // console.log(arr)
        // console.log(arr)
    }
    const total_conf=(arr)=>
    {
        const smar=[]
        arr.forEach((item,index)=>
        {
                smar.push(parseInt(item.totalconfirmed))
        })
        // console.log(smar)
        settc(smar)
    }
    const total_rec=(arr)=>
    {
        const smar=[]
        arr.forEach(item=>
        {smar.push(parseInt(item.totalrecovered))
        })
        // console.log(smar)
        settr(smar)
    }
    const total_dead=(arr)=>
    {
        const smar=[]
        arr.forEach(item=>
        {smar.push(parseInt(item.totaldeceased))
        })
        // console.log(smar)
        settd(smar)
    }
    const new_cas=(arr)=>
    {
        const smar=[]
        arr.forEach((item,index)=>
        {
                smar.push(parseInt(item.dailyconfirmed))
        })
        // console.log(smar)
        setdn(smar)
    }
    const Bar=({item,index})=>
    {
        const [clr,setclr]=useState('#8694a7')
        useEffect(() => {
            if (index===id)
            {
                setclr('#092d5f')
            }
            else
            {
                setclr('#8694a7')
            }
        }, [index]);

        return(
            <View onStartShouldSetResponder={() =>
            {
                setindex(index)
            }
            } key={index}>
                <Text style={{color:'#092d5f'}}>{Math.floor(item*70)}</Text>
                <View style={{height: item,backgroundColor:clr,borderRadius: 7,width:20 }}>
                </View>
                {/*<Text>{days[index]}</Text>*/}
            </View>

        )
    }
    const Card=({icon,text,num,data,clr})=>
    {
        return(
            <View style={styles.card}>
                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                    <Icon name={icon} size={15} color={"#0E3360"} style={{marginRight: 5}}/>
                    <Text style={{fontSize: 15,color:"#0E3360",fontFamily:'Gilroy-Bold'}}>{text}</Text>
                </View>
                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                    <View>
                        {/*<Text style={{fontSize: 25,color:"#0E3360",fontFamily:'Gilroy-Bold'}}>{num}</Text>*/}
                        <Text style={{fontSize: 25,color:"#0E3360",fontFamily:'Gilroy-Bold'}}>{num}</Text>
                        <Text style={{fontSize:15 ,color:"#0E3360",fontFamily:'Gilroy-Medium'}}>people</Text>
                    </View>
                    <View style={[{flex: 1}]}>
                        <LineChart
                            style={{ height: 100 }}
                            data={data}
                            svg={{stroke: "#0E3360"}}
                            contentInset={{ top: 30, bottom: 30,left:10,right:10 }}
                        >
                        </LineChart>
                    </View>
                </View>
            </View>
        )
    }
    return(
        <View style={[styles.cont,{backgroundColor: 'rgba(196,189,189,0.4)'}]}>
            <View style={styles.toolbar}>
                <Icon name="bars" size={25} color="#0E3360" />
                <Text style={styles.maintext}>Covid19 India Tracker</Text>
            </View>
            <View styles={styles.cardscont}>
                <View style={styles.row}>
                    <Card num={today.totalconfirmed} data={tc} icon={"heart"} text={"Total confirmed"} clr={"#000000"}/>
                    <Card num={today.totaldeceased} data={td} icon={"heart"} text={"Total Death"} clr={"#c71a1a"}/>
                </View>
                <View style={styles.row}>
                    <Card num={today.totalrecovered} data={tr} icon={"heart"} text={"Total recovered"} clr={"#4ddb14"}/>
                    <Card num={today.dailyconfirmed} data={dn} icon={"heart"} text={"New Cases"} clr={"#000000"}/>
                </View>
            </View>
            <View style={styles.newcase}>
                <Text style={{fontSize: 25,color:"#0E3360",textAlign:'center',fontFamily:'Gilroy-Bold'}}>New cases</Text>
                <View style={{flexDirection:'row',justifyContent:'center',paddingTop:10}}>
                    <Text style={{fontSize:35,padding:5,color: '#0E3360',fontFamily:'Gilroy-Medium'}}>{weekdata[id]}</Text>
                    <Text style={{fontSize:15,paddingTop:5,paddingLeft:5,fontFamily:'Gilroy-Medium',color: '#436082'}}>{(eightdata[id+1]-eightdata[id])}</Text>
                    <Icon color={"#436082"} name={"arrow-up"} size={15} style={{paddingTop:5}}/>
                </View>
                <View style={styles.chart}>
                    {
                        weekdata.map((item,index,data)=>
                                <Bar index={index} item={item/70} key={index}/>

                        )
                    }
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <View>
                        <Text style={{fontSize:35,padding:5,fontFamily:'Gilroy-Medium',color: '#0E3360'}}>{(((cwnc-lwnc)/cwnc)*100).toFixed(2)}%</Text>
                        {/*<Text style={{fontSize:35,padding:5,fontFamily:'Gilroy-Medium',color: '#0E3360'}}>{(((48731-38904)/48731)*100).toFixed(2)}%</Text>*/}
                        <Text style={{fontSize:15,color: '#0E3360'}}>Up From Last week</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:35,padding:5,color: '#0E3360'}}>{((today.totalrecovered/today.totalconfirmed)*100).toFixed(2)}%</Text>
                        <Text style={{fontSize:15,color:'#0E3360'}}>Recovery Rate</Text>
                    </View>
                </View>
            </View>
            <View style={styles.state}>
                <Text style={{fontSize: 25,color:"#0E3360",textAlign:'center',fontFamily:'Gilroy-Bold',marginTop:5,marginBottom:5}}>Statewise</Text>
                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <View style={{width:'35%',backgroundColor:'rgba(204,204,204,0.53)',borderRadius:4}}>
                        <Text style={{fontSize:16,padding:2,fontFamily:'Gilroy-Medium',color: '#0E3360'}}>State/UT</Text>
                    </View>
                    <View style={{width:'15%',backgroundColor:'rgba(204,204,204,0.53)',borderRadius:4}}>
                        <Text style={{fontSize:16,padding:2,fontFamily:'Gilroy-Medium',color: '#0E3360'}}>C</Text>
                    </View>
                    <View style={{width:'15%',backgroundColor:'rgba(204,204,204,0.53)',borderRadius:4}}>
                        <Text style={{fontSize:15,padding:2,fontFamily:'Gilroy-Medium',color: '#0E3360'}}>A</Text>
                    </View>
                    <View style={{width:'15%',backgroundColor:'rgba(204,204,204,0.53)',borderRadius:4}}>
                        <Text style={{fontSize:16,padding:2,fontFamily:'Gilroy-Medium',color: '#0E3360'}}>R</Text>
                    </View>
                    <View style={{width:'15%',backgroundColor:'rgba(204,204,204,0.53)',borderRadius:4}}>
                        <Text style={{fontSize:16,padding:2,fontFamily:'Gilroy-Medium',color: '#0E3360'}}>D</Text>
                    </View>
                </View>
                {
                    statewise.slice(1,statewise.length-1).concat(tot).map((item,index)=>

                            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:5,marginTop:5}} key={index}>
                                <View style={{width:'35%',backgroundColor:'rgba(204,204,204,0.53)',borderRadius:4}}>
                                    <Text style={{fontSize:15,padding:2,fontFamily:'Gilroy-Medium',color: '#0E3360',marginTop:2,marginBottom:2}}>{item?.state}</Text>
                                </View>
                                <View style={{width:'15%',backgroundColor:'rgba(204,204,204,0.53)',borderRadius:4}}>
                                    <Text style={{fontSize:15,padding:2,fontFamily:'Gilroy-Medium',color: '#0E3360',marginTop:2,marginBottom:2}}>{item.confirmed}</Text>
                                </View>
                                <View style={{width:'15%',backgroundColor:'rgba(204,204,204,0.53)',borderRadius:4}}>
                                    <Text style={{fontSize:15,padding:2,fontFamily:'Gilroy-Medium',color: '#0E3360',marginTop:2,marginBottom:2}}>{item.active}</Text>
                                </View>
                                <View style={{width:'15%',backgroundColor:'rgba(204,204,204,0.53)',borderRadius:4}}>
                                    <Text style={{fontSize:15,padding:2,fontFamily:'Gilroy-Medium',color: '#0E3360',marginTop:2,marginBottom:2}}>{item.recovered}</Text>
                                </View>
                                <View style={{width:'15%',backgroundColor:'rgba(204,204,204,0.53)',borderRadius:4}}>
                                    <Text style={{fontSize:15,padding:2,fontFamily:'Gilroy-Medium',color: '#0E3360',marginTop:2,marginBottom:2}}>{item.deaths}</Text>
                                </View>
                            </View>
                )}
            </View>
        </View>
    )

}
const styles =StyleSheet.create({
    cont:
        {
            flex:1,
            justifyContent:'space-between',
            // backgroundColor: '#d5cbcb'
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
        color:'#0E3360',
        fontSize:30,
        fontFamily:'Gilroy-Bold'
    },
    cardscont:
        {

        },
    row:
        {
            flexDirection: 'row',
            justifyContent:'space-evenly'
        },
    card:
        {
            width: '40%',
            backgroundColor:"white",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.30,

            elevation: 13,
            marginBottom:10,
            marginTop:10,
            borderRadius:10,
            padding:10
        },
    newcase:
        {
            width:'90%',
            marginRight:'auto',
            marginLeft:'auto',
            borderRadius: 20,
            borderColor:'#8694a7',
            backgroundColor: '#fff',
            elevation: 10,
            padding:10,
            marginTop: 10,
            marginBottom: 20


    },
    chart:{
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end'
    },
    state:{
        width:'90%',
        backgroundColor:'#fff',
        marginRight: 'auto',
        marginLeft: 'auto',
        padding:10,
        elevation:10,
        marginTop:10,
        marginBottom:10,
        borderRadius: 20
    }
})
export default Stats;
