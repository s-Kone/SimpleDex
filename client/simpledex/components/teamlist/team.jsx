import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export const Team = ({ key_, data }) => {
    const [visible, setVisbility] = useState(true)
    const HandleonClickDelete = () => {
        setVisbility(false)
        console.log('get deleted son')
    }

    return (
        <>
            {visible ? <div key={key_}>
                < h1 > {data.title}</h1 >
                {/* <img src={data.thumbnailUrl} /> */}
                < button onClick={HandleonClickDelete} ></button >
            </div > : <div />}

        </>
    )
}