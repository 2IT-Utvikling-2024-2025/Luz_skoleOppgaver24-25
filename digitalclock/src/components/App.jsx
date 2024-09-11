import { useState } from 'react'
import './css/App.css'
import ClassTable from './ClassTable'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClassTable/>
    </>
  )
}

export default App
