import Container from '@components/Container/Container'
import type { NextPage } from 'next'
import Head from 'next/head'
import Projects from '@components/Projects/Projects'
import Splash from '@components/Splash/Splash'
import { ProjectsQuery } from '@api/generated/api'

const Home = ({data} : {data: ProjectsQuery}) => {
  return (
    <div>
      <Head>
        <title>AM - Portfolio</title>
        <meta name="description" content="Portfolio of Aiden Mellor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Splash/>
        <Projects data={data}/>
      </Container>
    </div>
  )
}

export default Home
