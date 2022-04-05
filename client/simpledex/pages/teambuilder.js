import Head from 'next/head'
import { Nav } from '../components/Nav'

import { TeamItems } from '../components/teambuilder/team_items'
export default function teambuilder() {
    const router = useRouter();

    useEffect( () => {
        if (!localStorage.getItem('jwt')) {
            router.push('/')
        }
    })
    
    return (
        <>
            <Nav/>
            <TeamItems />
        </>
    )
}
