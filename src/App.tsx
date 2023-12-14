import { useState } from 'react'
import './App.css'
import UserRegister from './components/UserRegister'

function App() {
  const [] = useState(0)

  return (
    <>
    <UserRegister /> 
    <UserRegister /> 
    </>
  )
}

export default App
