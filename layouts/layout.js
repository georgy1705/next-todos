import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router";
import styles from '../styles/Layout.module.css'

export const MainLayout = ({ children }) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Next Todos</title>
                <meta name="description" content="This is todos app" />
                <meta name="keywords" content="next, javascript, nextjs, react" />
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className={"navbar navbar-expand-sm navbar-light bg-light " + styles.navbar}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <Link href={'/'}><a className="navbar-brand brand">Next Todos</a></Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link href={'/'}><a className={router.pathname == "/" ? "nav-link active" : "nav-link"}>Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/todos'}><a className={router.pathname == "/todos" ? "nav-link active" : "nav-link"}>Todos</a></Link>
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