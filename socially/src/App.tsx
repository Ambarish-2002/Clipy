import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Platform from './components/Platform/Platform'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar/>
      <Platform/>
      <h1>
        MY FIRST CHROME EXTENSION
      </h1>
      <button onClick = {() => setCount(count+1)}>Click me</button>
      <p>
        The count is {count}
      </p>
    </div>
  )
}

export default App
