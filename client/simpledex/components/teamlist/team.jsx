import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { getAuthHeaders } from '../../util/token';
import { TeamMember } from '../teamlist/teamMember'


export const Team = ({ data, clicked }) => {
    const [visible, setVisibility] = useState(true)

    const HandleonClickDelete = () => {
        setVisibility(false)
        console.log('get deleted son')
    }

    return (
        <>
            {visible ? <div className='teamContainer'>
                < h1 > Team {data.userteamid}</h1 >

                {data.pokemon.map((info, key) => {
                    return (
                        // <div key={key}>
                            < TeamMember key={key} pokemon={info} />
                        // {/* </div> */}
                    )
                })}
                < button className='deleteBtn' onClick={HandleonClickDelete} >Delete Team</button >
            </div > : <div />}

            <style jsx>{`
                .teamContainer {
                    margin:4%;
                    padding:1%;
                    border-style:solid;
                }

                .deleteBtn {
                    padding:1%;
                    float:right;
                }
            `}</style>
        </>

            
    )
}
