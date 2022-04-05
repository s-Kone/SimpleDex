import Layout from '../components/layouts/layout';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { TeamItems } from '../components/teambuilder/team_items'


export default function teambuilder() {
    const router = useRouter();

    useEffect(() => {
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
        <>
        <head>
            <title>SimpleDex Teams</title>
        </head>
            <Layout>
                <br></br>
                <TeamItems />
            </Layout>
        </>
    )
}
