import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/favicon-32x32.png'
import { CoinData } from './components/CoinData'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twofold: Stock and Cryptocurrency Prices</title>
      </Head>

    <body className="d-flex h-100 text-center text-white bg-dark">
        <div className="d-flex w-100 h-100 p-3 mx-auto flex-column"> 
          <div className="nav-bar-container mx-auto w-100">
            <header className="mb-auto">
                <div>
                    <a href="/">
                      <img className="float-md-start mb-0 img-icons" src={Logo}/>
                    </a>
                    <h3 className="float-md-start mb-0">Twofold</h3>
                    <nav className="nav nav-masthead justify-content-center float-md-end">
                        <Link href="/">
                            <a className="nav-link">Home</a>
                        </Link>
                        <Link href="/stock">
                        <a className="nav-link" href="#">Stocks</a>
                        </Link>
                        <a className="nav-link active" aria-current="page">Coins</a>
                        <a className="nav-link" href="#">About</a>
                    </nav>
                </div>
            </header>
          </div>
            <main className="px-3 container table-container">
                <CoinData />
            </main>
          </div>
    </body>
    </div>
  )
}
