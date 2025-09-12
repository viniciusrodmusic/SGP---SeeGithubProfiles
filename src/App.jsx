// Importando css no jsx
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Input from './components/Input'
// Onde coloca o sistema de rotas e layout padrão
function App() {

  const [username, setUsername] = useState('viniciusrodmusic')

  return (
    <>
    <Input onUsernameChange={setUsername} />
    <Card username={username} />
    </>
  )
}

export default App
