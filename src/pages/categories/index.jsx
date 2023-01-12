import React from 'react'
import { useLocation } from 'react-router-dom'
import Home from '../home'

function Categories() {
 const{pathname}= useLocation()



  return (
    <>
    <h1>{pathname}</h1>

    </>
  )
}

export default Categories