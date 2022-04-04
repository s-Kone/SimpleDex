import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function about() {
    return(
        <>
        {/* <Nav/> */}
            <Head>
                <title>SimpleDex About</title>
                <link rel="icon" href="./favicon.ico" />
            </Head>
            
            <h1>This is the about page</h1>
            <p>We are Saga, Connie, Aidan, and Alex</p>
       
            <style jsx global>{`
                    html,
                    body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                        sans-serif;
                    }

                    * {
                    box-sizing: border-box;
                    }
      `}</style>
        </>
    )
}

export default about;