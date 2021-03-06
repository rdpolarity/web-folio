import Container from '@components/Container/Container'
import type { NextPage } from 'next'
import Head from 'next/head'
import Projects from '@components/Projects/Projects'
import Splash from '@components/Splash/Splash'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AM - Portfolio</title>
        <meta name="description" content="Portfolio of Aiden Mellor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Splash/>
        <Projects/>
      </Container>
    </div>
  )
}

export default Home
