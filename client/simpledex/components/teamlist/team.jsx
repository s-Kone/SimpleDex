import React, { useState, useEffect } from "react";
import { TeamMember } from '../teamlist/teamMember'
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Team = ({ data, clicked }) => {
    const router = useRouter()

    const [visible, setVisibility] = useState(true)

    const handleonClickDelete = () => {
        setVisibility(false)
        console.log('get deleted son')
    }

    const handleEdit = () => {
        if (localStorage) {
            localStorage.setItem('team', JSON.stringify(data))
            router.push('/teambuilder')
        }
        else {
            toast("Please use a local storage-enabled browser")
        }
    }

    return (
        <>
            {visible ? <div className='teamContainer' onClick={handleEdit}>
                < h1 > Team {data.userteamid}</h1 >

                {data.pokemon.map((info, key) => {
                    return (
                        // <div key={key}>
                        < TeamMember key={key} pokemon={info} />
                        // {/* </div> */}
                    )
                })}
                < button className='deleteBtn' onClick={handleonClickDelete} >Delete Team</button >
            </div > : <div />}
            <ToastContainer />
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
