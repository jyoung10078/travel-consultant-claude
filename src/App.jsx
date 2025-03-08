import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Body from './components/body'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Body />
    </>
  )
}
