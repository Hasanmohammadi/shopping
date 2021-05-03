import Head from 'next/head'
import Image from 'next/image'
import FirstPage from '../components/firstpage/FirstPage'
import Navbar from '../components/firstpage/navbar/Navbar'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Shopping</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <FirstPage/>
    </div>
  )
}