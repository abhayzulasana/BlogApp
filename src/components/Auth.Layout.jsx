import React,{ useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({chlidren,authentication=true}) {
    const navigate = useNavigate()
    const [loader , setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
        true && true
    },[authStatus,navigate,authentication])
  return loader ? <h1>Loading...</h1> : <> {chlidren}</>
}

