import Header from '../components/header'
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
        <Header/>
        <PokemonDisplay />
        </>
    )
}
