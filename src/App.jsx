import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import GitHub from './components/windows/GitHub'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'


function App() {

  const [windowstate, setWindowstate] = useState({
    github:false,
    note:false,
    resume:false,
    spotify:false,
    cli:false
  })
  

  return (
    <main>
      <Nav />
      <Dock windowstate={windowstate} setWindowstate={setWindowstate}  />

      {windowstate.github && <GitHub windowName="github" setWindowState={setWindowstate} />}

      {windowstate.note && <Note windowName="note" setWindowState={setWindowstate} />}
      {windowstate.resume && <Resume windowName="resume" setWindowState={setWindowstate} />}
      {windowstate.spotify && <Spot ify windowName="spotify" setWindowState={setWindowstate} />}

      {windowstate.cli && <Cli windowName="cli" setWindowState={setWindowstate} />}
        

    </main>
  )
}

export default App
