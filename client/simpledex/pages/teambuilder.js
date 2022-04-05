import Head from 'next/head'
import { Nav } from '../components/Nav'

import { TeamItems } from '../components/teambuilder/team_items'
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
        <>
            <Nav/>
            <TeamItems />
        </>
    )
}
