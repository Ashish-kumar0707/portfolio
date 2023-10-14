import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Ashish | Full-Stack Developer</title>
        <meta name="description" content="I’m a Full-Satck web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" type="image/x-icon" href="https://cdn.dribbble.com/users/433429/screenshots/4635712/media/9dabe9e0a3c099dd0628a9784ca8b12d.jpg"  />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
