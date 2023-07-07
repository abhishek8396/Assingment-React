import React from 'react'
import Navbar from '../Components/Navbar'
import Cart from '../Components/Cart';
import Todoapp from '../Components/Todoapp';
import Api from '../Components/Api';
const Project = () => {
  return (
    <>
    <Navbar/><hr/>
    <Todoapp/><hr/>
    <Cart/><hr/>
    <Api/>
    </>
  )
}

export default Project