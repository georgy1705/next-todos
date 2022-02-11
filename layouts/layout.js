import Head from "next/head"
import Link from "next/link"
import styles from '../styles/Layout.module.css'

export const MainLayout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Next Todos</title>
                <meta name="description" content="This is todos app" />
                <meta name="keywords" content="next, javascript, nextjs, react" />
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className={"navbar navbar-expand-lg navbar-light bg-light " + styles.navbar}>
                <Link href={'/'}><a className="navbar-brand brand">Next Todos</a></Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link href={'/'}><a className="nav-link">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/todos'}><a className="nav-link">Todos</a></Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}