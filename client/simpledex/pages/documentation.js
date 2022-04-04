import axios from "axios";
import { response } from "express";

function doc(){
    axios.get('https://alexgiasson.me/comp4537/termproject/api/v1/documentation').then((response)=>{
        console.log(response.data);
    })
}

export default function documentation(){

    return(
        <>
        <head>
            <title>SimpleDex documentation</title>
        </head>
        <h2>Documentation</h2>
        </>
    )
}