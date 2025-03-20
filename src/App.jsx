import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login , logout } from "./store/authSlice"
import {Footer , Header } from './components'
import {Outlet} from 'react-router-dom'



function App() {
  const [loading ,setLoading ] = useState (true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({ userData }));
      } else {
        console.warn("No authenticated user found.");
        dispatch(logout());
      }
    })
    .catch(error => console.error("Error fetching user:", error.message))
    .finally(() => setLoading(false));
}, []);

  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>test 
      <div className='w-full block'>
        <Header/>
        <main>
          TODO: <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null

}

export default App
