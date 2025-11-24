
import './App.css'
import Repos from './components/Repos'
import Hero from './components/Hero'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <Nav />
      <main className="App mx-auto container px-4">
        <Hero />
        <Repos />
      </main>
    </>
  )
}

export default App
