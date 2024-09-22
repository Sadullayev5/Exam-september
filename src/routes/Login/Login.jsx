import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { useLoginMutation } from '../../redux/api/authAPi'
import {login} from '../../redux/slices/authSlice'
import { useDispatch } from 'react-redux'
import { notification } from 'antd'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginUser , {data , isSuccess ,isError}] = useLoginMutation()

    const LoginData = {
        email,
        password
    }

    useEffect(() => {
        if(isSuccess){
            dispatch(login(data))
            notification.success({
                message: "Login Successfully"
            })
            navigate('/profile')
        }
        if(isError){
            notification.error({
                message: "Only defined users can login"
            })
        }
    },[isSuccess ,isError])

    const handleLoginForm = (e) =>{
        e.preventDefault()
        loginUser(LoginData)
        localStorage.setItem("email" , email)
    }

  return (
    <div className='login'>
        <form className='login-form' onSubmit={handleLoginForm}>
            <h1>Login</h1>
            <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            <p>Don't have an account? <Link to="/register">Register</Link></p>
            <button className='button-19'>Login</button>
        </form>
    </div>
  )
}

export default Login