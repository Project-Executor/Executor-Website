import Nav from './components/Nav'
import Hero from './components/Hero'
import HowToPlay from './components/HowToPlay'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Story from './components/Story'
import Behind from './components/Behind'
import Footer, { Cta } from './components/Footer'
import { useTheme } from './useTheme'

export default function App() {
  const [theme, setTheme] = useTheme()

  return (
    <div className={`site ${theme}`}>
      <Nav theme={theme} onTheme={setTheme} />
      <main>
        <Hero />
        <HowToPlay />
        <Features />
        <Gallery />
        <Story />
        <Behind />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
