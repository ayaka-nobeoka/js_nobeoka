import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>TODO List</h1>
      <input type="text"></input>
      <button>追加</button>
      <h1></h1>
    </>
  )
}

export default App
