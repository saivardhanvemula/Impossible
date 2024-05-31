import { useState } from 'react'
import './App.css'
import { Impossible} from './components/Impossible'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Impossible/>
    </>
  )
}

export default App
