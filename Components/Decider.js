import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {ScrollView} from "react-native";
import Stats from "./Stats";
import Loading from "./Loading";
const Decider=()=>
{
    const [data,setdata]=useState([])
    const [dataloaded,setdataloaded]=useState(false)
    const [screentimeout,setscreenout]=useState(false)
    useEffect(()=>
    {
        console.log("hello from use effect")
        splash()
        loaddata()
        // fetch('https://api.covid19india.org/data.json')
        //     .then(res=>console.log("log"))
            // .then(response => response.json())
            // .then(data => console.log(data));
    },[])
    const splash=()=>
    {
        setTimeout(()=>{
            setscreenout(true)
            // setdataloaded(true)
        },3000)
    }
    const loaddata=()=>
    {
        axios.get('https://api.covid19india.org/data.json')
            .then(res=> {
                console.log(res.data)
                setdata(res.data)
                setdataloaded(true)
            })
    }
    if (screentimeout && dataloaded)
    {
        return (
            <>
                <ScrollView>
                    <Stats resdata={data}/>
                </ScrollView>
            </>
        );
    }
    else
    {
        return (
            <Loading/>
        )
    }

}
export default Decider;
