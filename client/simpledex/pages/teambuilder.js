import Head from 'next/head'
import { TeamItems } from '../components/teambuilder/team_items'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

export default function teambuilder() {
    const router = useRouter();

    useEffect( () => {
        if (!localStorage.getItem('jwt')) {
            router.push('/')
        }

        // get chosen team from teamList page
        let team = localStorage.getItem('team')
        if (team) {
            localStorage.removeItem('team')
            let teamToEdit = JSON.parse(team)
            console.log(teamToEdit)
            // use it
        }
    })

    return (
        <TeamItems />
    )
}
