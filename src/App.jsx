import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clans from './components/clans'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-middle'>
      <Clans/>
    </div>
  )
}

export default App
