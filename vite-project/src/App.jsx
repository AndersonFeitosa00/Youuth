import React, { useState, useContext } from 'react'
import './App.css'

const UserCont = React.createContext()

function App() {
  const [user, setUser] = useState({name: 'Juvenaldo', role: 'Dev Senior'})

  return (
    <>
    <UserCont.Provider value={user}>
      <Header/>
      <Profile/>
    </UserCont.Provider>
    </>
  )
}


function Header() {
  const user = useContext(UserCont)
  return(
    <p>Bem-vindo, {user.name}</p>
  )
}

function Profile(){
  const user = useContext(UserCont)
  return(
    <p> Bem vindo, {user.role}</p>
  )
}

export default App
