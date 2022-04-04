import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export const Team = ({ data }) => {
    const [visible, setVisbility] = useState(true)
    const HandleonClickDelete = () => {
        setVisbility(false)
        console.log('get deleted son')
    }
    console.log(data.pokemon)
    return (
        <>
            {visible ? <div>
                < h1 > Team {data.userteamid}</h1 >

                {data.pokemon.map((info, key) => {
                    return (
                        <div key={key}> {info.Name} </div>
                    )
                })}
                < button onClick={HandleonClickDelete} >Delete Team</button >
            </div > : <div />}

        </>
    )
}