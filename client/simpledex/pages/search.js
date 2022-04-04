import Head from 'next/head'
import { PokemonDisplay } from '../components/search/pokemon_display'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

export default function search() {
    const router = useRouter()

    useEffect( () => {
        if (!localStorage.getItem('jwt')) {
            router.push('/')
        }
    })

    return (
        <>
        {/* <Nav /> */}
        <head>
            <title>SimplDex search</title>
            <link rel='icon' href="/favicon.ico"/>
        </head>
    
        <PokemonDisplay />
        {/* <Footer/> */}
        </>
    )
}
