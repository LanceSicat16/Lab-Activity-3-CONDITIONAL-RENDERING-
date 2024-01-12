import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/welcome'
import Hello from './components/Hello'
import Greetings from './components/Conditional-demo-1'
import Rainy from './components/Conditional-Demo-2'
import Rainy2 from './components/Conditional-Demo-3'
import Rainy4 from './components/Conditional-demo-4'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Greetings/>
    <Rainy/>
    <Rainy2/>
    <Rainy4/>
    <Sunny4/>

      {/*<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
    </>
  ) 
}

export default App
