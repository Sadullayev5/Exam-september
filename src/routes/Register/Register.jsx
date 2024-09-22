import React , {useState , useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { notification } from 'antd'
import { Link } from 'react-router-dom'
import './Register.css'
import { useSignUpMutation } from '../../redux/api/authAPi'
import {signUp} from '../../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signUpUser , {data , isSuccess , isError}] = useSignUpMutation()

    const RegisterData = {
        email,
        password
    }


    useEffect(() => {
        if(isSuccess){
            dispatch(signUp(data))
            notification.success({
                message: "Register Successfully"
            })
            navigate('/profile')
        }
        if(isError){
            notification.error({
                message: "Only defined users succeed registration",
            })
        }
    },[isSuccess , isError])

    const handleRegisterForm = (e) =>{
        e.preventDefault()
        signUpUser(RegisterData)
        localStorage.setItem("email" , email)
    }

  return (
    <div className='register'>
        <form className='register-form' onSubmit={handleRegisterForm}>
            <h1>Create an Account</h1>
            <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            <p> Already have an account? <Link to="/login">Login</Link></p>
            <button className='button-19'>Login</button>
        </form>
    </div>
  )
}

export default Register