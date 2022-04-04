import Head from 'next/head'
import Link from 'next/link'
import { TeamList } from '../components/teamlist/teamlist'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

export default function teamlist() {
    const router = useRouter();

    useEffect( () => {
        if (!localStorage.getItem('jwt')) {
            router.push('/')
        }
    })

    return (
        <>
            <Link href="/teambuilder">
                <a>New Team</a>
            </Link>
            <TeamList />
        </>
    )
}
