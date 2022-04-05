import { TeamItems } from '../components/teambuilder/team_items'
import React, { useEffect } from 'react'
import Layout from '../components/layouts/layout'


export default function teambuilder() {

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
