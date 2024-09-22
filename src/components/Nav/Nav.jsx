import { BiLogInCircle } from "react-icons/bi"; 
import { AiOutlineHome } from "react-icons/ai"; 
import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

const Nav = () => {
  if(localStorage.getItem("token")){
    return (
        <nav>
            <ul>
                <li><Link to='/profile' >Profile</Link></li>
                <li><Link to='/'><AiOutlineHome />Home</Link></li>
            </ul>
        </nav>
      )
  }
  else{
    return (
        <nav>
            <ul>
                <li><Link to='/'><AiOutlineHome />Home</Link></li>
                <li><Link to='/login'><BiLogInCircle />Login</Link></li>
                <li><Link to='/register' >Register</Link></li>
            </ul>
        </nav>
      )
  }
}

export default Nav