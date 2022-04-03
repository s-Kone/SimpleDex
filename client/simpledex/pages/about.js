import Head from 'next/head'
import styles from "../styles/about.module.css"

function about() {
    return(
        <>
            <Head>
                <title>SimpleDex About</title>
                <link rel="icon" href="./favicon.ico" />
            </Head>

            <div className={styles.container}>
            <h2>About Us</h2>
            <p>SimpleDex is a powerfull tool that can help you look up certain pokemons</p>
            </div> 


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