import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Navigate, Outlet } from 'react-router'
import { useUser } from '@clerk/clerk-react'
import Home from './Home'
import { Toaster } from './components/ui/sonner'
import Header from './components/ui/custom/Header'
import Footer from './components/ui/custom/Footer'


function App() {
  const [count, setCount] = useState(0)
  const {user,isLoaded,isSignedIn}= useUser()
  if(!isSignedIn&&isLoaded){
    return <Navigate to={'/auth/sign-in'} />
  }
 
  return (
    <>
        <Header/>
        <Outlet/>
        <Toaster />
        <Footer/>
    </>
  )
}

export default App
