import { PokemonDisplay } from '../components/search/pokemon_display'
import Layout from '../components/layouts/layout'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

export default function search() {

    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('jwt');
            if (!token) {
                router.push('/')
            }
    })

    return (
        <>
        <Layout>
        <PokemonDisplay />
        </Layout>
        </>
    )
}
